import React, { ReactNode } from "react";

interface CardInterface {
  title?: string;
  content?: ReactNode;
}

export default function Card({ title, content }: CardInterface) {
  // Determine the text color class based on the title prop
  let titleColorClass = "text-red-500"; // Default to red color

  if (title === "Good") {
    titleColorClass = "text-green-500";
  } else if (title === "Warning") {
    titleColorClass = "text-yellow-500";
  }

  return (
    <>
      <div id="" className="">
        <div className="w-full block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50">
          <h5
            className={`mb-2 text-2xl font-bold tracking-tight ${titleColorClass}`}
          >
            {title}
          </h5>
          {content && (
            <div className="font-normal text-gray-700 dark:text-gray-400">
              {content}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

interface BasicCardInterface {
  title: string;
  content: ReactNode;
}

export function BasicCard({ title, content }: BasicCardInterface) {
  return (
    <>
      <div id="" className="">
        <div className="block p-8 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
          <h5 className={`mb-6 text-2xl font-semibold text-slate-700`}>{title}</h5>
          {content && (
            <div className="font-normal text-gray-700 dark:text-gray-400">
              {content}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
