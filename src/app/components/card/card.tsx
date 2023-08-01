import { Content } from "next/font/google";
import React, { ReactNode } from "react";

interface cardInterface{
    title: string;
    content: ReactNode;
}

export default function Card({ title, content }: cardInterface) {
    // Define a function to get the class name based on the title
  const getTitleColorClass = (title: string) => {
    if (title === "Good") {
      return "text-green-500";
    } else if (title === "Warning") {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };
  return (
    <>
      <div id="" className="">
        <div className="w-full block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${getTitleColorClass(title)}`}>
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
        </div>
      </div>
    </>
  );
}
