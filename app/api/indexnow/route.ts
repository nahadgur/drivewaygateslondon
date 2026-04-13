import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

const INDEXNOW_KEY = '4603efc0e26340f780cfb9cbf25fabc0';

export async function POST(request: NextRequest) {
  const { urls } = await request.json() as { urls: string[] };

  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ error: 'Provide a "urls" array' }, { status: 400 });
  }

  const body = {
    host: siteConfig.domain,
    key: INDEXNOW_KEY,
    keyLocation: `${siteConfig.url}/${INDEXNOW_KEY}.txt`,
    urlList: urls.slice(0, 10000),
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  return NextResponse.json(
    { status: response.status, submitted: urls.length },
    { status: response.ok ? 200 : 502 },
  );
}
