"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

import appLogo from "/public/assets/image/nutriast_logo.png";
import { Register } from "./register";
import useInputLoginStore from "@/hooks/useInputLogin";
import LoaderComponent from "../components/loader/loader";
import create from "../actions/LoginCookies";
import { cookies } from "next/headers";

export default function Login() {
  const router = useRouter();
  const [registerModal, setRegisterModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const input = useInputLoginStore();

  const handleLogin = async () => {
    setLoading(true);
    const login = {
      email: input.email,
      password: input.password,
    };
    try {
      await axios
        .post("http://localhost:5000/login", login, { withCredentials: true })
        .then((response) => {
          if (response.data.code === 400) {
            toast.error(response.data.message);
          } else {
            toast.success(`Hello ${response.data.data.username}`);
            const token = response.data.data.authentication_token;
            create(token);
            router.push(`/home/${response.data.data.userId}`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Loader */}
      {loading ? (
        <>
          <div className="z-30 flex justify-center items-center fixed top-0 w-screen h-screen bg-slate-700 opacity-20">
            <LoaderComponent />
          </div>
        </>
      ) : (
        ""
      )}
      <div className="lg:flex">
        <div
          id="global-container-right"
          className="lg:w-1/2 h-screen flex flex-col justify-center items-center px-4 "
        >
          <div id="logo" className="w-36">
            <Image src={appLogo} alt="Logo Nutriast" />
          </div>
          <div
            id="form"
            className="flex flex-col gap-4 w-full max-w-[26rem] my-12"
          >
            <div className="flex items-center border py-2 px-4 rounded-md h-11 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                className=" pl-4 w-full outline-none border-none text-md"
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={(e) => input.setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border py-2 px-4 rounded-md h-11 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-4 w-full outline-none border-none text-md"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => input.setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              {/* 49BC86 */}
              <button
                onClick={handleLogin}
                type="button"
                className="w-3/5 py-2 px-3.5 rounded-full h-11 focus:outline-none text-white bg-green-700 hover:bg-green-800"
              >
                Login
              </button>
              <div id="register" className="text-sm mt-4">
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
      {registerModal && (
        <Register active="true" closeModal={() => setRegisterModal(false)} />
      )}
    </>
  );
}
