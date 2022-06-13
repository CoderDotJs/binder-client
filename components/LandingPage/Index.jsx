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
      <div ref={sliderRef} className="container mx-auto my-10 keen-slider">
        <div className="keen-slider__slide number-slide">
          <div className="w-full h-80 p-5 bg-white border-2 rounded-md">
            <div className="flex justify-between">
              <div className="w-9/12">
                <h3 className="text-md text-black font-bold">Md Akash</h3>
                <div className="divider my-0"></div>
              </div>
              <div className=" w-2/12">
                <p className=" text-slate-400">
                  <i className="fa-solid fa-quote-left fa-3x"></i>
                </p>
              </div>
            </div>
            <div>
              <p className="">
                He hit me with one the WORST pick up lines I had ever seen, but
                being bored at work, I decided to reply. From there we never
                stopped talking, dating each other and falling deeper in love.
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide">
          <div className="w-full h-80 p-5 bg-white border-2 rounded-md">
            <div className="flex justify-between">
              <div className="w-9/12">
                <h3 className="text-md text-black font-bold">Md Akash</h3>
                <div className="divider my-0"></div>
              </div>
              <div className=" w-2/12">
                <p className=" text-slate-400">
                  <i className="fa-solid fa-quote-left fa-3x"></i>
                </p>
              </div>
            </div>
            <div>
              <p className="">
                He hit me with one the WORST pick up lines I had ever seen, but
                being bored at work, I decided to reply. From there we never
                stopped talking, dating each other and falling deeper in love.
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide">
          <div className="w-full h-80 p-5 bg-white border-2 rounded-md">
            <div className="flex justify-between">
              <div className="w-9/12">
                <h3 className="text-md text-black font-bold">Md Akash</h3>
                <div className="divider my-0"></div>
              </div>
              <div className=" w-2/12">
                <p className=" text-slate-400">
                  <i className="fa-solid fa-quote-left fa-3x"></i>
                </p>
              </div>
            </div>
            <div>
              <p className="">
                He hit me with one the WORST pick up lines I had ever seen, but
                being bored at work, I decided to reply. From there we never
                stopped talking, dating each other and falling deeper in love.
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide">
          <div className="w-full h-80 p-5 bg-white border-2 rounded-md">
            <div className="flex justify-between">
              <div className="w-9/12">
                <h3 className="text-md text-black font-bold">Md Akash</h3>
                <div className="divider my-0"></div>
              </div>
              <div className=" w-2/12">
                <p className=" text-slate-400">
                  <i className="fa-solid fa-quote-left fa-3x"></i>
                </p>
              </div>
            </div>
            <div>
              <p className="">
                He hit me with one the WORST pick up lines I had ever seen, but
                being bored at work, I decided to reply. From there we never
                stopped talking, dating each other and falling deeper in love.
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide">
          <div className="w-full h-80 p-5 bg-white border-2 rounded-md">
            <div className="flex justify-between">
              <div className="w-9/12">
                <h3 className="text-md text-black font-bold">Md Akash</h3>
                <div className="divider my-0"></div>
              </div>
              <div className=" w-2/12">
                <p className=" text-slate-400">
                  <i className="fa-solid fa-quote-left fa-3x"></i>
                </p>
              </div>
            </div>
            <div>
              <p className="">
                He hit me with one the WORST pick up lines I had ever seen, but
                being bored at work, I decided to reply. From there we never
                stopped talking, dating each other and falling deeper in love.
              </p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide">
          <div className="w-full h-80 p-5 bg-white border-2 rounded-md">
            <div className="flex justify-between">
              <div className="w-9/12">
                <h3 className="text-md text-black font-bold">Md Akash</h3>
                <div className="divider my-0"></div>
              </div>
              <div className=" w-2/12">
                <p className=" text-slate-400">
                  <i className="fa-solid fa-quote-left fa-3x"></i>
                </p>
              </div>
            </div>
            <div>
              <p className="">
                He hit me with one the WORST pick up lines I had ever seen, but
                being bored at work, I decided to reply. From there we never
                stopped talking, dating each other and falling deeper in love.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer py-2">
        <div className="container mx-auto w-full">
          <div className="flex w-full border-b-2 pb-4">
            <div className="w-3/12">
              <h3 className="text-lg uppercase text-black font-bold mb-2">
                About
              </h3>
              <ul className="flex flex-col justify-start items-start text-lg">
                <li>Privacey</li>
                <li>Terms</li>
                <li>Cookie Policy</li>
                <li>Intellectual Property</li>
              </ul>
            </div>
            <div className="w-3/12">
              <h3 className="text-lg uppercase text-black font-bold mb-2">
                Careers
              </h3>
              <ul className="flex flex-col justify-start items-start text-lg">
                <li>Careers Portal</li>
                <li>Tech Blogs</li>
              </ul>
            </div>
            <div className="w-3/12">
              <h3 className="text-lg uppercase text-black font-bold mb-2">
                Socials
              </h3>
              <ul className="flex  items-start ">
                <li className="mx-2">
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </li>
                <li className="mx-2">
                  <i className="fa-brands fa-tiktok fa-2x"></i>
                </li>
                <li className="mx-2">
                  <i className="fa-brands fa-youtube fa-2x"></i>
                </li>
                <l className="mx-2">
                  <i className="fa-brands fa-twitter fa-2x"></i>
                </l>
                <li className="mx-2">
                  <i className="fa-brands fa-facebook-f fa-2x"></i>
                </li>
              </ul>
            </div>
            <div className="w-3/12">
              <ul className="text-lg">
                <li>FAQ</li>
                <li className="mt-1">Destination</li>
                <li className="mt-1">Press Room</li>
                <li className="mt-1">Contact</li>
                <li className="mt-1">Promocode</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center py-3">
            <span className="text-lg font-bold uppercase block mr-4">
              Get the app!
            </span>
            <Image
              src="https://tinder.com/static/build/d256a5b510a685030be375c63a9010e9.webp"
              alt="appstore"
              height={50}
              width={150}
              className="block mx-2"
            />
            <Image
              src="https://tinder.com/static/build/03aed264f8539c570e9bc80ba6b60d92.webp"
              alt="appstore"
              height={75}
              width={160}
              className="block mx-2"
            />
          </div>
          <div className="border-b-2 pb-3">
            <p>
              Single people, listen up: If you’re looking for love, want to
              start dating, or just keep it casual, you need to be on Tinder.
              With over 55 billion matches made, it’s the place to be to meet
              your next best match. Let’s be real, the dating landscape looks
              very different today, as most people are meeting online. With
              Tinder, the world’s most popular free dating app, you have
              millions of other single people at your fingertips and they’re all
              ready to meet someone like you. Whether you’re straight or in the
              LGBTQIA community, Tinder’s here to bring you all the sparks.
              <br />
              <br />
              There really is something for everyone on Tinder. Want to get into
              a relationship? You got it. Trying to find some new friends? Say
              no more. New kid on campus and looking to make the most of your
              college experience? Tinder U’s got you covered. Tinder isn’t your
              average dating site — it’s the most diverse dating app, where
              adults of all backgrounds and experiences are invited to make
              connections, memories, and everything in between.
            </p>
          </div>
          <div className="w-full flex justify-between items-center py-4">
            <div>
              <ul className="flex ">
                <li className="mx-1">FAQ </li>
                <li className="mx-1">/ Safety Tips </li>
                <li className="mx-1">/ Terms </li>
                <li className="mx-1">/ Cookie Policy </li>
                <li className="mx-1">/ Privecy Settings </li>
              </ul>
            </div>
            <div>
              <p>© 2022 Match Group, LLC, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
