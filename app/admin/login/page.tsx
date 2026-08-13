'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { ADMIN_USERNAME, ADMIN_PASSWORD, setAdminAuthenticated } from '@/lib/admin-auth';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error('Please enter your username and password');
      return;
    }

    setIsLoading(true);
    try {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setAdminAuthenticated(true);
        toast.success('Successfully logged in!');
        router.push('/admin/insights');
      } else {
        toast.error('Invalid username or password');
      }
    } catch {
      toast.error('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-navy min-h-[80vh] flex flex-col items-center justify-center py-20 px-6 font-sans text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-default/10 rounded-full blur-[120px] pointer-events-none" />
      
      <Toaster 
        position="top-right" 
        toastOptions={{ 
          className: 'bg-navy-card border border-white/10 text-white text-sm font-sans' 
        }} 
      />

      <div className="w-full max-w-[420px] bg-navy-card border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-glow">
            Administrative Access
          </span>
          <h1 className="text-3xl font-serif font-extrabold text-white mt-1 leading-snug">
            Admin Login.
          </h1>
          <p className="text-xs text-muted-dark mt-2">
            Enter admin credentials to access the newsroom & article manager.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Admin Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username..."
              autoComplete="username"
              className="w-full bg-navy/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-[#aab4ce] focus:border-blue-default outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              autoComplete="current-password"
              className="w-full bg-navy/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-[#aab4ce] focus:border-blue-default outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-default hover:bg-blue-bright text-white font-semibold py-3 px-6 rounded-lg text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50 disabled:pointer-events-none shadow-lg flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              'Sign In →'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
