"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface ApiResponse {
  data: HealthData[];
}

interface HealthData {
  healthstatus: string;
  fatintake: number;
  caloryintake: number;
  fiberintake: number;
  carbohidrateintake: number;
  proteinintake: number;
  createdAt: string;
}

export default function Page({ params }: { params: { slug: string } }) {
  const [healthDataArray, setHealthDataArray] = useState<HealthData[]>([
    {
      healthstatus: "",
      fatintake: 0.0,
      caloryintake: 0,
      fiberintake: 0.0,
      carbohidrateintake: 0.0,
      proteinintake: 0.0,
      createdAt: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let formattedData;
        const cachedData = localStorage.getItem("healthData");

        if (cachedData) {
          // Use cached data if it exists
          formattedData = JSON.parse(cachedData);
        } else {
          // Fetch data from API if no cached data
          const response = await axios.get<ApiResponse>(
            `http://localhost:5000/history`,
            {
              withCredentials: true,
            }
          );
          formattedData = response.data.data.map((item) => ({
            ...item,
            createdAt: new Date(item.createdAt).toISOString().split("T")[0],
          }));

          // Cache data in localStorage
          localStorage.setItem("healthData", JSON.stringify(formattedData));
        }

        setHealthDataArray(formattedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Add event listener to clear cached data when the page is about to unload (refresh or navigate away)
    const clearCacheBeforeUnload = (event: BeforeUnloadEvent) => {
      localStorage.removeItem("healthData");
    };
    window.addEventListener("beforeunload", clearCacheBeforeUnload);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("beforeunload", clearCacheBeforeUnload);
    };
  }, []);

  return (
    <>
      <Link href={`/home/${params.slug}`}>
        <div className="ps-4 md:ps-0 mx-auto absolute top-0 left-0 right-0 mt-8 md:mt-14 w-full max-w-5xl scale-95">
          <button
            type="button"
            className=" font-medium text-xl text-center flex items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="">Back</span>
          </button>
        </div>
      </Link>
      <div className="px-4 max-w-5xl mx-auto scale-95">
        <div className="text-2xl lg:text-4xl font-semibold font-display text-center mt-24 mb-4">
          History Daily Nutrition
        </div>
        <div className="mx-auto font-display mt-12">
          <div className="overflow-x-auto h-[60vh] overflow-y-auto">
            <table className="table-fixed min-w-full">
              <thead className=" text-xl border border-b-[20px] border-white bg-white">
                <tr className="sticky top-0 bg-white">
                  <th className="w-1/3 text-start bg-white">
                    <div className="inline-flex gap-3 items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-calendar"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                          <path d="M16 3v4" />
                          <path d="M8 3v4" />
                          <path d="M4 11h16" />
                          <path d="M11 15h1" />
                          <path d="M12 15v3" />
                        </svg>
                      </span>{" "}
                      <span>Date</span>
                    </div>
                  </th>
                  <th className="w-1/3 text-start bg-white">
                    <div className="inline-flex gap-3 items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-clipboard-check"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                          <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                          <path d="M9 14l2 2l4 -4" />
                        </svg>
                      </span>{" "}
                      <span>Result</span>
                    </div>
                  </th>
                  <th className="w-1/3 text-start bg-white">
                    <div className="gap-3 items-center inline-flex">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-square-rounded-letter-i"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 8v8" />
                          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                        </svg>
                      </span>{" "}
                      <span>Result</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {healthDataArray.map((item, index) => (
                  <tr className="border-b-[20px] border-white" key={index}>
                    <>
                      <td className=" text-lg font-normal">{item.createdAt}</td>
                      <td className=" text-xl font-medium text-green-500">
                        {item.healthstatus}
                      </td>
                      <td className="">
                        <ul className="flex flex-wrap gap-x-1 gap-y-3">
                          <li className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            Calory : {item.caloryintake}
                          </li>
                          <li className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            Carbohidrate : {item.carbohidrateintake}
                          </li>
                          <li className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            Fat : {item.fatintake}
                          </li>
                          <li className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            Fiber : {item.fiberintake}
                          </li>
                          <li className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            Protein : {item.proteinintake}
                          </li>
                        </ul>
                      </td>
                    </>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
