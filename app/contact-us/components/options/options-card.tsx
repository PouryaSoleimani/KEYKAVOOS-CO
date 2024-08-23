import React from "react";
type OptionsCardProps = {
  src: string;
  head: string;
  info: string;
};
const OptionsCard = ({ src, head, info }: OptionsCardProps) => {
  return (
    <div
      className="w-full h-full py-[15%] px-[1%] rounded-[50px] overflow-hidden flex flex-col items-center justify-center mx-auto"
      style={{ boxShadow: "0px 17px 44px -1px rgba(0, 0, 0, 0.25)" }}
    >
      {/* Logo */}
      <div className="w-[150px] h-[150px] bg-gradient-to-b from-zinc-300 to-indigo-400 rounded-full flex justify-center items-center">
        <img src={src} className="w-[60px] h-[60px]" />
      </div>
      {/* Texts */}
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[25px] font-bold mt-2">{head}</p>
        <p className="text-[17px] font-bold w-[180px] h-[60px] text-center font-faNum">
          {info}
        </p>
      </div>
    </div>
  );
};

export default OptionsCard;
