import React from "react";
import icon from "../../assets/icons/icon.png";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../styles/LandingPage.module.css";

const Index = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });
  return (
    <div>
      {/* navbar and banner  */}
      <div className={styles.nav_banner__wrapper}>
        <div
          className={`flex justify-center items-center bg-gradient-to-b from-black to-transparent ${styles.overlay}`}
        ></div>
        <nav className={styles.navbar_wrapper}>
          <div className="navbar py-0 px-5">
            <div className="navbar-start">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
              <Image src={icon} width={180} height={100} alt="logo" />
              <ul className="text-xl font-semibold text-white flex justify-around items-center">
                <li className="mx-4">
                  <Link href="/">Products</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Learn</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Safety</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Support</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Download</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button className="cursor-pointer text-red-600 bg-white px-6 py-2 text-xl font-semibold rounded-md">
                Log in
              </button>
            </div>
          </div>
        </nav>
        <div className={`${styles.banner_text}`}>
          <div className=" flex justify-center items-center flex-col pt-10 w-full h-full">
            <h1 className="text-8xl text-center mb-12 mt-10 tracking-wide text-white font-bold">
              Start someting epic.
            </h1>
            <button className="text-white font-medium rounded-full px-20   py-4 bg-gradient-to-r from-[#fd267a] to-[#ff6036]">
              Create Account
            </button>
          </div>
        </div>
        <p className="absolute bottom-2 right-2 text-white text-xs">
          All photos are of models used for illustrative purpose only.
        </p>
      </div>

      {/* reviews slider */}
      <div ref={sliderRef} className="container mx-auto my-10 keen-slider h-52">
        <div className="keen-slider__slide number-slide">
          <div className=" p-5 bg-white">
            <div className=" flex justify-between">
              <div className="w-8/12">
                <h3 className="text-sm text-black ">Md Akash</h3>
                <div className="divider my-0"></div>
              </div>
              <div className="pl-2 w-3/12">
                <p className=" text-slate-400">
                  <i className="fa-solid fa-quote-left fa-3x"></i>
                </p>
              </div>
            </div>
            <div>adsf</div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide">2</div>
        <div className="keen-slider__slide number-slide">3</div>
        <div className="keen-slider__slide number-slide">4</div>
        <div className="keen-slider__slide number-slide">5</div>
        <div className="keen-slider__slide number-slide">6</div>
      </div>
    </div>
  );
};

export default Index;
