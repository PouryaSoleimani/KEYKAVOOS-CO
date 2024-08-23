"use client";
import React, { useEffect, useState } from "react";
import plus from "../../../../../public/Panel/plus.svg";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import OrdersubmissionModal from "./odersubmission-modal";
type SubmitOrderDropdownProps = {
  modalFieldTitle: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: { plugin_name: string; }[];
  setData: React.Dispatch<
    React.SetStateAction<{ plugin_name: string; }[]>
  >;
};
function SubmitPluginModalfield({
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
            item.plugin_name && <div key={item.plugin_name}>
              <div className="flex items-center bg-[#4866CE] text-white p-1 rounded-[4px]">
                <span>{item.plugin_name}</span>
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

export default SubmitPluginModalfield;
