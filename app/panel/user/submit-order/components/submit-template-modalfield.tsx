"use client";
import React, { useEffect, useState } from "react";
import plus from "/public/Panel/plus.svg";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import OrdersubmissionModal from "./odersubmission-modal";
import { PiPlus } from "react-icons/pi";
type SubmitOrderDropdownProps = {
  modalFieldTitle: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: { template_name: string; }[];
  setData: React.Dispatch<
    React.SetStateAction<{ template_name: string; }[]>
  >;
};
function SubmitTemplateModalfield({
  modalFieldTitle,
  setShowModal,
  // showModal,
  setData,
  data,
}: // modalInputValue,
  // setModalInputValue,
  SubmitOrderDropdownProps) {
  const deleteItem = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  return (
    <div className="flex flex-col gap-3 relative">
      <label>{modalFieldTitle}</label>
      <div className="lg:p-[2%] p-5 bg-[#EAEFF6] rounded-[4px] relative">
        <Image src="/Panel/plus.svg" alt="plus" className="absolute left-1 top-1/2 -translate-y-1/2 pl-1 cursor-pointer" onClick={() => setShowModal(true)} width={25} height={25} />
        <div className="flex justify-end gap-3 mx-2">
          {data.map((item, index) => (
            item.template_name && <div key={item.template_name}>
              <div className="flex items-center bg-[#4866CE] text-white px-2 py-1.5 rounded-[4px] mx-2 hover:scale-110 duration-300">
                <span>{item.template_name}</span>
                {
                  <span className="text-red-600 cursor-pointer mr-1" onClick={() => deleteItem(index)}>
                    <MdDelete className="w-5 h-5" />
                  </span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubmitTemplateModalfield;
