import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // liberar assets e imagens
  const isAsset =
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    pathname === '/icon.svg' ||
    pathname.startsWith('/icons/') ||
    /\.(png|jpg|jpeg|gif|webp|svg)$/.test(pathname);

  if (isAsset) return NextResponse.next();

  const isAuthRoute = pathname === '/login' || pathname === '/register';

  const token = req.cookies.get('access_token')?.value;

  // sem token: só pode /login e /register
  if (!token && !isAuthRoute) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('from', pathname); // opcional
    return NextResponse.redirect(url);
  }

  // com token: não precisa ver login/register
  if (token && isAuthRoute) {
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// aplicar em tudo (exceto os assets acima)
export const config = {
  matcher: ['/:path*'],
};
