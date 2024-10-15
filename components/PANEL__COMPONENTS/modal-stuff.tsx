"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";

type ModalStuffProps = {
  skillsData: never[];
  onClose: () => void;
  onSave: () => void;
  showModal: string | null;
  setSelectedSkill: React.Dispatch<React.SetStateAction<never[]>>;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  setSkillsData: React.Dispatch<React.SetStateAction<never[]>>;
  selectedSkill: never[];
};
const ModalStuff = ({
  skillsData,
  onSave,
  onClose,
  showModal,
  setSelectedSkill,
  value,
  onChange,
  setSkillsData,
  selectedSkill,
}: ModalStuffProps) => {
  const modalRef = useRef<null | HTMLDialogElement>(null);
  useEffect(() => {
    if (showModal === "y") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  const openModal = () => {
    modalRef.current?.close();
    onClose();
  };

  const saveModal = () => {
    onSave();
    openModal();
  };

  const modal =
    showModal === "y" ? (
      <dialog ref={modalRef}>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 backdrop:bg-gray-800/50 border bg-white w-[50%] flex items-end flex-col py-[2%] px-[1%] rounded-lg">
          <Link
            href="/panel/profile"
            onClick={() => openModal()}
            className="self-start text-red-600"
          >
            <ImCross />
          </Link>
          <div className="flex justify-end gap-[3%] py-[1%] w-full">
            {selectedSkill.map((item) => (
              <span
                key={item}
                className="bg-[#4866CF] text-white rounded-lg px-[2%] py-1"
              >
                {item}
              </span>
            ))}
          </div>
          <input
            type="text"
            className="w-full p-[2%] bg-[#EDF0FB] rounded-lg"
            value={value}
            onChange={onChange}
          />
          <div className="rounded-lg w-full grid grid-cols-5 whitespace-nowrap gap-5 text-center p-[2%]">
            {skillsData.map((item, index) => (
              <span
                key={index}
                onClick={() =>
                  item === skillsData[index] &&
                  setSelectedSkill((last) => [...last, `${item},`])
                }
                className="bg-[#EDF0FB] rounded-lg cursor-pointer px-[2%]"
              >
                {item}{" "}
              </span>
            ))}
          </div>
          <Link
            href="/panel/profile"
            onClick={() => saveModal()}
            className="bg-[#4866CF] text-white px-[2%] py-1 rounded-lg"
          >
            ذخیره
          </Link>
        </div>
      </dialog>
    ) : null;
  return modal;
};

export default ModalStuff;
