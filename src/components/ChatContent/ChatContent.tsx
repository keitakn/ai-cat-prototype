'use client';

import {
  useRef,
  useState,
  type FC,
  type FormEvent,
  type KeyboardEvent,
} from 'react';
import { ChatMessagesList, type ChatMessages } from './ChatMessagesList';

type Props = {
  initChatMessages: ChatMessages;
};

export const ChatContent: FC<Props> = ({ initChatMessages }) => {
  const [chatMessages, setChatMessages] =
    useState<ChatMessages>(initChatMessages);

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (ref.current?.value != null) {
      const message = ref.current.value;

      ref.current.value = '';

      const newChatMessages = chatMessages.concat([
        {
          role: 'user',
          name: 'user',
          message,
          avatarUrl:
            'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
        },
      ]);

      setChatMessages(newChatMessages);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.shiftKey && event.key === 'Enter') {
      const submitEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
      });
      event.currentTarget.form?.dispatchEvent(submitEvent);
      event.preventDefault();
    }
  };

  return (
    <>
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
              ref={ref}
              onKeyDown={handleKeyDown}
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
