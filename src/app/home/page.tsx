import React from "react";
import Card from "../components/card/card";

const dailyNutritionContent = (
  <>
    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
      Password requirements:
    </h2>
    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
      <li className="flex items-center">
        <svg
          className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        At least 10 characters
      </li>
      <li className="flex items-center">
        <svg
          className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        At least one lowercase character
      </li>
      <li className="flex items-center">
        <svg
          className="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        At least one special character, e.g., ! @ # ?
      </li>
    </ul>
  </>
);

const healthStatusContent = (
    <>
    <div className="text-md break-words w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus voluptas corrupti fugiat unde, labore non officia dignissimos. Eligendi laborum commodi, iste iure explicabo asperiores.</div>
    </>
)

const riskContent = (
    <>
    <div className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus voluptas corrupti fugiat unde, labore non officia dignissimos. Eligendi laborum commodi, iste iure explicabo asperiores.</div>
    </>
)

export default function page() {
  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div id="avatar" className="">
          <div className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <div className="font-medium">
              <div className="text-sm text-gray-500">Good afternoon,</div>
              <div>Rihito</div>
            </div>
          </div>
        </div>
        <div
          id="content"
          className="mt-8 flex flex-col md:flex-row gap-8"
        >
          <div className="min-w-[20em]">
            <div className="text-body text-xl font-semibold text-gray-500 mb-4">
              Your Daily Nutrition Needs
            </div>
            <Card title="" content={dailyNutritionContent} />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="flex-1 ">
              <div className="text-body text-xl font-semibold text-gray-500 mb-4">
                Health Status
              </div>
              <Card title="Good" content={healthStatusContent} />
            </div>
            <div className="flex-1 ">
              <div className="text-body text-xl font-semibold text-gray-500 mb-4">
                Cardiovascular Risk
              </div>
              <Card title="Aware" content={riskContent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
