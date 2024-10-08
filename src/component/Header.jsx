import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const Header = () => {
  const [show, setShow] = useState(false);

  const { setSearchTerm, handleFilter } = useContext(AppContext);

  return (
    <div className="bg-white container">
      <div className="border py-4 sm:px-20 md:px-32">
        <div className="flex justify-between gap-5">
          <Link to={"/"} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span className="ml-2 font-semibold text-[#252C32]">
              What a Market
            </span>
          </Link>
          <div className="ml-6 flex flex-1 gap-x-3">
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-1 px-3 text-white hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="text-sm font-medium">Categories</span>
            </button>
            <div
              id="dropdown"
              className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-48 absolute top-16 border ${
                show ? "show" : "hidden"
              }`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <button
                    onClick={() => handleFilter("men's clothing")}
                    className="block px-4 py-2 w-full text-start hover:bg-gray-100 text-gray-600"
                  >
                    Men's clothing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilter("women's clothing")}
                    className="block px-4 py-2 w-full text-start hover:bg-gray-100 text-gray-600"
                  >
                    Women's clothing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilter("electronics")}
                    className="block px-4 py-2 w-full text-start hover:bg-gray-100 text-gray-600"
                  >
                    Electronics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilter("jewelery")}
                    className="block px-4 py-2 w-full text-start hover:bg-gray-100 text-gray-600"
                  >
                    Jewelery
                  </button>
                </li>
              </ul>
            </div>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
              placeholder="Search product by name"
            />
          </div>
          <div className="ml-2 flex">
            <Link
              to="/cart"
              className="flex cursor-pointer items-center gap-x-1 rounded-md py-1 px-4 hover:bg-gray-100"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                  0
                </span>
              </div>
              <span className="text-sm font-medium">Cart</span>
            </Link>
            <Link
              to="/login"
              className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-1 px-4 hover:bg-gray-100"
            >
              <span className="text-sm font-medium">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
