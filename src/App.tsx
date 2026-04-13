import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Router from './router';
import { useEffect } from 'react';
import { supabase } from '@/config/supabase';
import { useAppDispatch } from '@/store/hooks';
import { setUser, setLoading } from '@/store/slices/authSlice';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function AppContent() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      const u = data.session?.user;
      if (u) {
        dispatch(
          setUser({ id: u.id, email: u.email || '', user_type: 'student' })
        );
      } else {
        dispatch(setUser(null));
      }
      dispatch(setLoading(false));
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange((
      _event: any,
      session: any
    ) => {
      const u = session?.user;
      if (u) {
        dispatch(
          setUser({ id: u.id, email: u.email || '', user_type: 'student' })
        );
      } else {
        dispatch(setUser(null));
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

