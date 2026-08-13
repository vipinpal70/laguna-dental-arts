'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

export default function AdminProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'bg-navy-card border border-white/10 text-white text-sm font-sans',
          duration: 3000,
        }}
      />
      {children}
    </>
  );
}
