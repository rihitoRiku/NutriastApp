import React from "react";
import { BasicCard } from "../../components/card/card";

const profileContent = (
  <>
    <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
        <span>
          Gender :{" "}
          <span className="font-semibold text-gray-600">undefinied</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
        <span>
          Age : <span className="font-semibold text-gray-600">undefinied</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
        <span>
          Weight :{" "}
          <span className="font-semibold text-gray-600">undefinied</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
        <span>
          Height :{" "}
          <span className="font-semibold text-gray-600">undefinied</span>
        </span>
      </li>
    </ul>
  </>
);

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center xs:items-start flex-col sm:flex-row px-4 gap-8">
        <div className="w-full max-w-[20em] h-full block sm:max-w-xs p-8">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="next.svg"
              alt=""
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              bonnie@gmail.com
            </span>
          </div>
        </div>
        <div className="w-full max-w-[28em] h-full sm:max-w-md">
          <BasicCard title="Personal information" content={profileContent} />
        </div>
      </div>
    </>
  );
}
