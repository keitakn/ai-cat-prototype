'use client';

import type { FC, FormEvent } from 'react';
import { ChatHeader } from '@/components/ChatContent/ChatHeader';
import { ChatMessagesList, type ChatMessages } from './ChatMessagesList';

type Props = {
  chatMessages: ChatMessages;
};

export const ChatContent: FC<Props> = ({ chatMessages }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <ChatHeader />
      <ChatMessagesList chatMessages={chatMessages} />
      <div className="mb-2 border-t-2 border-amber-200 bg-yellow-100 px-4 pt-4 sm:mb-0">
        <form
          id="send-message"
          method="post"
          action=""
          onSubmit={handleSubmit}
          aria-label="send to message"
        >
          <div className="relative flex">
            <textarea
              id="message-input"
              name="message-input"
              placeholder="Write your message!"
              className="w-full rounded-md py-3 pl-4 text-gray-600 placeholder:text-gray-600  focus:outline-none focus:placeholder:text-gray-400"
            />
          </div>
          <div className="mt-1 flex flex-row-reverse">
            <button
              type="submit"
              className="rounded-md bg-orange-500 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
