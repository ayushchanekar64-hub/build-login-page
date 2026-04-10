import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Secure Authentication Portal. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-fast">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition-fast">Terms of Service</a>
          <a href="#" className="hover:text-blue-600 transition-fast">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};