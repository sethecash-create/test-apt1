'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VerifyMethodPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl">
          <p className="text-center text-gray-600 mb-8 text-sm">
            We found you! Pick a method to receive a verification code now.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Send code to email: **********</span>
              <button
                onClick={() => router.push('/loading')}
                className="bg-[#1a5f6e] hover:bg-[#154f5c] text-white px-6 py-2.5 rounded flex items-center gap-2 text-sm font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
                  <polyline points="1,4 8,9 15,4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                E-MAIL
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Send code via text: ***-***-****</span>
              <button
                onClick={() => router.push('/loading')}
                className="bg-[#1a5f6e] hover:bg-[#154f5c] text-white px-6 py-2.5 rounded flex items-center gap-2 text-sm font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="2" width="14" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
                  <polyline points="4,12 4,14 8,12" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                </svg>
                TEXT
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => router.push('/')}
              className="border border-gray-300 rounded px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="1" y1="1" x2="13" y2="13" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="13" y1="1" x2="1" y2="13" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              CANCEL
            </button>
            <button
              onClick={() => router.back()}
              className="border border-gray-300 rounded px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <polyline points="9,2 3,7 9,12" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              BACK
            </button>
          </div>

          <div className="text-center mt-6">
            <a href="#" className="text-sm text-[#1a7a6e] hover:underline">
              I cannot receive a verification code
            </a>
          </div>
        </div>
      </main>

      <Footer showSiteMap={true} />
    </div>
  );
}
