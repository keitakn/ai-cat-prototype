import type { FC } from 'react';
import Image from 'next/image';

type Props = {
  message: string;
  avatarUrl: string;
  name: string;
};

export const UserChatMessage: FC<Props> = ({ message, avatarUrl, name }) => {
  return (
    <div className="flex items-end justify-end">
      <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
        <div>
          <span className="inline-block rounded-lg rounded-br-none bg-amber-200 px-4 py-2">
            {message}
          </span>
        </div>
      </div>
      <Image
        src={avatarUrl}
        // TODO width, heightの指定方法をどうするか後で考える
        width={96}
        height={96}
        alt={name}
        className="h-10 w-10 rounded-full sm:h-16 sm:w-16"
      />
    </div>
  );
};
