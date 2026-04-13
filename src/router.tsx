import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '@/config/routes';
import Login from './pages/Auth/Login';
import AgeSelection from './pages/AgeSelection';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Pets from './pages/Pets';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import DayStreak from './pages/DayStreak';
import Questions from './pages/Questions';
import Accuracy from './pages/Accuracy';
import Contacts from './pages/Contacts';
import Quiz from './pages/Quiz';
import SubjectTopics from './pages/SubjectTopics';
import SubjectContent from './pages/SubjectContent';
import AIAssistant from './pages/AIAssistant';
import Tutor from './pages/Tutor';
import Onboarding from '@/pages/Onboarding';
// import { useAuth } from '@/hooks/useAuth';

function RequireAuth({ children }: { children: JSX.Element }) {
  // Temporarily bypass auth for development - app works immediately
  return children;
  
  /* 
  // Uncomment this when you want to enable authentication:
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading EduQuest...</h2>
          <p className="text-gray-500 mt-2">Preparing your learning adventure! 🚀</p>
        </div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to={ROUTES.AUTH} replace />;
  */
}

function PublicRoute({ children }: { children: JSX.Element }) {
  // Temporarily bypass auth for development
  return children;
  
  /*
  // Uncomment this when you want to enable authentication:
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading EduQuest...</h2>
          <p className="text-gray-500 mt-2">Preparing your learning adventure! 🚀</p>
        </div>
      </div>
    );
  }
  
  return isAuthenticated ? <Navigate to={ROUTES.HOME} replace /> : children;
  */
}

function Router() {
  return (
    <Routes>
      <Route path={ROUTES.AUTH} element={<PublicRoute><Login /></PublicRoute>} />
      <Route path={ROUTES.AGE_SELECTION} element={<AgeSelection />} />
      <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />
      <Route path={ROUTES.HOME} element={<RequireAuth><Home /></RequireAuth>} />
      <Route path={ROUTES.SUBJECTS} element={<RequireAuth><Learn /></RequireAuth>} />
      <Route path="/subject/:subjectId" element={<RequireAuth><SubjectTopics /></RequireAuth>} />
      <Route path="/subject-content/:subjectId" element={<RequireAuth><SubjectContent /></RequireAuth>} />
      <Route path={ROUTES.PET_CARE} element={<RequireAuth><Pets /></RequireAuth>} />
      <Route path={ROUTES.PROFILE} element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path={ROUTES.PROGRESS} element={<RequireAuth><Progress /></RequireAuth>} />
      <Route path="/progress/:subjectId" element={<RequireAuth><Progress /></RequireAuth>} />
      <Route path={ROUTES.DAY_STREAK} element={<RequireAuth><DayStreak /></RequireAuth>} />
      <Route path={ROUTES.QUESTIONS} element={<RequireAuth><Questions /></RequireAuth>} />
      <Route path={ROUTES.ACCURACY} element={<RequireAuth><Accuracy /></RequireAuth>} />
      <Route path={ROUTES.CONTACTS} element={<RequireAuth><Contacts /></RequireAuth>} />
      <Route path={ROUTES.AI_ASSISTANT} element={<RequireAuth><AIAssistant /></RequireAuth>} />
      <Route path={ROUTES.TUTOR} element={<RequireAuth><Tutor /></RequireAuth>} />
      <Route path="/quiz/:subject" element={<RequireAuth><Quiz /></RequireAuth>} />
      <Route path="/quiz/:subject/:topic/:level" element={<RequireAuth><Quiz /></RequireAuth>} />
      <Route path="/" element={<Navigate to={ROUTES.AUTH} replace />} />
      <Route path="*" element={<Navigate to={ROUTES.AUTH} replace />} />
    </Routes>
  );
}

export default Router;

