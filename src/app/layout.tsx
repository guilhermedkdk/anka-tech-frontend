import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LayoutWrapper } from '@/components/layout-wrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sistema Financeiro',
  description: 'Sistema de gerenciamento financeiro pessoal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider>
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
