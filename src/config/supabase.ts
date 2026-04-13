import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let client: any;
if (supabaseUrl && supabaseAnonKey) {
  client = createClient(supabaseUrl, supabaseAnonKey);
} else {
  const noopSub = { unsubscribe: () => {} };
  client = {
    auth: {
      async getSession() {
        return { data: { session: null }, error: null };
      },
      async signInWithPassword() {
        return { data: { user: null }, error: new Error('Missing Supabase credentials') };
      },
      async signUp() {
        return { data: { user: null }, error: new Error('Missing Supabase credentials') };
      },
      async signInWithOAuth() {
        return { data: { provider: 'google' }, error: new Error('Missing Supabase credentials') };
      },
      onAuthStateChange() {
        return { data: { subscription: noopSub } };
      },
    },
  };
}

export const supabase = client;

