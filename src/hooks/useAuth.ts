import { useState, useEffect } from 'react';
import { authService } from '@/services/auth';

interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  provider: 'google' | 'email';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Check initial auth status
    authService.checkAuthStatus();

    // Subscribe to auth state changes
    const unsubscribe = authService.subscribe((state) => {
      setAuthState(state);
    });

    return unsubscribe;
  }, []);

  const signOut = async () => {
    await authService.signOut();
  };

  const sendProgressNotification = async (progress: any) => {
    if (authState.user) {
      await authService.sendProgressNotification(authState.user, progress);
    }
  };

  return {
    ...authState,
    signOut,
    sendProgressNotification
  };
};