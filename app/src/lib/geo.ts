export interface GeoInfo {
  location: string;
  timezone: string;
  isp: string;
}

export async function getGeoInfo(ip: string): Promise<GeoInfo> {
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city,timezone,isp`);
    const data = await res.json();
    if (data.status === 'success') {
      return {
        location: [data.city, data.regionName, data.country].filter(Boolean).join(', ') || 'Unknown',
        timezone: data.timezone || 'Unknown',
        isp: data.isp || 'Unknown',
      };
    }
  } catch {}
  return { location: 'Unknown', timezone: 'Unknown', isp: 'Unknown' };
}
