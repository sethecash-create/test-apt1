'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/2fa');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="flex flex-col items-center gap-4">
          <svg
            className="animate-spin"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#9ca3af"
              strokeWidth="3"
              strokeDasharray="90 30"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-sm text-gray-700">Sending verification code to your email...</p>
          <p className="text-xs text-gray-400">Please wait. This may take up to 0:31.</p>
        </div>
      </main>

      <Footer showSiteMap={true} />
    </div>
  );
}
