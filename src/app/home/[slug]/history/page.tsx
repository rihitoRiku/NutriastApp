"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
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
