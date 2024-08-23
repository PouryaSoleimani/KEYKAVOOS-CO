"use client";

import { useState } from "react";
type ReadMoreProps = {
  text: string;
};
const ReadMore = ({ text }: ReadMoreProps) => {
  const [expand, setExpand] = useState(false);

  const toggleReadMore = () => {
    setExpand(!expand);
  };

  const cutTheText = (text: string, lengthToCut: number) => {
    const splitText = text.split(" ");
    if (splitText.length <= lengthToCut) {
      return text;
    }
    return splitText.slice(0, lengthToCut).join(" ");
  };

  const nonRemainingText = cutTheText(text, 21);
  const nextLine = text.split(" ").slice(21, 32).join(" ");

  return (
    <div className="flex flex-col justify-center">
      <p className="hidden lg:flex text-[22px] leading-9 text-justify lg:w-[90%] 8xl:w-[100%] 3xl:text-[20px] lg:text-[17px] lg:leading-7 xl:text-[24px] xl:leading-9 4xl:leading-7 4xl:text-[17px]">
        {text}
      </p>
      {expand ? (
        <p className="text-[15px] leading-7 text-justify pt-[5%]">{text}</p>
      ) : (
        <div className="lg:hidden pt-[5%]">
          <p className="text-[15px] leading-7 text-justify w-full">
            {nonRemainingText}
            <span className="opacity-50">{nextLine}</span>
          </p>
        </div>
      )}
      <button
        onClick={() => toggleReadMore()}
        className="bg-[#C3C3C3] text-white rounded-xl py-1 my-2 w-[50%] lg:hidden mx-auto"
      >
        {expand ? "بستن مطلب" : "ادامه مطلب"}
      </button>
    </div>
  );
};
export default ReadMore;
