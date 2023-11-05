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
        const cachedData = localStorage.getItem('healthData');
    
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
          formattedData = response.data.data.map(item => ({
            ...item,
            createdAt: new Date(item.createdAt).toISOString().split('T')[0],
          }));
    
          // Cache data in localStorage
          localStorage.setItem('healthData', JSON.stringify(formattedData));
        }
    
        setHealthDataArray(formattedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
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
              <thead className=" text-xl border border-b-[20px] border-white">
                <tr className="sticky top-0">
                  <th className="w-1/3 text-start">Date</th>
                  <th className="w-1/3 text-start">Result</th>
                  <th className="w-1/3 text-start">Detail</th>
                </tr>
              </thead>
              <tbody className="">
                {healthDataArray.map((item, index) => (
                  <tr className="border-b-[20px] border-white" key={index}>
                    <>
                      <td className=" text-lg font-normal">{item.createdAt}</td>
                      <td className=" text-xl font-medium text-green-500">{item.healthstatus}</td>
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
