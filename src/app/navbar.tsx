import React from "react";

export default function Navbar({ title }: { title: string }) {
  return (
    <>
      <div className="w-full inline-flex justify-center items-center text-center my-12 font-display text-4xl font-semibold text-gray-700 gap-8">
        
        <div className="">{title}</div>
      </div>
    </>
  );
}
