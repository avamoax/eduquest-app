import { ReactNode } from 'react';
import { BottomNavigation } from '../BottomNavigation';

interface LayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
}

export default function Layout({ children, showBottomNav = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {children}
      {showBottomNav && <BottomNavigation />}
    </div>
  );
}

