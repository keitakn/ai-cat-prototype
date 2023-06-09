import Link from 'next/link';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="m-4 rounded-lg bg-yellow-200 shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="mb-4 flex items-center sm:mb-0">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              AI Cat（仮）
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link
                href="/"
                prefetch={false}
                className="mr-4 hover:underline md:mr-6"
              >
                Top
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                prefetch={false}
                className="mr-4 hover:underline md:mr-6"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                prefetch={false}
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-amber-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          Copyright (c){' '}
          <a href="https://github.com/nekochans" className="hover:underline">
            nekochans
          </a>
        </span>
      </div>
    </footer>
  );
};
