import React from "react";

type SectionHeaderProps = { mainTitle: string; subTitle: string; width: string; marginBottom?: string; marginTop?: string; };
function SectionHeader({ mainTitle, subTitle, width, marginBottom, marginTop, }: SectionHeaderProps) {
  return (
    <div className="relative mt-20 sm:mt-24 mb-10 sm:mb-20 whitespace-normal lg:whitespace-nowrap">
      <div style={{ position: "absolute", top: "0", left: "0", width: width, height: "100%", border: "none", borderTop: "3px solid", borderImage: "linear-gradient(to left, rgba(72, 102, 207, 1) -5%, rgba(234, 239, 246, 1) 100%) 1", }} className="lg:inline hidden" ></div>
      <div style={{ position: "absolute", top: "0", right: "0", width: width, height: "100%", border: "none", borderTop: "3px solid", borderImage: "linear-gradient(to left, rgba(234, 239, 246, 1) -5%, rgba(72, 102, 207, 1) 100%) 1", }} className="lg:inline hidden"  ></div>
      <div className="-top-10 px-4 tracking-tighter left-1/2 absolute bg-transparent text-center -translate-x-1/2 text-xl whitespace-normal lg:whitespace-nowrap w-full">
        <p className="font-bold text-[#68707A] text-2xl sm:text-[32px] tracking-tighter leading-relaxed">
          {mainTitle}
        </p>
        <p className="text-[#4866CF] mt-6 text-[5.5vmin] sm:text-[22px] tracking-tighter leading-relaxed">
          {subTitle}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
