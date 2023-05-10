import type { FC, ReactNode } from 'react';
import { Footer } from "@/components/Footer";

type Props = {
  children: ReactNode;
};

export const ChatContentLayout: FC<Props> = ({ children }) => {
  return (
    <main className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-yellow-100">
      {children}
      <Footer />
    </main>
  );
};
