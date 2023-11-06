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
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-droplet "
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
          <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
        </svg>

        <span>
          Fat :{" "}
          <span className="font-semibold text-gray-600">{data.fatneed}</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-square-rounded-letter-c"
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
          <path d="M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
        <span>
          Calory :{" "}
          <span className="font-semibold text-gray-600">{data.caloryneed}</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-apple"
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
          <path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2" />
          <path d="M10 10.5c1.333 .667 2.667 .667 4 0" />
        </svg>
        <span>
          Fiber :{" "}
          <span className="font-semibold text-gray-600">{data.fiberneed}</span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-baguette"
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
          <path d="M5.628 11.283l5.644 -5.637c2.665 -2.663 5.924 -3.747 8.663 -1.205l.188 .181a2.987 2.987 0 0 1 0 4.228l-11.287 11.274a3 3 0 0 1 -4.089 .135l-.143 -.135c-2.728 -2.724 -1.704 -6.117 1.024 -8.841z" />
          <path d="M9.5 7.5l1.5 3.5" />
          <path d="M6.5 10.5l1.5 3.5" />
          <path d="M12.5 4.5l1.5 3.5" />
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
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-meat"
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
          <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821" />
          <path d="M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829c1.172 -1.172 -.094 -4.338 -2.828 -7.071c-2.733 -2.734 -5.9 -4 -7.07 -2.829c-1.172 1.172 .094 4.338 2.828 7.071z" />
          <path d="M7.5 16l1 1" />
          <path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121" />
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
      <Link href={`${slug}/history`} passHref>
        <button
          type="button"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-history me-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#a7a7a7"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8l0 4l2 2" />
            <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
          </svg>
          History
        </button>
      </Link>
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
      localStorage.removeItem("healthData");
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

  let cardioStatus: string = data.data.cardiovascular || "";
  let cardioStatusTitle: string = data.data.cardiovascular || "";
  if (cardioStatus != "Safe" && cardioStatus != "Aware") {
    cardioStatusTitle = "Unpredicted";
  } else {
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
            <button
              type="button"
              className="inline-flex items-center border border-[#a7a7a7] font-semibold rounded-full text-sm px-5 py-2.5 text-center  "
              onClick={handleLogOut}
            >
              <span className="me-2 text-[#5e5e5e]"> Logout </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5e5e5e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 17l5-5-5-5M19.8 12H9M13 22a10 10 0 1 1 0-20" />
              </svg>
            </button>
          </div>
        </div>
        <div id="content" className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="min-w-[20em]">
            <div className="text-body text-xl font-semibold text-gray-500 mb-4 flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart-check"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-3 2.928m-5.5 3.5a8916.99 8916.99 0 0 0 -6.5 -6.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  <path d="M15 19l2 2l4 -4" />
                </svg>
              </span>
              Your Daily Nutrition Needs
            </div>
            <Card title="" content={DailyNutritionContent(data)} />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <div className="flex-1 ">
              <div className="text-body text-xl font-semibold text-gray-500 mb-4 flex gap-3 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart-rate-monitor"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                    <path d="M7 20h10" />
                    <path d="M9 16v4" />
                    <path d="M15 16v4" />
                    <path d="M7 10h2l2 3l2 -6l1 3h3" />
                  </svg>
                </span>
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
              <div className="text-body text-xl font-semibold text-gray-500 mb-4 flex items-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart-exclamation"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15.03 17l-3.03 3l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.922 6.102" />
                    <path d="M19 16v3" />
                    <path d="M19 22v.01" />
                  </svg>
                </span>
                <span>Cardiovascular Risk</span>
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
