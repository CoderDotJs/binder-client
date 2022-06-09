import React from "react";
import icon from "../../assets/icons/icon.png";
import Image from "next/image";

const Index = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 text-white bg-gradient-to-b from-slate-500 to-transparent">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLineCap="round"
                  strokeLineJoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex="0">
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className=" normal-case text-xl">
            <Image src={icon} alt="icon" width="150px" height="50px" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                Products
              </a>
              <ul className="p-2 ">
                <li>
                  <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                    Submenu 1
                  </a>
                </li>
                <li>
                  <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                Learn
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                Safety
              </a>
              <ul className="p-2 ">
                <li>
                  <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                    Submenu 1
                  </a>
                </li>
                <li>
                  <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                Support
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-red-600 hover:underline font-bold">
                Download
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="text-black hover:text-red-600 hover:underline">
            English
          </a>
          <a className="font-semibold px-5 mx-2 py-2 bg-white text-red-500 border-0 hover:bg-white">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
