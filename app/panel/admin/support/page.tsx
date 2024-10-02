"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import add from "../../../../public/Panel/addticket.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchUserProfile, getIdFromLocal, getTokenFromLocal, } from "@/redux/features/user/userSlice";
import checkmark from "../../../../public/Panel/checkmark.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import vieweye from "../../../../public/ViewUsers/vieweye.svg";
import CloseTicketModal from "./components/close-ticket-modal";
import NotFound from "../components/NotFound";
import { closeTicket, getAllTickets } from "@/utils/utils";
import BackButton from "../components/BackButton";
import app from "@/services/service";
import { toast } from "react-toastify";
const moment = require("moment-jalaali");

const Support = () => {
  const { token } = useSelector((state: any) => state.userData);
  const [allTickets, setAllTickets] = useState([]);
  const [allTicketsStatus, setAllTicketsStatus] = useState({ error: "", loading: false, });
  const [isClosed, setIsClosed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ISCLOSED, SETISCLOSED] = useState(false)
  //^ FUNCTIONS
  // useEffect(() => { getAllTickets(token, setAllTickets, setAllTicketsStatus); }, []);

  function GETALLTICKETS() { app.get("/tickets").then(response => { console.log(response.data); setAllTickets(response.data.data) }) }
  useEffect(() => { GETALLTICKETS() }, []);


  function SEENTICKET(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, ticket_id: string | number) {
    event.preventDefault()
    console.log("SEEN SEEN")
    app.post(`/ticket/update/${ticket_id}`, { status_id: 2 })
      .then(response => {
        console.log("TICKET RESPONSE", response.data);
        GETALLTICKETS();
        toast.success('تیکت با موفقیت بسته شد', { hideProgressBar: true, style: { fontSize: "14px" }, autoClose: 1500 })
      })
  }


  // ^ RETURN __________________________________________________________________________________________________________________________________________________
  return (
    <>
      <div className="py-3">
        <h1 className="text-2xl font-bold text-[#4866cf] pr-2">مدیریت تیکت ها</h1>
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-white shadow mx-auto rounded-lg py-[3%] px-[3%] mt-2 w-full">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-5 text-center">
              <p>شماره</p>
              <p>عنوان</p>
              <p>وضعیت</p>
              <p>تاریخ به روزرسانی</p>
              <p>عملیات</p>
            </div>
            {allTicketsStatus.loading ? (
              <SkeletonTheme>
                <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
              </SkeletonTheme>
            ) : allTicketsStatus.error ? (
              <NotFound text={`${allTicketsStatus.error}`} />
            ) : allTickets.length !== 0 ? (
              allTickets?.map((item: any, index) => (
                <div key={item.id} className={`grid grid-cols-5 text-center py-4 rounded-[4px] ${item.status_id == 2 ? "bg-emerald-800/80 text-white" : "bg-[#EAEFF6]"}`}  >
                  <p>{index + 1}</p>
                  <p>{item.title}</p>
                  <div>
                    {item.status_id == 2 ? (
                      <p> بسته{" "} <span className="text-emerald-600 font-semibold">شده</span> </p>
                    ) : (
                      <p> بسته{" "}<span className="text-red-400 font-semibold">نشده</span></p>
                    )}
                  </div>
                  <p>
                    {item.updated_at ? moment(item.updated_at, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD") : "-"}
                  </p>
                  <div>
                    <div className="flex flex-row justify-center gap-4">
                      <Link href={`/panel/admin/support/ticket-detail?id=${item.id}`} className="hover:scale-125 duration-300">
                        <Image src={vieweye} alt="مشاهده" width={20} />
                      </Link>
                      {item.status_id !== 2 && (
                        <button onClick={(event => SEENTICKET(event, item.id))} className="cursor-pointer hover:scale-125 duration-300">
                          <Image src={checkmark} alt="بستن" width={20} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <NotFound text="تیکتی یافت نشد" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
