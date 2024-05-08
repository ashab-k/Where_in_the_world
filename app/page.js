"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import InputBar from "@/components/InputBar";
import Link from "next/link";

async function getCountiresData() {
  const data = await fetch("http://localhost:3000/api/countries");

  if (!data.ok) {
    throw new Error("failed to fetch data");
  }

  const response = await data.json();
  return response.countries;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [allCountryData, setAllCountryData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getCountiresData();
        setAllCountryData(data);
        setCountryData(data);
        console.log(data);
      } catch (error) {
        console.error("failed to fetch data", error);
      }
    }
    getData();
  }, []);

  const handleClick = (region) => {
    if (region) {
      const filteredData = allCountryData.filter(
        (item) => item.region === region
      );
      setCountryData(filteredData);
    } else {
      setCountryData(allCountryData);
    }
  };

  return (
    <main>
      <div className="my-5 flex w-[80%] mx-auto justify-between">
        <InputBar />
        <div className="flex flex-col  relative">
          <button
            className="text-lg px-2 py-2 bg-[rgba(43,57,69,1)] w-[10rem]"
            onClick={() => setIsOpen(!isOpen)}
          >
            Fiter by Region{" "}
          </button>

          {isOpen && (
            <ul className=" absolute top-[100%] w-[10rem] z-50 bg-[rgba(43,57,69,1)] mt-2 rounded shadow-lg ">
              {" "}
              <li
                className="mb-2 text-lg mx-3"
                onClick={() => handleClick("Asia")}
              >
                Asia
              </li>
              <li
                className="mb-2 text-lg mx-3"
                onClick={() => handleClick("Americas")}
              >
                Americas
              </li>
              <li
                className="mb-2 text-lg mx-3"
                onClick={() => handleClick("Europe")}
              >
                Europe
              </li>
              <li
                className="mb-2 text-lg mx-3"
                onClick={() => handleClick("Africa")}
              >
                Africa
              </li>
              <li
                className="mb-2 text-lg mx-3"
                onClick={() => handleClick("Oceania")}
              >
                Oceania
              </li>{" "}
            </ul>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 w-[80%] gap-10 p-4 mx-auto ">
        {countryData?.map((item, index) => {
          return (
            <Link
              href={`/countries/${item.name}`}
              key={index}
              className="bg-[rgba(43,57,69,1)] w-[100%] flex flex-col"
            >
              <div className="w-auto lg:h-[10rem] md:h-[12rem] overflow-hidden">
                <Image
                  alt={item.name}
                  width={500}
                  height={350}
                  src={item.flags.png}
                />
              </div>

              <p className="my-2 mt-5 px-2 font-bold text-lg mx-4">
                {item.name}
              </p>
              <p className="my-2 px-2  mx-4">Population: {item.population}</p>
              <p className="my-2 px-2  mx-4"> Region: {item.region}</p>
              <p className="my-2 px-2  mx-4 mb-5">Capital: {item.capital}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
