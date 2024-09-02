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
  data: { title: string; url: string }[];
  setData: React.Dispatch<
    React.SetStateAction<{ title: string; url: string }[]>
  >;
  // modalInputValue: string;
  // setModalInputValue: React.Dispatch<React.SetStateAction<string>>;
};
function SubmitOrderModalfield({
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
  // RETURN
  return (
    <div className="flex flex-col gap-3 relative">
      <label>{modalFieldTitle}</label>
      <div className="lg:p-[2%] p-5 bg-[#EAEFF6] rounded-[4px] relative">
        <Image src={plus} alt="plus" className="absolute left-1 top-1/2 -translate-y-1/2 pl-1 cursor-pointer" onClick={() => setShowModal(true)} />
        <div className="flex justify-end gap-3 mx-2">
          {data.map((item, index) => (
            item.url && <div key={item.url}>
              <div className="flex items-center bg-[#4866CE] text-white px-2 py-1.5 mx-2 rounded-[4px] justify-between space-x-1">
                <span>{item.url}</span>
                {
                  <span className="text-red-600 cursor-pointer" onClick={() => deleteItem(index)}>
                    <MdDelete className="w-5 h-5 -translate-x-1" />
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

export default SubmitOrderModalfield;
