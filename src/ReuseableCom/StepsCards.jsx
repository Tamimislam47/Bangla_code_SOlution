import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import style from "../Stylemodules/border.module.css";

export default function StepsCards({ data }) {
  const { title, img, description: content } = data;
  return (
    <div className={`${style.container} group mt-2 rounded-lg`}>
      <div className={`${style["container-content"]} p-10 hover:pt-16 items-start  flex flex-col gap-4`}>
        {/* Image Section */}
        <img
          src={img}
          alt=""
          className="h-[50px] transition-all duration-300 group-hover:h-0 group-hover:opacity-0"
        />

        {/* Title and Description */}
        <h2 className="text-3xl font-semibold transition-transform duration-300 group-hover:translate-y-[-20px]">
          {title}
        </h2>
        <p className="text-[18px] transition-transform duration-300 group-hover:translate-y-[-20px]">
          {content}
        </p>

        {/* Hidden Button */}
        <button className="btn hidden h-[50px] w-[50px] transform items-center justify-center rounded-full border-2 border-primary opacity-0 transition-all duration-300 group-hover:flex group-hover:translate-y-2 group-hover:opacity-100">
          <BiRightArrowAlt fontSize={"40px"} />
        </button>
      </div>
    </div>
  );
}
