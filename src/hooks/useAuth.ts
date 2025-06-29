import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  id: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user');
      const authStatus = localStorage.getItem('isAuthenticated');
      
      if (storedUser && authStatus === 'true') {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
      
      setLoading(false);
    };

    checkAuth();

    // Listen for auth state changes
    const handleAuthStateChange = () => {
      checkAuth();
    };

    window.addEventListener('authStateChanged', handleAuthStateChange);
    
    return () => {
      window.removeEventListener('authStateChanged', handleAuthStateChange);
    };
  }, []);

  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    setUser(null);
    setIsAuthenticated(false);
    window.dispatchEvent(new CustomEvent('authStateChanged'));
  };

  return {
    user,
    isAuthenticated,
    loading,
    signOut
  };
};