'use client';

import {
  useRef,
  useState,
  type FC,
  type FormEvent,
  type KeyboardEvent,
} from 'react';
import { ChatMessagesList, type ChatMessages } from './ChatMessagesList';

type ResponseBody = {
  message: string;
};

type Props = {
  initChatMessages: ChatMessages;
};

export const ChatContent: FC<Props> = ({ initChatMessages }) => {
  const [chatMessages, setChatMessages] =
    useState<ChatMessages>(initChatMessages);

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (ref.current?.value != null) {
      const message = ref.current.value;

      ref.current.value = '';

      const newUserMessage = {
        role: 'user',
        name: 'User',
        message,
        avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?s=96&v=4',
      } as const;
      const newChatMessages = [...chatMessages, ...[newUserMessage]];

      setChatMessages(newChatMessages);

      const response = await fetch(`/api/cats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ catName: 'moko', message }),
      });
      const body = (await response.json()) as ResponseBody;

      const newCatMessage = {
        role: 'cat',
        name: 'もこちゃん',
        message: body.message,
        avatarUrl:
          'https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp',
      } as const;

      const newCatReplyContainedChatMessage = [
        ...newChatMessages,
        ...[newCatMessage],
      ];
      setChatMessages(newCatReplyContainedChatMessage);
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
              placeholder="Type your message here. Press Enter + Shift to send."
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
