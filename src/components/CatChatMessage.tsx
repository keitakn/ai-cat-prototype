import type { FC } from 'react';

type Props = {
  message: string;
  avatarUrl: string;
  name: string;
};
export const CatChatMessage: FC<Props> = ({ message, avatarUrl, name }) => {
  return (
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100">{message}</span>
          </div>
        </div>
        <img
          src={avatarUrl}
          alt={name} className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
      </div>
    </div>

  );
};
