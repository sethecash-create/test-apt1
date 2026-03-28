'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TwoFactorPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  function handleChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...code];
    next[index] = value;
    setCode(next);
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    router.push('/');
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="border border-gray-200 rounded-lg p-10 w-full max-w-md flex flex-col items-center gap-5">
          <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
            <rect x="12" y="4" width="40" height="64" rx="6" stroke="#333" strokeWidth="2" fill="none" />
            <rect x="20" y="12" width="24" height="40" rx="2" stroke="#ccc" strokeWidth="1" fill="none" />
            <rect x="28" y="62" width="8" height="2" rx="1" fill="#333" />
            <rect x="26" y="4" width="12" height="4" rx="2" fill="#333" />
            <rect x="24" y="28" width="16" height="12" rx="2" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M28 28V24a4 4 0 0 1 8 0v4" stroke="#333" strokeWidth="1.5" fill="none" />
            <circle cx="32" cy="34" r="1.5" fill="#333" />
          </svg>

          <h2 className="text-lg font-medium text-gray-800">Two-Factor Authentication</h2>
          <p className="text-sm text-gray-500 text-center">Enter the One Time Password sent to you</p>

          <form onSubmit={handleVerify} className="flex flex-col items-center gap-5 w-full">
            <div className="flex gap-2 justify-center">
              {code.map((digit, i) => (
                <input
                  key={i}
                  ref={el => { inputs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={e => handleChange(i, e.target.value)}
                  onKeyDown={e => handleKeyDown(i, e)}
                  className="w-10 h-11 border border-gray-300 rounded text-center text-base focus:outline-none focus:border-[#1a7a6e]"
                />
              ))}
            </div>

            <p className="text-xs text-gray-500">
              Didn&apos;t receive the code?{' '}
              <a href="#" className="text-[#1a7a6e] hover:underline">Resend code</a>
            </p>

            <button
              type="submit"
              className="bg-[#1a5f6e] hover:bg-[#154f5c] text-white px-8 py-2.5 rounded flex items-center gap-2 text-sm font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <polyline points="2,8 6,12 14,4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Verify
            </button>
          </form>
        </div>
      </main>

      <Footer showSiteMap={true} />
    </div>
  );
}
