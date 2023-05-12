import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

const font = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'AI Cat🐱',
  description: 'ねこのAIとお話しよう🐱',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
