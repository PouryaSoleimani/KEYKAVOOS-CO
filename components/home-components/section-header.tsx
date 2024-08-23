import React from "react";

type SectionHeaderProps = {
  mainTitle: string;
  subTitle: string;
  width: string;
  marginBottom?: string;
  marginTop?: string;
};
function SectionHeader({
  mainTitle,
  subTitle,
  width,
  marginBottom,
  marginTop,
}: SectionHeaderProps) {
  return (
    <div
      className="relative whitespace-nowrap sm:mt-24 sm:mb-20 mt-20 mb-10"
      // style={{ marginBottom: marginBottom, marginTop: marginTop }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: width,
          height: "100%",
          border: "none",
          borderTop: "3px solid",
          borderImage:
            "linear-gradient(to left, rgba(72, 102, 207, 1) -5%, rgba(234, 239, 246, 1) 100%) 1",
        }}
        className="hidden lg:inline"
      ></div>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: width,
          height: "100%",
          border: "none",
          borderTop: "3px solid",
          borderImage:
            "linear-gradient(to left, rgba(234, 239, 246, 1) -5%, rgba(72, 102, 207, 1) 100%) 1",
        }}
        className="hidden lg:inline"
      ></div>
      <div className="text-center absolute -top-14 left-1/2 -translate-x-1/2 bg-transparent">
        <p className="text-[#68707A] sm:text-[32px] font-bold">
          {mainTitle}
        </p>
        <p className="text-[#4866CF] sm:text-[24px] text-[4.5vmin]">
          {subTitle}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
