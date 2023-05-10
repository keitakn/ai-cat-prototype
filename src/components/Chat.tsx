'use client';

import type { FC, FormEvent } from 'react';
import {Footer} from "@/components/Footer";
import {UserChatMessage} from "@/components/UserChatMessage";
import {CatChatMessage} from "@/components/CatChatMessage";

type ChatMessage = {
  role: 'user' | 'cat';
  name: string;
  message: string;
  avatarUrl: string;
};

type ChatMessages = ChatMessage[];

type Props = {
  chatMessages: ChatMessages;
};

export const Chat: FC<Props> = ({ chatMessages }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-yellow-100">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-amber-200 bg-yellow-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <img
              src="https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp"
              alt="もこちゃん" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="text-gray-700 mr-3">もこちゃん</span>
            </div>
            <span className="text-lg text-gray-600">チンチラシルバー</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/*Buttonとかを並べるエリア*/}
        </div>
      </div>
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {chatMessages.map((value, index) => {
          return (
            value.role === 'user' ? <UserChatMessage name={value.name} message={value.message} avatarUrl={value.avatarUrl} key={index} /> : <CatChatMessage name={value.name} message={value.message} avatarUrl={value.avatarUrl} key={index} />
          )
        })}
      </div>
      <div className="border-t-2 border-amber-200 px-4 pt-4 mb-2 sm:mb-0">
        <form id="send-message" method="post" action="" onSubmit={handleSubmit} aria-label="send to message">
          <div className="relative flex">
          <textarea
            id="message-input"
            name="message-input"
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4  rounded-md py-3"
          />
          </div>
          <div className="flex flex-row-reverse mt-1">
            <button
              type="submit"
              className="rounded-md bg-orange-500 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
