import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Get Globe Bridge - Desenvolvimento Web Profissional',
  description: 'Transformamos ideias em experiências digitais. Sites, e-commerce, landing pages e sistemas web modernos.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  openGraph: {
    title: 'Get Globe Bridge - Desenvolvimento Web Profissional',
    description: 'Transformamos ideias em experiências digitais. Sites, e-commerce, landing pages e sistemas web modernos.',
    images: ['/og-image.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
