"use client";
import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import "./registerStyle.css";
import useInputRegisterStore from "@/hooks/useInputRegister";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
// import { cookies } from 'next/headers';
interface modalProps {
  active: string;
  closeModal: () => void;
}

export const Register: React.FC<modalProps> = ({ active, closeModal }) => {
  const router = useRouter();
  const input = useInputRegisterStore();
  const handleRegister = async () => {
    const newRegister = {
      email: input.email,
      password: input.password,
      username: input.fullname,
      birthdate: input.birthDate,
      gender: input.gender,
      height: input.height,
      weight: input.weight,
    }
    try{
      // console.log(newRegister);
      axios.post('http://localhost:5000/register', newRegister).then((response) => {
        // console.log(response);
        // localStorage.setItem('user', JSON.stringify(response.data.data.username));
        if (response.data.status === "400") {
          toast.error(response.data.message);
        }
        toast.success('Registration successfully');
        closeModal();
      }).catch((err) => (toast.error(err.message)));

    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    <></>
  }, []);
  return (
    <>
      <div id="global-container" className="flex justify-center items-center">
        <div
          id="thecontainer"
          className="z-10 flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-2xl  rounded-xl border bg-white py-4 px-4 lg:py-6 lg:px-8 h-5/6 overflow-auto"
        >
          <button
            className="absolute right-0 top-0 mt-2 me-2 w-max justify-self-end"
            onClick={closeModal}
          >
            <GrClose className="text-3xl text-green-100" />
          </button>
          <h1 className="text-2xl lg:text-3xl lg:text-center font-semibold mb-8 mt-8">
            Create New Account
          </h1>
          <div className="">
            <form action="">
              <div className="mb-2">
                <label
                  htmlFor="fullname"
                  className="block mb-2 ms-1 text-md font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    type="text"
                    placeholder="input your name here"
                    id="fullname"
                    className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10"
                    onChange={(e) => input.setFullname(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block mb-2 ms-1 text-md font-medium text-gray-900"
                >
                  Email Address
                </label>
                <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                  </svg>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    id="fullname"
                    className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10"
                    onChange={(e) => input.setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 ms-1 text-md font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    type="password"
                    placeholder="(min.8 words)"
                    id="password"
                    className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10"
                    onChange={(e) => input.setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="birthdate"
                  className="block mb-2 ms-1 text-md font-medium text-gray-900"
                >
                  Date of Birth
                </label>
                <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    id="birthdate"
                    className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10"
                    onChange={(e) => input.setBirthDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="gender"
                  className="block mb-2 ms-1 text-md font-medium text-gray-900"
                >
                  Gender
                </label>
                <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                  <svg
                    fill="#000000"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M219.9209,39.21582c-.02246-.11328-.06519-.21777-.09693-.32715a2.32952,2.32952,0,0,0-.324-.7876c-.05811-.10693-.10522-.21777-.17383-.31982a3.99291,3.99291,0,0,0-.49316-.604l-.0044-.00537h0a4.03873,4.03873,0,0,0-.60962-.498c-.10156-.06787-.21142-.11475-.31713-.17237a4.01127,4.01127,0,0,0-.37134-.19531,3.93788,3.93788,0,0,0-.417-.12939c-.11036-.03223-.21558-.0752-.32959-.09766a4.04217,4.04217,0,0,0-.7771-.07861L216,36H168a4,4,0,0,0,0,8h38.34326L168,82.34326,146.82861,61.17188a3.99991,3.99991,0,0,0-5.65722,5.65624L162.34326,88,141.165,109.17822a68.02262,68.02262,0,1,0,5.65674,5.65674L168,93.65674l21.17139,21.17138a3.99991,3.99991,0,0,0,5.65722-5.65624L173.65674,88,212,49.65674V88a4,4,0,0,0,8,0V40.00146A4.03032,4.03032,0,0,0,219.9209,39.21582ZM138.42627,202.42676A60.00052,60.00052,0,1,1,156,160,60.0702,60.0702,0,0,1,138.42627,202.42676Z"></path>{" "}
                    </g>
                  </svg>
                  <select
                    id="gender"
                    onChange={(e) => input.setGender(e.target.value)}
                    className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10"
                  >
                    <option value="" selected disabled>Choose gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
            
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="height"
                  className="block mb-2 ms-1 text-md font-medium text-gray-900"
                >
                  Height
                </label>
                <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 22V2M12 22L8 18M12 22L16 18M12 2L8 6M12 2L16 6"
                        stroke="#000000"
                        stroke-width="0.9359999999999999"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <input
                    type="number"
                    placeholder="input your height"
                    id="height"
                    className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10"
                    onChange={(e) => input.setHeight(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className="mb-12">
                <label
                  htmlFor="weight"
                  className="block mb-2 ms-1 text-md font-medium text-gray-900"
                >
                  Weight
                </label>
                <div className="flex items-center border py-2 px-3 rounded-md h-12 bg-white">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 8L13 6M7.0998 7.0011C7.03435 7.32387 7 7.65792 7 8C7 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8C17 7.65792 16.9656 7.32387 16.9002 7.0011M7.0998 7.0011C7.56264 4.71831 9.58065 3 12 3C14.4193 3 16.4374 4.71831 16.9002 7.0011M7.0998 7.0011C5.87278 7.00733 5.1837 7.04895 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.8163 7.04895 18.1272 7.00733 16.9002 7.0011"
                        stroke="#000000"
                        stroke-width="1.152"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <input
                    type="number"
                    placeholder="input your weight"
                    id="weight"
                    className="pl-4 w-full outline-none text-lg bg-inherit rounded-md h-10"
                    onChange={(e) => input.setWeight(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className="flex justify-end lg:justify-center lg:items-center">
                <button
                onClick={handleRegister}
                  type="button"
                  className="rounded-xl h-12 w-3/5 focus:outline-none text-white bg-green-700 hover:bg-green-800 text-lg font-medium mb-6"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
