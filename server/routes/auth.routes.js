const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();
const User = require('../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: config.get('cloudinary.cloud_name'),
  api_key: config.get('cloudinary.api_key'),
  api_secret: config.get('cloudinary.api_secret')
});

router.post(
  '/register', 
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Min password length is 4 symbols')
      .isLength({ min: 4 })
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'checkInputs'
      });
    }

    const { email, password, avatar, name } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      res.status(400).json({ message: 'exist' });
    }

    const passwordHashed = await bcrypt.hash(password, 8);
    const { secure_url } = await cloudinary.uploader.upload(avatar);
    const user = new User({ email, password: passwordHashed, avatarUrl: secure_url, name });

    await user.save();
    res.status(201).json({ 
      message: 'regDone', 
      secure_url,  
    });
    
  } catch (error) {
    res.status(500).json({ message: 'servErr' })
  }
});

router.post(
  '/login', [
    check('email', 'incorrect email').normalizeEmail().isEmail(),
    check('password', 'enter a password').exists()
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'checkData'
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'checkData' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'checkData' });
    }

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' },
    );

    const profile = { 
      avatar: user.avatarUrl, 
      userName: user.name,
    };
    res.json({ token, userId: user.id, userProfile: profile, message: 'logDone' });
    
  } catch (error) {
    res.status(500).json({ message: 'servErr' })
  }
});

module.exports = router;
