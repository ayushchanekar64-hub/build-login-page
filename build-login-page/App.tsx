import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [user, setUser] = useState<any | null>(null);
  const [showFlash, setShowFlash] = useState(false);

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 3000);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header user={user} onLogout={handleLogout} />
      
      <main className="flex-grow pt-16">
        {user ? (
          <div className="max-w-4xl mx-auto py-20 px-4 text-center animate-slide-in">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Authentication Successful</h2>
              <p className="text-lg text-slate-500 max-w-md mx-auto mb-8">
                Welcome back, {user.first_name}. You are now securely logged into your dashboard.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-fast">
                  Access Dashboard
                </button>
                <button 
                  onClick={handleLogout}
                  className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-fast"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Hero onAuthSuccess={handleAuthSuccess} />
        )}
      </main>

      {showFlash && (
        <div className="fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in z-50">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <p className="font-medium">Successfully authenticated!</p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;