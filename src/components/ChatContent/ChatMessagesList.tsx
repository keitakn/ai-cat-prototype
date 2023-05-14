import type { FC } from 'react';
import { CatChatMessage } from '@/components/ChatContent/CatChatMessage';
import { UserChatMessage } from '@/components/ChatContent/UserChatMessage';

type ChatMessage = {
  role: 'user' | 'cat';
  name: string;
  message: string;
  avatarUrl: string;
};

export type ChatMessages = ChatMessage[];

type Props = {
  chatMessages: ChatMessages;
};

export const ChatMessagesList: FC<Props> = ({ chatMessages }) => {
  return (
    <div
      id="messages"
      className="flex flex-col space-y-4 overflow-y-auto bg-yellow-100 p-3"
    >
      {chatMessages.map((value, index) => {
        return value.role === 'user' ? (
          <UserChatMessage
            name={value.name}
            message={value.message}
            avatarUrl={value.avatarUrl}
            key={index}
          />
        ) : (
          <CatChatMessage
            name={value.name}
            message={value.message}
            avatarUrl={value.avatarUrl}
            key={index}
          />
        );
      })}
    </div>
  );
};
