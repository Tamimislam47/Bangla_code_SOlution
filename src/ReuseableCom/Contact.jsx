import React from "react";
import { InputDemo } from "./InputDemo";
import { TextareaDemo } from "./TextareaDemo";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center h-[95vh] w-[70%] items-center gap-5">
      <div className="flex gap-2 justify-center items-center  ">
        <img src="subtitle-icon.png" alt="" className="h-5 w-5" />
        <span className="text-primary text-2xl font-extrabold  ">
          CONTACT US
        </span>
      </div>

      <div className="w-[90%] flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold ">
          Need assistance? please fill the form
        </h1>

        <form className="w-full flex flex-col gap-10 relative ">
          <div className="flex gap-5 w-full">
            <InputDemo type="text" placeholder="Name" />
            <InputDemo type="email" placeholder="Email" />
            <InputDemo type="text" placeholder="Phone" />
          </div>
          <TextareaDemo />

          {/* button */}
          <a href="#" class="button" className=" w-[180px] h-[50px] ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            SUBMIT
          </a>
        </form>
      </div>
    </div>
  );
}
