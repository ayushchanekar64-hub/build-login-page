import React from 'react';
import { ShieldCheck, LogOut } from 'lucide-react';

interface HeaderProps {
  user: any | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
          <span className="font-bold text-xl text-slate-900 tracking-tight">SecurePortal</span>
        </div>
        <nav className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-600">Hello, {user.first_name}</span>
              <button 
                onClick={onLogout}
                className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-red-500 transition-fast"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <button className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-fast">Features</button>
              <button className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-fast">Documentation</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};