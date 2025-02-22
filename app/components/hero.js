"use client";
import { Typewriter } from "react-simple-typewriter";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="h-screen text-center text-white flex justify-center items-center">
      <div className="">
        <div className="flex flex-col items-center gap-8 relative z-30">
          <h1 className="text-5xl font-semibold">Thiru Supanusan</h1>
          <h1 className="text-xl md:text-2xl text-gray-300 ">
            <Typewriter
              words={["Fullstack-Developer", "App developer", "Problem Solver"]}
              loop
              cursor
              cursorBlinking
              deleteSpeed={40}
              delaySpeed={200}
            />
          </h1>
          <div className="flex justify-center items-center gap-8 text-2xl mb-6">
            <a
              href="https://www.facebook.com/share/15w9RVCUh6/"
              target="_blank">
              <FiFacebook className=" cursor-pointer text-gray-300 duration-300 hover:text-white" />
            </a>
            <a href="https://wa.me/94759920388" target="_blank">
              <FaWhatsapp className=" cursor-pointer text-gray-300 duration-300 hover:text-white" />
            </a>
            <a href="#" target="_blank">
              <FaInstagram className=" cursor-pointer text-gray-300 duration-300 hover:text-white" />
            </a>
          </div>
          <button className="bg-gradient-to-r from-blue-500 from-40% bg-purple-600 rounded-3xl py-3 w-1/2 font-semibold hover:opacity-90 ">
            View My Work
          </button>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
