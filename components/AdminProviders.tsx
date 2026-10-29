'use client';

import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function AdminProviders({ children }: { children: React.ReactNode }) {
  // staleTime > 0 so repeat visits to an admin tab within the window reuse
  // the cache instead of refetching on every mount (the TanStack Query
  // default of 0 would otherwise make this a no-op).
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 30_000 } },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'bg-navy-card border border-white/10 text-white text-sm font-sans',
          duration: 3000,
        }}
      />
      {children}
      {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
