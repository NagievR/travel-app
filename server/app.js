const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true, limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 8080;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'));
}

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.log({ 'Error' : err.message });
    process.exit(1);
  }
};

start();

app.listen(PORT, () => console.log(`Server started. Port ${PORT}.`));
