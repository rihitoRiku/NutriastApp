"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BasicCard } from "../../../components/card/card";
import Image from "next/image";
import appLogo from "/public/next.svg";
import Navbar from "../../../navbar";

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

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navbar title="Profile" />
      <Link href="/home/a">
        <div className="ps-4 md:ps-0 mx-auto absolute top-0 left-0 right-0 mt-12 w-full max-w-2xl">
          <button
            type="button"
            className=" font-medium text-xl text-center flex items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="">Back</span>
          </button>
        </div>
      </Link>

      {/* Rest of your ProfilePage component */}
      <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row px-4 gap-16 mb-16">
        <div className="max-w-[20em] h-full block sm:max-w-xs">
          <div className="flex flex-col items-center mb-3  w-max">
            <Image
              className="w-24 h-24 mb-6 rounded-full shadow-lg"
              src={appLogo}
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
        <div className="w-full max-w-[28em] h-full sm:max-w-md space-y-4 ">
          <BasicCard title="Personal information" content={profileContent} />
          <button
            type="button"
            className=" hover:text-white bg-white border border-gray-200 hover:bg-green-800 font-medium rounded-full text-md px-12 py-3 text-center mr-2 mb-2"
          >
            Change
          </button>
        </div>
      </div>
    </>
  );
}
