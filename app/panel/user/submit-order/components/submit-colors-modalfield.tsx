"use client";
import React, { useEffect, useState } from "react";
import plus from "../../../../../public/Panel/plus.svg";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import OrdersubmissionModal from "./odersubmission-modal";
type SubmitOrderDropdownProps = {
  modalFieldTitle: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  // showModal: boolean;
  data: { title: string; color: string }[];
  setData: React.Dispatch<
    React.SetStateAction<{ title: string; color: string }[]>
  >;
  // modalInputValue: string;
  // setModalInputValue: React.Dispatch<React.SetStateAction<string>>;
};
function SubmitColorModalfield({
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
        <Image
          src={plus}
          alt="plus"
          className="absolute left-0 top-1/2 -translate-y-1/2 pl-1 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <div className="flex justify-end gap-3 mx-2">
          {data.map((item, index) => (
            item.color && <div key={item.color}>
              <div className="flex items-center bg-[#4866CE] text-white p-1 rounded-[4px]">
                <span>{item.color}</span>
                {
                  <span
                    className="text-red-600 cursor-pointer"
                    onClick={() => deleteItem(index)}
                  >
                    <MdDelete />
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

export default SubmitColorModalfield;
