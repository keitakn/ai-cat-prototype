import type { FC, ReactNode } from 'react';
import { Footer } from '@/components/Footer';

type Props = {
  children: ReactNode;
};

export const ChatContentLayout: FC<Props> = ({ children }) => {
  return (
    <main className="p:2 flex h-screen flex-1 flex-col justify-between bg-yellow-100 sm:p-6">
      {children}
      <Footer />
    </main>
  );
};
