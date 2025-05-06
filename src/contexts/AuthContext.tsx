import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: string | null;
  setIsAuthenticated: (value: boolean) => void;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Define valid users
const validUsers: User[] = [
  { username: 'admin', password: 'password' },
  { username: 'bobbyb343', password: 'Master123' }
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = (username: string, password: string): boolean => {
    console.log('Attempting login with:', { username, password });
    
    // Trim whitespace from inputs
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    
    const user = validUsers.find(
      (u) => u.username === trimmedUsername && u.password === trimmedPassword
    );
    
    console.log('Found user:', user);
    
    if (user) {
      console.log('Login successful for user:', user.username);
      setIsAuthenticated(true);
      setCurrentUser(user.username);
      return true;
    }
    
    console.log('Login failed - no matching user found');
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    navigate('/');
  };

  /*
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  */

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, setIsAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
