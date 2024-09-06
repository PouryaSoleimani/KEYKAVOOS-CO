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
import NotFound from "../components/NotFound";
import { getAllNotifications } from "@/utils/utils";
const moment = require("moment-jalaali");

const NotificationManagement = () => {

    const { token } = useSelector((state: any) => state.userData);
    const [allNotifs, setAllNotifs] = useState([]);
    const [allTicketsStatus, setAllTicketsStatus] = useState({ error: "", loading: false, });
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => { getAllNotifications(token, setAllNotifs) }, []);


    return (
        <div className="flex flex-col gap-3">

            <Link href="/panel/admin/notifications-management/add-new-placard/new-placard" className="flex flex-row gap-2 bg-[#4866CE] text-white p-3 rounded-[4px] w-[125px] hover:bg-blue-800 duration-300"  >
                <span>اعلان جدید</span>
                <Image src={add} alt="add" />
            </Link>
            <div className="bg-white shadow mx-auto rounded-lg py-[3%] px-[3%] w-full">
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-7 text-center">
                        <p>شماره</p>
                        <p>نام کاربر</p>
                        <p>برند / سازمان </p>
                        <p>متن اعلان</p>
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
                    ) : allNotifs.length !== 0 ? (
                        allNotifs?.map((item: any, index) => (
                            <div key={item.id} className="grid grid-cols-7 text-center py-4 bg-[#EAEFF6] rounded-[4px]"  >
                                <p>{index + 1}</p>
                                <p>{item.user.name} {item.user.surname}</p>
                                <p>{item.brand?.title ? item.brand.title : "---"} </p>
                                <p className="tracking-tighter font-extralight text-zinc-700">{item.text.slice(0, 10)} ... </p>
                                <div>
                                    {item.status_id === 2 || isClosed ? (
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
                                        <Link href={`/panel/admin/notifications-management/notification-details?id=${item.id}`} className="hover:scale-125 duration-300">
                                            <Image src={vieweye} alt="مشاهده" width={20} />
                                        </Link>
                                        {item.status_id !== 2 && !isClosed && (
                                            <div
                                                // onClick={() => closeTicket(token, 2, item.id, setAllTickets, setIsClosed)}
                                                className="cursor-pointer hover:scale-125 duration-300">
                                                <Image src={checkmark} alt="بستن" width={20}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <NotFound text="اعلانی یافت نشد" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationManagement;
