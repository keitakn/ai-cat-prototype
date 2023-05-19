import type { FC } from 'react';
import Image from 'next/image';

type Props = {
  avatarUrl: string;
  name: string;
};
export const CatLoadingMessage: FC<Props> = ({ avatarUrl, name }) => {
  return (
    <div className="flex items-end">
      <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
        <div>
          <span className="inline-block animate-pulse rounded-lg rounded-bl-none bg-white px-4 py-2">
            {name}ちゃんが入力中・・・🐱
          </span>
        </div>
      </div>
      <Image
        src={avatarUrl}
        // TODO width, heightの指定方法をどうするか後で考える
        width={330}
        height={400}
        alt={name}
        className="h-10 w-10 rounded-full sm:h-16 sm:w-16"
      />
    </div>
  );
};