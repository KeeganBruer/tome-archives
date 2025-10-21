'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StandardsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/standards/file-structure');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center space-y-2">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
        <p className="text-sm text-muted-foreground">Loading standards...</p>
      </div>
    </div>
  );
}
