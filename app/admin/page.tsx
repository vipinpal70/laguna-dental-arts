'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/insights');
  }, [router]);

  return (
    <div className="flex items-center justify-center py-20 text-gray-400">
      Redirecting to admin insights dashboard...
    </div>
  );
}
