import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  
  const login = useCallback((jwtToken, id, profile) => {
    setToken(jwtToken);
    setUserId(id);
    setUserProfile(profile);

    localStorage.setItem(storageName, JSON.stringify({
      token: jwtToken, userId: id, userProfile: profile
    }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setUserProfile(null);
    localStorage.removeItem(storageName);
  }, []);
    
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(storageName));
    if (userData) {
      login(userData.token, userData.userId, userData.userProfile);
    }
  }, [login]);

  return { login, logout, token, userId, userProfile };
};

export default useAuth;
