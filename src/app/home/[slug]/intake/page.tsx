"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import jsonData from "./../../../../DataMakananTKPI.json";
import FoodCard from "@/app/components/foodcard/foodcard";
import LoaderComponent from "../../../components/loader/loader";

interface FoodData {
  nama: string;
  energi: number;
  protein: number;
  lemak: number;
  karbohidrat: number;
  serat: number;
}
interface FoodItem extends FoodData {
  quantity: number;
}

var userId = "";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const cachedData = localStorage.getItem("cachedData");
  if (cachedData) {
    const data = JSON.parse(cachedData);
    userId = data.data.userId;
  }

  // PLACEHOLDER BASED ON SCREEN SIZE
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getPlaceholder = () => {
    return isMediumScreen
      ? "Search Food or Drink name... "
      : "Search Food or Drink";
  };

  // FORM AND LIST HANDLER
  const [consumedFoods, setConsumedFoods] = useState<FoodItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<FoodItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter data makanan berdasarkan nama makanan yang mengandung nilai input
    const filteredSuggestions: FoodItem[] = jsonData
      .filter((item: FoodData) =>
        item.nama.toLowerCase().includes(value.toLowerCase())
      )
      .map((item: FoodData) => ({
        ...(item as FoodItem), // Cast (ubah tipe) item ke tipe FoodItem untuk menyertakan properti 'quantity'
        quantity: 1, // Tambahkan properti 'quantity' dengan nilai 1 ke setiap item
      }));

    // Perbarui state suggestions dengan data yang sudah difilter dan diberi properti 'quantity'
    setSuggestions(filteredSuggestions);
  };

  const addFoodToConsumedList = (foodName: string) => {
    // Check if the food with the given name already exists in the consumedFoods list
    const existingFood = consumedFoods.find((food) => food.nama === foodName);

    if (existingFood) {
      // If the food already exists, update its quantity by increasing it by 1
      setConsumedFoods((prevFoods) =>
        prevFoods.map((food) =>
          food.nama === foodName
            ? { ...food, quantity: food.quantity + 1 }
            : food
        )
      );
    } else {
      // If the food does not exist, get its data and add it as a new item with quantity 1
      const foodData = getFoodData(foodName);

      if (foodData) {
        const { nama, ...rest } = foodData;
        const newFood: FoodItem = { nama: foodName, quantity: 1, ...rest };
        setConsumedFoods((prevFoods) => [...prevFoods, newFood]);
      } else {
        console.error(`Makanan dengan nama '${foodName}' tidak ditemukan.`);
      }
    }
  };

  const removeFoodFromConsumedList = (foodName: string) => {
    // Perbarui state consumedFoods dengan menyaring makanan berdasarkan nama makanan
    setConsumedFoods((prevFoods) =>
      prevFoods.filter((food) => food.nama !== foodName)
    );
  };

  const getFoodData = (foodName: string): FoodData | undefined => {
    // Implementasi placeholder - ganti dengan logika pengambilan data sebenarnya
    // Cari dan kembalikan data makanan berdasarkan nama makanan dari array jsonData
    return jsonData.find((item: FoodData) => item.nama === foodName);
  };

  // HANDLE BUTTON SEND CHECKOUT

  const handleCheckout = async () => {
    setLoading(true);
    // Calculate the total accumulated values
    const totalValues = {
      totalCalory: 0,
      totalProtein: 0,
      totalFat: 0,
      totalCarbohidrate: 0,
      totalFiber: 0,
    };

    const updatedConsumedFoods = consumedFoods.map((food) => {
      const { quantity, energi, protein, lemak, karbohidrat, serat } = food;
      const updatedFood = {
        ...food,
        quantity: food.quantity * quantity, // Update the quantity to reflect the total quantity
      };
      totalValues.totalCalory += energi * updatedFood.quantity;
      totalValues.totalProtein += protein * updatedFood.quantity;
      totalValues.totalFat += lemak * updatedFood.quantity;
      totalValues.totalCarbohidrate += karbohidrat * updatedFood.quantity;
      totalValues.totalFiber += serat * updatedFood.quantity;
      return updatedFood;
    });

    // Convert the data to a JSON string

    const url = `http://localhost:5000/intakeusers/`; // Replace with your endpoint
    const headers = {
      "Content-Type": "application/json",
      withCredentials: true,
    };

    const data = JSON.stringify(consumedFoods); // Convert the data to a JSON string

    try {
      const response = await axios.post(url, totalValues, headers);
      localStorage.removeItem("cachedDataIntake");
      toast.success(response.data.message);
      router.push(`/home/${userId}`);
      setLoading(false);
    } catch (error) {
      console.error("There was a problem with the Axios request:", error);
      setLoading(false);
    }
  };

  // ONCLICK BACK
  const router = useRouter();
  // const onClickBack = () => {
  //   router.back(); // or router.push('/home/a') if you want to navigate to that path specifically
  // }

  return (
    <>
      {loading ? (
        <>
          <div className="z-30 flex justify-center items-center fixed top-0 w-screen h-screen bg-slate-700 opacity-20">
            <LoaderComponent />
          </div>
        </>
      ) : (
        ""
      )}
      <div onClick={() => router.back()}>
        <div className="z-30 ps-4 md:ps-0 mx-auto absolute top-0 left-0 right-0 mt-8 md:mt-14 w-full max-w-5xl">
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
      </div>
      <div className="px-4 h-[22em] gap-4 flex flex-col scale-95 mt-40">
        <div className="text-2xl lg:text-3xl font-semibold text-slate-700 text-center mb-2">
          How's Your Food Today?
        </div>
        {/* Search Bar */}
        <div id="search" className="w-full max-w-3xl mx-auto row-start-2">
          <div className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="ms-1 w-6 h-6"
                  fill="#6b7280"
                  viewBox="0 -3.84 122.88 122.88"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  enableBackground="new 0 0 122.88 115.21"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md lg:text-lg rounded-lg block w-full pl-12 lg:pl-16 p-2 lg:p-2.5 focus:outline-none ring-transparent"
                placeholder={`${getPlaceholder()}`}
                value={searchTerm}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div
            className={`max-h-56 border-2 rounded-lg overflow-scroll ${
              searchTerm ? "" : "hidden"
            } ${suggestions.length ? "" : "hidden"}`}
          >
            <div
              id="dropdown"
              className={`z-10 w-full bg-white divide-y divide-gray-100 rounded-lg`}
            >
              <ul
                className="text-sm w-full text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {suggestions.map((item: FoodItem) => (
                  <li key={item.nama}>
                    <div
                      className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => addFoodToConsumedList(item.nama)}
                    >
                      {item.nama}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 flex flex-col scale-95 mt-8 md:mt-10 w-full">
        <form className="">
          <div className="text-2xl font-semibold text-center text-slate-700 mb-6">
            List Foods & Drinks Consumed
          </div>
          <div
            className={`w-full max-w-2xl mx-auto ${
              consumedFoods.length ? "max-h-96" : ""
            } overflow-scroll`}
          >
            {consumedFoods.length ? (
              <>
                <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <FoodCard />
                  {consumedFoods.map((food: FoodItem, index: number) => (
                    <li className="pb-3 sm:pb-4" key={food.nama + index}>
                      <div className="flex items-center">
                        <div className="flex-1 min-w-0">
                          <p className="text-md font-medium text-gray-900 truncate">
                            {food.nama}
                          </p>
                          <div className="text-sm text-gray-500 truncate dark:text-gray-400 flex flex-wrap gap-x-3 mt-2">
                            <div className="">
                              Protein:{" "}
                              {((food.protein / 100) * food.quantity).toFixed(
                                4
                              )}
                            </div>
                            <div className="">
                              Energi:{" "}
                              {((food.energi / 100) * food.quantity).toFixed(4)}
                            </div>
                            <div className="">
                              Karbohidrat:{" "}
                              {(
                                (food.karbohidrat / 100) *
                                food.quantity
                              ).toFixed(4)}
                            </div>
                            <div className="">
                              Lemak:{" "}
                              {((food.lemak / 100) * food.quantity).toFixed(4)}
                            </div>
                            <div className="">
                              Serat:{" "}
                              {((food.serat / 100) * food.quantity).toFixed(4)}
                            </div>
                          </div>
                        </div>
                        <div className="ms-4">
                          <input
                            type="number"
                            min="1"
                            value={food.quantity}
                            onChange={(e) =>
                              setConsumedFoods((prevFoods) =>
                                prevFoods.map((prevFood, idx) =>
                                  idx === index
                                    ? {
                                        ...prevFood,
                                        quantity: parseInt(e.target.value),
                                      }
                                    : prevFood
                                )
                              )
                            }
                            className="w-16 py-1 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="inline-flex items-center text-base font-normal text-gray-900 ms-2 me-6">
                          grams
                        </div>
                        <div className="cursor-pointer">
                          <svg
                            onClick={() =>
                              removeFoodFromConsumedList(food.nama)
                            }
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <div className="text-lg text-center text-slate-500">
                  No food consumed, Huh?
                </div>
              </>
            )}
          </div>
          {consumedFoods.length ? (
            <>
              <div className="flex justify-center items-center w-full mt-6 mb-12">
                <button
                  type="button"
                  onClick={handleCheckout}
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
              </div>
            </>
          ) : (
            <></>
          )}
        </form>
      </div>
    </>
  );
}
