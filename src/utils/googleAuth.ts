import { supabase } from '@/config/supabase';
import { ROUTES } from '@/config/routes';

export const initiateGoogleAuth = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}${ROUTES.HOME}`,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account', // Forces account selection dialog
        },
      },
    } as any);

    if (error) throw error;
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err };
  }
};

export const handleGoogleAuthCallback = async () => {
  try {
    // Check if we have a session after OAuth callback
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) throw error;
    if (session?.user) {
      return {
        user: {
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.full_name || '',
          picture: session.user.user_metadata?.picture || '',
        },
        error: null,
      };
    }
    
    return { user: null, error: new Error('No user session found') };
  } catch (err: any) {
    return { user: null, error: err };
  }
};
