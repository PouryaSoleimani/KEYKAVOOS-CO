"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, getIdFromLocal, getTokenFromLocal, } from "@/redux/features/user/userSlice";
import { Bounce, toast } from "react-toastify";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import AboutMeEducationDropdown from "@/app/panel/components/about-me-education-dropsown";
import SubmitOrderDropdown from "./../../submit-order/components/submit-order-dropdown";
import TicketFields from "./../../support/add-new-ticket/components/ticket-fields";
import FileUpload from "../../submit-order/components/file-upload";
import { submitConsultation } from "@/utils/utils";

function SubmitConsultation() {
  const { userId, token } = useSelector((state: any) => state.userData);
  const [ticket, setTicket] = useState({ title: "", description: "", date: "", type: "حضوری", register_user_id: userId, });
  const router = useRouter();

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitConsultation(
      token,
      ticket.title,
      ticket.description,
      ticket.date,
      ticket.type === "تلفنی" ? "by-phone" : ticket.type === "حضوری" ? "in-person" : "online",
      userId
    );
  };
  // console.log(ticket.type);
  return (
    <div className="relative">
      <div className="flex justify-end w-full text-xl cursor-pointer absolute -top-12" onClick={() => router.back()}>
        <div className="rounded-md p-2 bg-white hover:bg-[#4866CF] hover:text-white duration-300">
          <IoArrowBack />
        </div>
      </div>
      <form onSubmit={(e) => handleSubmission(e)} className="bg-white shadow mx-auto rounded-lg py-[3%] px-[3%] w-full grid grid-cols-1 gap-3 mt-10 lg:mt-0" >
        <div className="grid grid-cols-1 gap-8 max-w-[27rem]">
          <TicketFields label="عنوان مشاوره:" width="100%" value={ticket.title} onChange={(e) => setTicket((last) => ({ ...last, title: e.target.value }))} />
          <span className="absolute right-[8.6rem] text-red-800 text-xl top-5">*</span>
          <TicketFields label="تاریخ:" width="100%" value={ticket.date} onChange={(e) => setTicket((last) => ({ ...last, date: e.target.value }))} type="date" />
          <span className="absolute right-[5rem] text-red-800 text-xl top-32">*</span>
          <SubmitOrderDropdown onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket((last) => ({ ...last, type: e.target.value }))} value={ticket.type} dropdownItems={["حضوری", "آنلاین", "تلفنی"]} dropDownTitle="نوع درخواست مشاوره:" />
        </div>
        <div style={{ border: "none", borderTop: "3px solid", borderImage: "linear-gradient(to right, #FFFFFF 0%, #4866CE 45% ,#4866CE 55% , #FFFFFF 100%) 1", margin: "3% 0", }}></div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="desc">توضیحات:</label>
            <textarea
              name="desc"
              id=""
              cols={60}
              rows={10}
              className="p-2 bg-[#EAEFF6] lg:w-full w-full rounded-[4px]"
              value={ticket.description}
              onChange={(e) => setTicket((last) => ({ ...last, description: e.target.value }))}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className={`${"bg-[#4866CE]"} text-white p-4 rounded-[4px] hover:bg-blue-800 duration-300`}
            type="submit"
          // disabled={fileSelected === true ? false : true}
          >
            ارسال درخواست مشاوره
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubmitConsultation;
