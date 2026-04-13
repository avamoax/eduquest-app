import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/config/routes';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { path: ROUTES.HOME, label: 'Home', icon: '🏠' },
  { path: ROUTES.SUBJECTS, label: 'Subjects', icon: '📖' },
  { path: ROUTES.PET_CARE, label: 'My Pets Col...', icon: '✨' },
  { path: ROUTES.PROGRESS, label: 'Your Progre...', icon: '🏆' },
];

export default function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          // Check if current path matches or starts with the nav item path
          const isActive = 
            location.pathname === item.path || 
            (item.path === ROUTES.PROGRESS && location.pathname.startsWith('/progress'));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center px-4 py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-gray-500'
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-gray-500'}`}>
                {item.label}
              </span>
              {isActive && <div className="w-full h-0.5 bg-primary mt-1" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

