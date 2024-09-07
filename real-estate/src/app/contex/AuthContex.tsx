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

// Typ dla kontekstu
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

// Inicjalizujemy kontekst z domyślnymi wartościami
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  // Funkcja logowania
  const login = () => {
    setIsAuthenticated(true);
    router.push('/auths');
  };

  // Funkcja wylogowania
  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    setIsAuthenticated(false);
    router.push('/');
  };

  // Funkcja sprawdzająca autoryzację i ewentualnie odświeżająca token
  const checkAuth = async () => {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');
    console.log('lol');
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
        console.log('check');
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
    // Funkcja do ustawienia interwału, jeśli użytkownik jest zalogowany
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

    // Uruchom checkAuth po załadowaniu komponentu
    checkAuth();

    // Ustaw interwał, jeśli jest zalogowany
    const cleanup = startInterval();

    return cleanup;
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook do korzystania z kontekstu
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
