"use client";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "../../components/card/card";
import Navbar from "../../navbar";
import toast from "react-hot-toast";
import axios from "axios";
import create from "@/app/actions/DeleteCookies";
import LoaderComponent from "../../components/loader/loader";
interface DataProps {
  data: {
    gender: "";
    age: 0;
    weight: 0.0;
    height: 0.0;
    username: "";
    proteinneed: 0.0;
    fatneed: 0.0;
    carbohidrateneed: 0.0;
    caloryneed: 0.0;
    fiberneed: 0.0;
    cardiovascular: "";
  };
}

interface DataIntakeProps {
  data: {
    healthstatus: "";
    feedback: "";
  };
}

const DailyNutritionContent: FC<DataProps> = ({ data }) => (
  <>
    <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
          Fat :{" "}
          <span className="font-semibold text-gray-600">{data.fatneed}</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
          Calory :{" "}
          <span className="font-semibold text-gray-600">{data.caloryneed}</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
          Fiber :{" "}
          <span className="font-semibold text-gray-600">{data.fiberneed}</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
          Carbohidrate :{" "}
          <span className="font-semibold text-gray-600">
            {data.carbohidrateneed}
          </span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
          Protein :{" "}
          <span className="font-semibold text-gray-600">
            {data.proteinneed}
          </span>
        </span>
      </li>
    </ul>
  </>
);

interface HealthStatusContentProps extends DataIntakeProps {
  slug: string;
}

interface HealthRiskContentProps extends DataProps {
  slug: string;
}

const HealthStatusContent: FC<HealthStatusContentProps> = ({ data, slug }) => {
  // Ensure data.healthstatus is treated as a string
  const healthStatus: string = data.healthstatus || "";

  return (
    <>
      <div className="text-md break-words w-full mb-6">{data.feedback}</div>
      {healthStatus === "Unknown" ? (
        <Link href={`/home/${slug}/intake`}>
          <button
            type="button"
            className="inline-flex items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-8 py-3 text-center"
          >
            Checkout
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

const RiskContent: FC<HealthRiskContentProps> = ({ data, slug }) => {
  const cardioStatus: string = data.cardiovascular || "";
  let content;
  if (cardioStatus === "Safe") {
    content = (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla
        recusandae repellat? Quibusdam, maiores?
      </>
    );
  } else if (cardioStatus === "Aware") {
    content = (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde quo
        voluptate corrupti quisquam cum quam, doloribus architecto?
      </>
    );
  } else {
    content = <>UwU</>;
  }
  return (
    <>
      <div className="text-md mb-6">{content}</div>
      <Link href={`/home/${slug}/predict`}>
        <button
          type="button"
          className="inline-flex items-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-semibold rounded-lg text-sm px-8 py-3 text-center mr-2 mb-2"
        >
          Predict Now!
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </Link>
    </>
  );
};

export default function Page({ params }: { params: { slug: string } }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [data, setData] = useState<DataProps>({
    data: {
      gender: "",
      age: 0,
      weight: 0.0,
      height: 0.0,
      username: "",
      proteinneed: 0.0,
      fatneed: 0.0,
      carbohidrateneed: 0.0,
      caloryneed: 0.0,
      fiberneed: 0.0,
      cardiovascular: "",
    },
  });

  const [dataIntake, setDataIntake] = useState<DataIntakeProps>({
    data: {
      healthstatus: "",
      feedback: "",
    },
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // try {
      //   const cachedDataStatus = localStorage.getItem("cachedDataStatus");
      //   if (cachedDataStatus) {
      //     setStatus(JSON.parse(cachedDataStatus));
      //   } else {
      //     const statusIntake = await axios.get(
      //       `http://localhost:5000/intakeuserstatus`,
      //       {
      //         withCredentials: true,
      //       }
      //     );
      //     // Store the response in localStorage for future use
      //     localStorage.setItem("cachedDataStatus", JSON.stringify(statusIntake.data.status));
      //     setStatus(statusIntake.data.status);
      //   }

      // } catch (error) {
      //   if (axios.isAxiosError(error) && error.response) {
      //     if (error.response.status === 403 || error.response.status === 400) {
      //       router.push("/login");
      //     }
      //   }
      // }
      try {
        // Check if data exists in localStorage
        const cachedData = localStorage.getItem("cachedData");
        const cacheDataIntake = localStorage.getItem("cachedDataIntake");
        if (cachedData) {
          // If cached data exists, parse and set it
          setData(JSON.parse(cachedData));
        } else {
          // If no cached data, make a request
          const responseUsers = await axios.get<DataProps>(
            `http://localhost:5000/users/${params.slug}`,
            {
              withCredentials: true,
            }
          );
          // Store the responseUsers in localStorage for future use
          localStorage.setItem(
            "cachedData",
            JSON.stringify(responseUsers.data)
          );
          setData(responseUsers.data);
        }

        if (cacheDataIntake) {
          setDataIntake(JSON.parse(cacheDataIntake));
        } else {
          const responseIntake = await axios.get<DataIntakeProps>(
            `http://localhost:5000/intakeusers/id`,
            {
              withCredentials: true,
            }
          );
          localStorage.setItem(
            "cachedDataIntake",
            JSON.stringify(responseIntake.data)
          );
          setDataIntake(responseIntake.data); // Use setDataIntake here
        }

        if (cacheDataIntake) {
          setDataIntake(JSON.parse(cacheDataIntake));
        } else {
          const responseIntake = await axios.get<DataIntakeProps>(
            `http://localhost:5000/intakeusers/id`,
            {
              withCredentials: true,
            }
          );
          localStorage.setItem(
            "cachedDataIntake",
            JSON.stringify(responseIntake.data)
          );
          setDataIntake(responseIntake.data); // Use setDataIntake here
        }

        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          if (err.response.status === 403 || err.response.status === 400) {
            // Redirect to the login page if unauthorized
            router.push("/login");
          }
        }
        // setError(err);
        // setLoading(false);
        // toast.error('Error Fetching Data: ' + err.message);
      }
    };
    fetchData();
  }, [params.slug]);

  // use effect to make request only if user click browser refresh button
  useEffect(() => {
    // Add event listener to clear cached data when the page is about to unload (refresh or navigate away)
    const clearCacheBeforeUnload = (event: BeforeUnloadEvent) => {
      localStorage.removeItem("cachedData");
      localStorage.removeItem("cachedDataIntake");
    };
    window.addEventListener("beforeunload", clearCacheBeforeUnload);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("beforeunload", clearCacheBeforeUnload);
    };
  }, []);

  const handleLogOut = () => {
    // Clear the cached data
    localStorage.removeItem("cachedData");
    setLoading(true);
    create("access_token");
    toast.success("Log Out Successfully");
    router.push("/login");
    setLoading(false);
  };

  const cardioStatus = data.data.cardiovascular;
  let cardioStatusTitle;
  if (cardioStatus == null) {
    cardioStatusTitle = <>Unpredicted</>;
  }else{
    cardioStatusTitle = cardioStatus;
  }

  return (
    <>
      <Navbar title="Dashboard" />
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
      <div className="mb-14 container max-w-7xl mx-auto px-4 md:px-8 scale-95">
        <div id="avatar" className="flex items-center justify-between ">
          <Link href={`${params.slug}/profile`} passHref>
            <div className="flex items-center space-x-4">
              <div className=""></div>
              <img
                className="w-14 h-14 rounded-full border-2"
                src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Bear"
                alt="avatar"
              />
              <div className="font-medium">
                <div className="text-md text-gray-500">Good afternoon,</div>
                <div className="text-xl">{data.data.username}</div>
              </div>
            </div>
          </Link>

          <div className="flex justify-between items-center gap-12 ">
            <Link href={`${params.slug}/history`} passHref>
              History
            </Link>
            <button
              type="button"
              className="inline-flex items-center hover:text-white border border-green-700 hover:bg-green-800 font-semibold rounded-full text-sm px-5 py-2.5 text-center  "
              onClick={handleLogOut}
            >
              <span className="me-2"> Logout </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 17l5-5-5-5M19.8 12H9M13 22a10 10 0 1 1 0-20" />
              </svg>
            </button>
          </div>
        </div>
        <div id="content" className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="min-w-[20em]">
            <div className="text-body text-xl font-semibold text-gray-500 mb-4">
              Your Daily Nutrition Needs
            </div>
            <Card title="" content={DailyNutritionContent(data)} />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="flex-1 ">
              <div className="text-body text-xl font-semibold text-gray-500 mb-4">
                Health Status
              </div>
              <Card
                title={dataIntake.data.healthstatus}
                content={
                  <HealthStatusContent
                    data={dataIntake.data}
                    slug={params.slug}
                  />
                }
              />
            </div>
            <div className="flex-1 ">
              <div className="text-body text-xl font-semibold text-gray-500 mb-4">
                Cardiovascular Risk
              </div>
              <Card
                title={cardioStatusTitle}
                content={<RiskContent data={data.data} slug={params.slug} />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
