import { createContext, useContext } from 'react';

const nop = () => console.log('no operation');

export const AuthContext = createContext({
  userId: null,
  userProfile: null,
  isAuthenticated: false,
  login: nop,
  logout: nop
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};
