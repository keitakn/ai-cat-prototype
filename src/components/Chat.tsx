'use client';

import type { FC, FormEvent } from 'react';

export const Chat: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
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
      <div id="messages"
           className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {/*（自分のメッセージ）*/}
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">こんにちはもこちゃん！お話しよう！</span>
              </div>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/11032365?s=96&v=4"
              alt="My profile" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
          </div>
        </div>

        {/*（相手からのメッセージ）*/}
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">こんにちはにゃん🐱もことお話しようにゃん！もこはねこだけど、チュールは苦手だにゃ🐱チキン味のカリカリしか食べないにゃん！</span>
              </div>
            </div>
            <img
              src="https://lgtm-images.lgtmeow.com/2022/03/23/10/9738095a-f426-48e4-be8d-93f933c42917.webp"
              alt="My profile" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
          </div>
        </div>
      </div>
      <form id="send-message" method="post" action="" className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0" onSubmit={handleSubmit} aria-label="send to message">
        <div className="relative flex">
          <textarea
            id="message-input"
            name="message-input"
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"
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
  );
};
