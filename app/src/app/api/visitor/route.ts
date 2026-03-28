import { NextRequest, NextResponse } from 'next/server';
import { sendTelegram } from '@/lib/telegram';
import { getGeoInfo } from '@/lib/geo';

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'Unknown';

  const body = await req.json();
  const { userAgent, screen, language, referrer, url, localTime, utcTime, timezone } = body;

  const geo = await getGeoInfo(ip);
  const resolvedTimezone = geo.timezone !== 'Unknown' ? geo.timezone : (timezone ?? 'Unknown');

  const text =
    `🌐 <b>New Visitor</b>\n\n` +
    `📍 Location: ${geo.location}\n` +
    `🌐 IP: ${ip}\n` +
    `⏰ Timezone: ${resolvedTimezone}\n` +
    `🌐 ISP: ${geo.isp}\n\n` +
    `📱 Device: ${userAgent ?? 'Unknown'}\n` +
    `🖥️ Screen: ${screen ?? 'Unknown'}\n` +
    `🌐 Language: ${language ?? 'Unknown'}\n` +
    `🔗 Referrer: ${referrer || 'Direct'}\n` +
    `🌐 URL: ${url ?? 'Unknown'}\n\n` +
    `⏰ Local Time: ${localTime ?? 'Unknown'}\n` +
    `🕐 UTC Time: ${utcTime ?? 'Unknown'}`;

  await sendTelegram(text);
  return NextResponse.json({ ok: true });
}
