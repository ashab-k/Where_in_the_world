"use client";
import React, { useState } from "react";

const Filter = ({ handleClick, arg }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
          <li className="mb-2 text-lg mx-3" onClick={handleClick}>
            Asia
          </li>
          <li className="mb-2 text-lg mx-3" onClick={handleClick}>
            America
          </li>
          <li className="mb-2 text-lg mx-3" onClick={handleClick}>
            Europe
          </li>
          <li className="mb-2 text-lg mx-3" onClick={handleClick}>
            Africa
          </li>
          <li className="mb-2 text-lg mx-3" onClick={handleClick}>
            Ocenia
          </li>{" "}
        </ul>
      )}
    </div>
  );
};

export default Filter;
