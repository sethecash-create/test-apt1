'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    router.push('/verify-method');
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header showSubtitle={true} />

      <main className="flex-1 px-16 py-10">
        <div className="w-full max-w-[460px]">

          <div className="mb-4">
            <div className="border border-gray-300 rounded inline-flex p-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="5" y="14" width="22" height="16" rx="2" stroke="#9ca3af" strokeWidth="1.8" fill="none" />
                <path d="M10 14V10a6 6 0 0 1 12 0v4" stroke="#9ca3af" strokeWidth="1.8" fill="none" />
                <circle cx="16" cy="22" r="2" fill="#9ca3af" />
              </svg>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-5 leading-snug max-w-xs">
            We will maintain the confidentiality of your personal information in accordance with our privacy policy.
          </p>

          <h1 className="text-2xl font-normal text-gray-800 mb-6">Sign in</h1>

          <form onSubmit={handleSignIn} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UserId <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={userId}
                onChange={e => setUserId(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1b6e68]"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Forgot your Username?{' '}
                <a href="#" className="text-[#1b6e68] hover:underline">Let us help</a>
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1b6e68]"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Forgot your Password?{' '}
                <a href="#" className="text-[#1b6e68] hover:underline">Let us help</a>
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#1b5c6b] hover:bg-[#164d5a] text-white px-6 py-2.5 rounded flex items-center gap-2 text-sm font-medium"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <polyline points="1,7 5,11 13,3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-2">Don&apos;t have an account?</p>
            <button className="border border-gray-300 bg-gray-100 hover:bg-gray-200 rounded px-5 py-2 text-sm text-gray-700 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="5" r="3" stroke="#555" strokeWidth="1.4" fill="none" />
                <path d="M1 14c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" stroke="#555" strokeWidth="1.4" fill="none" />
                <line x1="13" y1="8" x2="15" y2="8" stroke="#555" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="14" y1="7" x2="14" y2="9" stroke="#555" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Register
            </button>
          </div>

        </div>
      </main>

      <Footer showSiteMap={true} />
    </div>
  );
}
