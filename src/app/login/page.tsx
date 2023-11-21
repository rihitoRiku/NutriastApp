"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";

import appLogo from "/public/assets/image/nutriast_logo.png";
import { Register } from "./register";
import useInputLoginStore from "@/hooks/useInputLogin";
import useUserData from "@/hooks/store";
import LoaderComponent from "../components/loader/loader";
import create from "../actions/LoginCookies";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../../app/firebase";

export default function Login() {
  const router = useRouter();
  const [registerModal, setRegisterModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const input = useInputLoginStore();
  const userData = useUserData();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        axios
          .post(
            "http://localhost:5000/auth/google",
            {
              name: result.user.displayName,
              email: result.user.email,
              img: result.user.photoURL,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((err) => {});
  };

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
            // userData.setEmail(response.data.email);
            // userData.setUserId(response.data.data.userId);
            // userData.setGender(response.data.gender);
            // userData.setWeight(response.data.weight);
            // userData.setHeight(response.data.height);
            // userData.setFat(response.data.fat);
            // userData.setCalory(response.data.calory);
            // userData.setFiber(response.data.fiber);
            // userData.setCarbohidrate(response.data.carbohidrate);
            // userData.setProtein(response.data.protein);
            router.push(`/home/${response.data.data.userId}`);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
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
            <div className="">
              <div className="font-semibold mb-2 text-gray-700">
                Email Adress
              </div>
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
                  required
                  className=" pl-4 w-full outline-none border-none text-md"
                  type="email"
                  name="email"
                  placeholder=" ex : example@email.com"
                  onChange={(e) => input.setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="">
              <div className="font-semibold mb-2 text-gray-700">Password</div>
              <div className="flex items-center border py-2 px-4 rounded-md h-11">
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
                  required
                  id="password"
                  placeholder="ex : #veRy Secret passw0rd 123"
                  onChange={(e) => input.setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              {/* 49BC86 */}
              <button
                onClick={handleLogin}
                type="button"
                className="w-3/5 py-2 px-3.5 mb-3 rounded-full h-11 focus:outline-none text-white bg-green-700 hover:bg-green-800"
              >
                Login
              </button>
              <button
                onClick={() => {
                  signInWithGoogle();
                }}
                type="button"
                className="w-3/5 py-2 px-3.5 rounded-full h-11 text-black border border-green-600 inline-flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Sign in with Google
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
          className="lg:w-1/2 h-screen bg-green-300 flex flex-col justify-center items-start text-start px-8 py-12 lg:p-12 "
        >
          <div className="mb-12 space-y-3 opacity-90">
            <div className="text-5xl font-semibold">Nutriast</div>
            <div className="text-2xl italic">- Your Health-mate </div>
          </div>

          <div className="text-base mb-2 max-w-2xl opacity-80">
            Nutriarist provides you with all information about your daily
            nutrition needs and cardiovascular condition to help you to track
            your body every time, everywhere.
          </div>
          <div className="text-base mb-8 max-w-2xl opacity-80">
            Nutriast was made to tackle imbalanced nutrition and
            non-communicable disease factors. It’s hoped to help users manage
            nutrition effectively, serving as a solution for nutritional
            imbalance. Plus, It’s here to help you track your body anytime,
            anywhere.
          </div>

          <ul className="space-y-4 text-left ">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Tailored to user health needs</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Helps you manage your nutrition intake more effectively
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                {" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1 Easily accessible
                </span>{" "}
                via the website
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Predicts non-communicable disease (NCD) risks with{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  high accuracy
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Features an{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  attractive design
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      {registerModal && (
        <Register active="true" closeModal={() => setRegisterModal(false)} />
      )}
    </>
  );
}
