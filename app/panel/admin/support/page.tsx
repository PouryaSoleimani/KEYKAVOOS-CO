"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import add from "../../../../public/Panel/addticket.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchUserProfile,
  getIdFromLocal,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import checkmark from "../../../../public/Panel/checkmark.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import vieweye from "../../../../public/ViewUsers/vieweye.svg";
import CloseTicketModal from "./components/close-ticket-modal";
import NotFound from "../components/NotFound";
import { closeTicket, getAllTickets } from "@/utils/utils";
const moment = require("moment-jalaali");

const Support = () => {
  const { token } = useSelector((state: any) => state.userData);
  const [allTickets, setAllTickets] = useState([]);
  const [allTicketsStatus, setAllTicketsStatus] = useState({
    error: "",
    loading: false,
  });
  const [isClosed, setIsClosed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllTickets(token, setAllTickets, setAllTicketsStatus);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {/* {showModal && (
        <CloseTicketModal
          showModal={showModal}
          setShowModal={setShowModal}
          text={`آیا از بستن تیکت مطمئنید؟`}
          setAllTickets={setAllTickets}
          closeTicketId={closeTicketId}
        />
      )} */}
      <Link
        href="/panel/admin/support/add-new-placard"
        className="flex flex-row gap-2 bg-[#4866CE] text-white p-2 rounded-[4px] w-[120px]"
      >
        <span>اعلان جدید</span>
        <Image src={add} alt="add" />
      </Link>
      <div className="bg-white shadow mx-auto rounded-2xl py-[3%] px-[3%] w-full">
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
              <div
                key={item.id}
                className="grid grid-cols-5 text-center py-1 bg-[#EAEFF6] rounded-[4px]"
              >
                <p>{index + 1}</p>
                <p>{item.title}</p>
                <div>
                  {item.status_id === 2 || isClosed ? (
                    <p>
                      بسته{" "}
                      <span className="text-emerald-600 font-semibold">
                        شده
                      </span>
                    </p>
                  ) : (
                    <p>
                      بسته{" "}
                      <span className="text-red-400 font-semibold">نشده</span>
                    </p>
                  )}
                </div>
                <p>
                  {item.updated_at
                    ? moment(
                        item.updated_at,
                        "YYYY-MM-DDTHH:mm:ss.SSSZ"
                      ).format("jYYYY/jM/jD")
                    : "-"}
                </p>
                <div>
                  <div className="flex flex-row justify-center gap-2">
                    <Link
                      href={`/panel/admin/support/ticket-detail?id=${item.id}`}
                    >
                      <Image src={vieweye} alt="مشاهده" width={20} />
                    </Link>
                    {item.status_id !== 2 && !isClosed && (
                      <div
                        onClick={() =>
                          closeTicket(
                            token,
                            2,
                            item.id,
                            setAllTickets,
                            setIsClosed
                          )
                        }
                        className="cursor-pointer"
                      >
                        <Image src={checkmark} alt="بستن" width={20} />
                      </div>
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
  );
};

export default Support;
