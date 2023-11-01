"use client";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BasicCard } from "../../../components/card/card";
import Image from "next/image";
import appLogo from "/public/next.svg";
import Navbar from "../../../navbar";
import axios from "axios";

interface cachedData {
  data: {
    healtstatus: "";
    fat: 0.0;
    calory: 0;
    fiber: 0.0;
    carbohidate: 0.0;
    protein: 0.0;
    // createdAt: "";
  };
}

// const ProfileContent: FC<cachedData> = ({ data }) => (
//   <>
//     <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
//       <li className="flex items-center space-x-3">
//         <svg fill="#000000" width="25px" height="25px" viewBox="0 0 256 256" id="Flat" stroke="#000000" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <path d="M219.9209,39.21582c-.02246-.11328-.06519-.21777-.09693-.32715a2.32952,2.32952,0,0,0-.324-.7876c-.05811-.10693-.10522-.21777-.17383-.31982a3.99291,3.99291,0,0,0-.49316-.604l-.0044-.00537h0a4.03873,4.03873,0,0,0-.60962-.498c-.10156-.06787-.21142-.11475-.31713-.17237a4.01127,4.01127,0,0,0-.37134-.19531,3.93788,3.93788,0,0,0-.417-.12939c-.11036-.03223-.21558-.0752-.32959-.09766a4.04217,4.04217,0,0,0-.7771-.07861L216,36H168a4,4,0,0,0,0,8h38.34326L168,82.34326,146.82861,61.17188a3.99991,3.99991,0,0,0-5.65722,5.65624L162.34326,88,141.165,109.17822a68.02262,68.02262,0,1,0,5.65674,5.65674L168,93.65674l21.17139,21.17138a3.99991,3.99991,0,0,0,5.65722-5.65624L173.65674,88,212,49.65674V88a4,4,0,0,0,8,0V40.00146A4.03032,4.03032,0,0,0,219.9209,39.21582ZM138.42627,202.42676A60.00052,60.00052,0,1,1,156,160,60.0702,60.0702,0,0,1,138.42627,202.42676Z"></path>{" "}
//           </g>
//         </svg>
//         <span>
//           Gender : <span className="font-semibold text-gray-600">{data.gender}</span>
//         </span>
//       </li>
//       <li className="flex items-center space-x-3">
//         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="12" cy="12" r="10"></circle>
//           <polyline points="12 6 12 12 16 14"></polyline>
//         </svg>
//         <span>
//           Age : <span className="font-semibold text-gray-600">{data.age}</span>
//         </span>
//       </li>
//       <li className="flex items-center space-x-3">
//         <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <path
//               d="M12 8L13 6M7.0998 7.0011C7.03435 7.32387 7 7.65792 7 8C7 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8C17 7.65792 16.9656 7.32387 16.9002 7.0011M7.0998 7.0011C7.56264 4.71831 9.58065 3 12 3C14.4193 3 16.4374 4.71831 16.9002 7.0011M7.0998 7.0011C5.87278 7.00733 5.1837 7.04895 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.8163 7.04895 18.1272 7.00733 16.9002 7.0011"
//               stroke="#000000"
//               strokeWidth="1"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             ></path>{" "}
//           </g>
//         </svg>
//         <span>
//           Weight : <span className="font-semibold text-gray-600">{data.weight}</span>
//         </span>
//       </li>
//       <li className="flex items-center space-x-3">
//         <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//           <g id="SVGRepo_iconCarrier">
//             {" "}
//             <path d="M12 22V2M12 22L8 18M12 22L16 18M12 2L8 6M12 2L16 6" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
//           </g>
//         </svg>
//         <span>
//           Height : <span className="font-semibold text-gray-600">{data.height}</span>
//         </span>
//       </li>
//     </ul>
//   </>
// );

export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<cachedData>({
    data: {
      healtstatus: "",
      fat: 0.0,
      calory: 0,
      fiber: 0.0,
      carbohidate: 0.0,
      protein: 0.0,
      // createdAt: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data exists in localStorage
        // const cachedData = localStorage.getItem("cachedData");
        // if (cachedData) {
        //   // If cached data exists, parse and set it
        //   setData(JSON.parse(cachedData));
        // }
        const response = await axios.get<cachedData>(`http://localhost:5000/history`, {
          withCredentials: true,
        });
        // setData(response);
        console.log(response.data.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <Navbar title="Profile" /> */}
      {/* <Link href={`/home/${params.slug}`}>
        <div className="ps-4 md:ps-0 mx-auto absolute top-0 left-0 right-0 mt-12 w-full max-w-2xl">
          <button type="button" className=" font-medium text-xl text-center flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="">Back</span>
          </button>
        </div>
      </Link> */}

      {/* <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row px-4 gap-16 mb-16 scale-95">
        <div className="max-w-[20em] h-full block sm:max-w-xs">
          <div className="flex flex-col items-center mb-3  w-max">
            <img className="w-24 h-24 mb-6 rounded-full shadow-lg" src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Bear" alt="avatar" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.data.username}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{data.data.email}</span>
          </div>
        </div>
        <div className="w-full max-w-[28em] h-full sm:max-w-md space-y-4 ">
          <BasicCard title="Personal information" content={<ProfileContent {...data} />} />

        </div>
      </div> */}
      {/* <!-- judul  --> */}
      <div className="flex items-center justify-between w-4/5 mx-auto  font-display">
        <Link href={`/home/${params.slug}`}>
          <div className="ps-4 md:ps-0 mx-auto  ">
            <button type="button" className=" font-medium  text-xs md:text-md lg:text-xl text-center flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="">Back</span>
            </button>
          </div>
        </Link>

        <h1 className="inline-flex justify-center text-center my-12 font-display text-md md:text-xl lg:text-3xl font-semibold text-gray-700 gap-8  w-full">History Daily Nutrition</h1>
      </div>

      {/* <!-- end judul  --> */}

      {/* <!-- main section  --> */}

      <div className="w-4/5 mx-auto font-display mt-16">
        <div className="overflow-x-auto h-[60vh] overflow-y-auto">
          <table className="table-fixed min-w-full text-xs md:text-sm lg:text-md">
            <thead className=" text-md md:text-lg lg:text-xl ">
              <tr className="sticky top-0 bg-white">
                <th className="w-1/3 text-start">Date</th>
                <th className="w-1/3 text-start">Result</th>
                <th className="w-1/3 text-start">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-1/3 font-semibold">31 - 10 - 2023</td>
                <td className="w-1/3 font-semibold text-green-500">{data.data.healtstatus}</td>
                <td className="w-1/3 font-semibold">
                  <ul className="flex flex-wrap py-2 gap-x-4 ">
                    <li className="">Calory : {data.data.calory}</li>
                    <li className="">Carbohidrate : {data.data.carbohidate}</li>
                    <li className="">Fat : {data.data.fat}</li>
                    <li className="">Fiber : {data.data.fiber}</li>
                    <li className="">Protein : {data.data.protein}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="w-1/3 font-semibold">31 - 10 - 2023</td>
                <td className="w-1/3 font-semibold text-green-500">{data.data.healtstatus}</td>
                <td className="w-1/3 font-semibold">
                  <ul className="flex flex-wrap py-2 gap-x-4 ">
                    <li className="">Calory : {data.data.calory}</li>
                    <li className="">Carbohidrate : {data.data.carbohidate}</li>
                    <li className="">Fat : {data.data.fat}</li>
                    <li className="">Fiber : {data.data.fiber}</li>
                    <li className="">Protein : {data.data.protein}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="w-1/3 font-semibold">31 - 10 - 2023</td>
                <td className="w-1/3 font-semibold text-green-500">{data.data.healtstatus}</td>
                <td className="w-1/3 font-semibold">
                  <ul className="flex flex-wrap py-2 gap-x-4 ">
                    <li className="">Calory : {data.data.calory}</li>
                    <li className="">Carbohidrate : {data.data.carbohidate}</li>
                    <li className="">Fat : {data.data.fat}</li>
                    <li className="">Fiber : {data.data.fiber}</li>
                    <li className="">Protein : {data.data.protein}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="w-1/3 font-semibold">31 - 10 - 2023</td>
                <td className="w-1/3 font-semibold text-green-500">{data.data.healtstatus}</td>
                <td className="w-1/3 font-semibold">
                  <ul className="flex flex-wrap py-2 gap-x-4 ">
                    <li className="">Calory : {data.data.calory}</li>
                    <li className="">Carbohidrate : {data.data.carbohidate}</li>
                    <li className="">Fat : {data.data.fat}</li>
                    <li className="">Fiber : {data.data.fiber}</li>
                    <li className="">Protein : {data.data.protein}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="w-1/3 font-semibold">31 - 10 - 2023</td>
                <td className="w-1/3 font-semibold text-green-500">{data.data.healtstatus}</td>
                <td className="w-1/3 font-semibold">
                  <ul className="flex flex-wrap py-2 gap-x-4 ">
                    <li className="">Calory : {data.data.calory}</li>
                    <li className="">Carbohidrate : {data.data.carbohidate}</li>
                    <li className="">Fat : {data.data.fat}</li>
                    <li className="">Fiber : {data.data.fiber}</li>
                    <li className="">Protein : {data.data.protein}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="w-1/3 font-semibold">31 - 10 - 2023</td>
                <td className="w-1/3 font-semibold text-green-500">{data.data.healtstatus}</td>
                <td className="w-1/3 font-semibold">
                  <ul className="flex flex-wrap py-2 gap-x-4 ">
                    <li className="">Calory : {data.data.calory}</li>
                    <li className="">Carbohidrate : {data.data.carbohidate}</li>
                    <li className="">Fat : {data.data.fat}</li>
                    <li className="">Fiber : {data.data.fiber}</li>
                    <li className="">Protein : {data.data.protein}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="w-1/3 font-semibold">31 - 10 - 2023</td>
                <td className="w-1/3 font-semibold text-green-500">{data.data.healtstatus}</td>
                <td className="w-1/3 font-semibold">
                  <ul className="flex flex-wrap py-2 gap-x-4 ">
                    <li className="">Calory : {data.data.calory}</li>
                    <li className="">Carbohidrate : {data.data.carbohidate}</li>
                    <li className="">Fat : {data.data.fat}</li>
                    <li className="">Fiber : {data.data.fiber}</li>
                    <li className="">Protein : {data.data.protein}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="w-1/3 font-semibold">31 - 10 - 2023</td>
                <td className="w-1/3 font-semibold text-green-500">{data.data.healtstatus}</td>
                <td className="w-1/3 font-semibold">
                  <ul className="flex flex-wrap py-2 gap-x-4 ">
                    <li className="">Calory : {data.data.calory}</li>
                    <li className="">Carbohidrate : {data.data.carbohidate}</li>
                    <li className="">Fat : {data.data.fat}</li>
                    <li className="">Fiber : {data.data.fiber}</li>
                    <li className="">Protein : {data.data.protein}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <!-- end main section  --> */}
    </>
  );
}
