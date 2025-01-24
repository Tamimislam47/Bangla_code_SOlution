import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer flex justify-around gap-4 bg-black p-10 text-white">
      <nav className="flex flex-col gap-8">
        <h1 className="text-3xl font-extrabold">Where To Find Us</h1>
        <li className="link flex list-none flex-col no-underline hover:cursor-text">
          <span className="flex gap-2 font-bold">
            <img src="/footer_img/address-info-contacts.svg" alt="" />
            <span>
              <span className="flex gap-6 text-xl font-bold">
                17504 Carlton Cuevas Rd
              </span>
              <span className="text-base">Gulfport, MS, 39503</span>
            </span>
          </span>
        </li>

        <li className="link flex list-none flex-col no-underline hover:cursor-text">
          <span className="flex gap-2 font-bold">
            <img src="/footer_img/address-info-headphone.svg" alt="" />
            <span className="flex flex-col">
              <span className="flex gap-6 text-xl font-bold">01817401961</span>
              <span className="text-base">Sat-Fri 8:30am - 8:30pm</span>
            </span>
          </span>
        </li>
        <li className="link flex list-none flex-col no-underline hover:cursor-text">
          <span className="flex gap-2 font-bold">
            <img src="/footer_img/address-info-email.svg" alt="" />
            <span className="flex flex-col">
              <span className="flex gap-6 text-xl font-bold">
                tamim.furious@gmail.com
              </span>
              <span className="text-base">24x7 online support</span>
            </span>
          </span>
        </li>
      </nav>

      <nav className="flex w-[40%] flex-col gap-6">
        <h6 className="text-3xl font-extrabold">Newsletter</h6>
        <form action="" className="flex w-full flex-col gap-6">
          <li className="link no-underline">
            <label className="input input-bordered flex w-[85%] items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter Your Email"
              />
              <FaPaperPlane color="#77BEFF" />
            </label>
          </li>
        </form>
        <span className="text-3xl font-extrabold">Quick Links</span>
        <div className="flex w-full">
          <div className="flex w-1/2 flex-col gap-2 text-base">
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              Home
            </li>
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              Team
            </li>
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              Service
            </li>
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              Blog
            </li>
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              Contact
            </li>
          </div>
          <div className="flex w-1/2 flex-col gap-2 text-base">
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              About us
            </li>
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              Team Single
            </li>
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              Service Single
            </li>
            <li className="transition duration-500 hover:cursor-pointer hover:text-[#77BEFF]">
              Blog Single
            </li>
          </div>
        </div>
      </nav>
      <nav className="flex flex-col gap-3">
        <h6 className="text-3xl font-extrabold">Call Center</h6>
        <li className="link text-3xl font-semibold text-[#D4D6D7] no-underline transition duration-500 hover:text-[#77BEFF]">
          +8801817401961
        </li>
        <li className="link text-2xl no-underline">and get a free estimate</li>
      </nav>
    </footer>
  );
}
