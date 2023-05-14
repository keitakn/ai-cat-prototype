import type { FC, ReactNode } from 'react';
import { Footer } from '@/components/Footer';

type Props = {
  children: ReactNode;
};

export const ChatContentLayout: FC<Props> = ({ children }) => {
  return (
    <main className="flex h-screen flex-1 flex-col justify-between bg-yellow-100 p-2 sm:p-6">
      {children}
      <Footer />
    </main>
  );
};
