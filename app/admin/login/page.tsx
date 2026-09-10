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
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center py-20 px-6 font-sans text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(3,14,68,0.04)_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <Toaster 
        position="top-right" 
        toastOptions={{ 
          className: 'bg-white border border-slate-200 text-slate-900 text-sm font-sans shadow-lg' 
        }} 
      />

      <div className="w-full max-w-[500px] bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-2xl relative z-10 text-slate-900">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
            Administrative Access
          </span>
          <h1 className="text-3xl font-serif font-extrabold text-[#030e44] mt-3 leading-snug">
            Admin Login.
          </h1>
          <p className="text-xs text-slate-600 mt-2">
            Enter admin credentials to access the newsroom &amp; article manager.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Admin Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username..."
              autoComplete="username"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#030e44] focus:ring-1 focus:ring-[#030e44] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              autoComplete="current-password"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#030e44] focus:ring-1 focus:ring-[#030e44] outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#030e44] hover:bg-[#070742] text-white !text-white font-semibold py-3 px-6 rounded-lg text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50 disabled:pointer-events-none shadow-md flex items-center justify-center gap-2"
            style={{ color: '#ffffff' }}
          >
            {isLoading ? (
              <span className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <span className="text-white !text-white font-semibold" style={{ color: '#ffffff' }}>Sign In →</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
