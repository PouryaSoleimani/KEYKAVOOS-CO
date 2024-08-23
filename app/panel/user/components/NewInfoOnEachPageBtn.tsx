import Image from "next/image";
import Link from "next/link";
import React from "react";
import add from "@/public/Panel/addticket.svg";
const NewInfoOnEachPageBtn = ({
  btnText,
  src,
}: {
  btnText: string;
  src: string;
}) => {
  return (
    <Link
      href={src}
      className="text-white bg-[#4866CF] p-2 rounded-[5px] flex flex-row gap-3 items-center"
    >
      {btnText}
      <Image src={add} alt="add" />
    </Link>
  );
};

export default NewInfoOnEachPageBtn;
