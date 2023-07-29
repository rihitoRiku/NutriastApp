"use client";
import React, { useState } from "react";
import Image from "next/image";
import appLogo from "/public/assets/image/nutriast_logo.png";
import InputField from "@/components/inputfield/inputField";
import RegisterModal from "./register";

export default function Login() {
  const [registerModal, setRegisterModal] = useState(false);
  return (
    <>
      <div className="lg:flex">
        <div
          id="global-container-right"
          className="lg:w-1/2 h-screen flex flex-col justify-center items-center px-4 "
        >
          <div id="logo" className="w-52 h-4w-52">
            <Image src={appLogo} alt="Logo Nutriast" />
          </div>
          <div
            id="form"
            className="flex flex-col gap-6 w-full max-w-[32rem] my-12"
          >
            <InputField
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              }
              iconFill="none"
              type="email"
              name="email"
              placeholder="Email Address"
            />

            <InputField
              icon={
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              }
              iconFill="currentColor"
              type="password"
              name="password"
              placeholder="Password"
            />
            <div className="flex flex-col items-center justify-center mt-4">
              {/* 49BC86 */}
              <button
                type="button"
                className=" py-2 px-4 rounded-xl h-14 w-3/5 focus:outline-none text-white bg-green-300 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-lg font-medium mr-2 mb-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Login
              </button>
              <div id="register" className="text-lg">
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setRegisterModal(true);
                  }}
                  className="cursor-pointer font-semibold text-green-800"
                >
                  Register Here
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="global-container-left"
          className="lg:w-1/2 h-screen bg-green-300"
        ></div>
      </div>
      {registerModal && <RegisterModal />}
    </>
  );
}
