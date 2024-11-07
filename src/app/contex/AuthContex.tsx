'use client';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  const login = () => {
    setIsAuthenticated(true);
    router.push('/auths');
  };

  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    setIsAuthenticated(false);
    router.push('/');
  };

  const checkAuth = async () => {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (!accessToken && !refreshToken) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const response = await fetch('/api/check-token', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else if (response.status === 401 && refreshToken) {
        const refreshResponse = await fetch('/api/refresh-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        });

        if (refreshResponse.ok) {
          const data = await refreshResponse.json();
          Cookies.set('accessToken', data.accessToken);
          setIsAuthenticated(true);
          console.log('refresh');
        } else {
          logout();
        }
      } else {
        logout();
      }
    } catch {
      logout();
    }
  };

  useEffect(() => {
    const startInterval = () => {
      if (isAuthenticated) {
        const intervalId = setInterval(
          () => {
            checkAuth();
          },
          28 * 60 * 1000
        );

        return () => clearInterval(intervalId);
      }
    };

    checkAuth();

    startInterval();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
