import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

const font = Noto_Sans_JP({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'AI Cat もこちゃん🐱',
  description: 'ねこのAI（もこちゃん）とお話しよう🐱',
};

const ChatLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default ChatLayout;
