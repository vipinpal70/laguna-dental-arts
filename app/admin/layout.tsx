'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import AdminProviders from '@/components/AdminProviders';
import { isAdminAuthenticated, setAdminAuthenticated } from '@/lib/admin-auth';
import { Home, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';
  const [authChecked, setAuthChecked] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (isLoginPage) return;
    const ok = isAdminAuthenticated();
    setAuthed(ok);
    setAuthChecked(true);
    if (!ok) {
      router.replace('/admin/login');
    }
  }, [isLoginPage, pathname, router]);

  if (isLoginPage) {
    return <AdminProviders>{children}</AdminProviders>;
  }

  const navItems = [
    { name: 'Insights & Articles', href: '/admin/insights' },
    { name: 'Customer Stories', href: '/admin/customers' },
  ];

  const handleLogout = () => {
    setAdminAuthenticated(false);
    router.push('/admin/login');
  };

  if (!authChecked || !authed) {
    return (
      <AdminProviders>
        <div className="bg-white min-h-screen flex items-center justify-center text-navy-800 font-sans">
          <span className="w-8 h-8 border-3 border-blue-default border-t-transparent rounded-full animate-spin" />
        </div>
      </AdminProviders>
    );
  }

  return (
    <AdminProviders>
      <div className="bg-slate-50 min-h-screen py-6 text-slate-900 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 mb-8 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-navy block mb-1">
                Admin Panel
              </span>
              <Image
                src="/images/laguna-dental-arts-logo.png"
                alt="Laguna Dental Arts"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shadow-sm"
              >
                <Home className="w-4 h-4" />
                Go to Website
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all flex items-center gap-2 shadow-sm"
              >
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>

          {/* Sub Navigation Bar */}
          <div className="flex gap-2 overflow-x-auto pb-4 border-b border-slate-200 mb-8">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname?.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-navy text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className={`${active ? 'text-white' : 'text-slate-700'}`}>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Page Content */}
          <div className="bg-white border border-black rounded-2xl p-6 md:p-8 shadow-xl relative">
            {children}
          </div>
        </div>
      </div>
    </AdminProviders>
  );
}
