"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [input, setInput] = useState("");
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

  const findCountry = (event) => {
    event.preventDefault();
    if (input) {
      const filteredData = allCountryData.filter(
        (item) => item.name.toLowerCase() == input.trim().toLowerCase()
      );
      setCountryData(filteredData);
    }
  };

  return (
    <main>
      <div className="my-5 flex flex-col sm:flex-row  w-[80%] mx-auto justify-between">
        <div className="bg-[rgba(43,57,69,1)] w-[100%] sm:w-[30%] my-3 relative flex justify-around py-3">
          <Image src="/icons8-search.svg" width={20} height={20} alt="search" />
          <form className=" w-[70%]" onSubmit={findCountry}>
            <input
              type="text"
              placeholder="Enter country name"
              className="w-[100%] outline-none bg-transparent text-md text-white"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
        <div className="flex flex-col  relative">
          <button
            className="text-[16px] font-light px-2 py-3 bg-[rgba(43,57,69,1)] w-[12rem]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-row justify-evenly">
              <p className="font-semibold">Filter by region</p>
              <Image
                src="/icons8-dropdown-50.png"
                width={20}
                height={20}
                alt="dark mode"
              />
            </div>
          </button>

          {isOpen && (
            <ul className=" absolute top-[100%] w-[12rem] z-50 bg-[rgba(43,57,69,1)] mt-2 rounded shadow-xl ">
              {" "}
              <li
                className="py-2  text-lg font-light px-3 hover:bg-[rgba(32,44,55,1)]"
                onClick={() => handleClick("Asia")}
              >
                Asia
              </li>
              <li
                className="py-2 font-light text-lg px-3  hover:bg-[rgba(32,44,55,1)]"
                onClick={() => handleClick("Americas")}
              >
                Americas
              </li>
              <li
                className="py-2 font-light text-lg px-3 hover:bg-[rgba(32,44,55,1)]"
                onClick={() => handleClick("Europe")}
              >
                Europe
              </li>
              <li
                className="py-2 font-light text-lg px-3 hover:bg-[rgba(32,44,55,1)] "
                onClick={() => handleClick("Africa")}
              >
                Africa
              </li>
              <li
                className="py-2 font-light text-lg px-3 hover:bg-[rgba(32,44,55,1)]"
                onClick={() => handleClick("Oceania")}
              >
                Oceania
              </li>{" "}
              <li
                className="py-2 font-light text-lg px-3 hover:bg-[rgba(32,44,55,1)]"
                onClick={() => handleClick()}
              >
                All
              </li>
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
