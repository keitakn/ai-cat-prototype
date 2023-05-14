'use client';

import type { FC, FormEvent } from 'react';
import Image from 'next/image';
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
      <div className="flex justify-between border-b-2 border-amber-200 bg-yellow-200 py-3 sm:items-center">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <Image
              src="https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp"
              // TODO width, heightの指定方法をどうするか後で考える
              width={330}
              height={400}
              alt="もこちゃん"
              className="h-10 w-10 rounded-full sm:h-16 sm:w-16"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="mt-1 flex items-center text-2xl">
              <span className="mr-3 text-gray-700">もこちゃん</span>
            </div>
            <span className="text-lg text-gray-600">チンチラシルバー</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* Buttonとかを並べるエリア */}
        </div>
      </div>
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
