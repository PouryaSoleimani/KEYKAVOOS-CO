"use client";
// ^ NOTIFICATIONS-MANAGEMENT PAGE =================================================================================================================================
import Image from "next/image";
import React, { useEffect, useState } from "react";
import add from "/public/Panel/addticket.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchUserProfile, getIdFromLocal, getTokenFromLocal, } from "@/redux/features/user/userSlice";
import checkmark from "/public/Panel/checkmark.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import vieweye from "/public/ViewUsers/vieweye.svg";
import NotFound from "../components/NotFound";
import { closeTicket, getAllNotifications } from "@/utils/utils";
import app from "@/services/service";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
const moment = require("moment-jalaali");

const NotificationManagement = () => {

    const { token } = useSelector((state: any) => state.userData);
    const [allNotifs, setAllNotifs] = useState([]);
    const [allTicketsStatus, setAllTicketsStatus] = useState({ error: "", loading: false, });
    const [isClosed, setIsClosed] = useState(false);
    const [allTickets, setAllTickets] = useState([])

    const GETALLNOTIFICATIONS = () => {
        app.get('/notifications')
            .then((response: any) => { console.log("NOTIFS ====>", response.data.data); setAllNotifs(response.data.data) })
            .catch((error: any) => { console.log(error.response); })
    }

    useEffect(() => { GETALLNOTIFICATIONS() }, [])

    const router = useRouter()
    const CLOSENOTIFICATION = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, NOTIF_ID: number | string) => {
        event.preventDefault()
        console.log("CLOSE TICKET =================>");
        app.post('/notification/change_status', { notif_id: NOTIF_ID })
            .then(response => {
                console.log(response);
                setIsClosed(true);
                toast.success('اعلان با موفقیت خوانده شد', { position: "top-right", autoClose: 2000, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, })
                router.refresh
                GETALLNOTIFICATIONS()
            })
            .catch((error: any) => {
                toast.error("خطا در خواندن اعلان", { position: "top-right", autoClose: 2000, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
                console.log(error.response);
            })
            .finally(router.refresh)
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="py-3">
                <h1 className="text-2xl font-bold text-[#4866cf] pr-2">مدیریت اعلان ها</h1>
            </div>
            <Link href="/panel/admin/notifications-management/add-new-placard" className="flex flex-row gap-2 bg-[#4866CE] text-white p-3 rounded-[4px] w-[145px] hover:bg-blue-800 duration-300 items-center justify-between"  >
                <span>اعلان جدید</span>
                <Image src="/Panel/addticket.svg" width={20} height={20} alt="add" />
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
                            <div key={item.id} className={`grid grid-cols-7 text-center py-4 bg-[#EAEFF6] rounded-[4px] ${item.read_at && "bg-green-800/80 text-white"}`}  >
                                <p>{index + 1}</p>
                                <p>{item.user.name} {item.user.surname}</p>
                                <p>{item.brand?.title ? item.brand.title : "---"} </p>
                                <p className="tracking-tighter font-extralight text-zinc-700">{item.text.slice(0, 10)} ... </p>
                                <div>
                                    {item.status_id === 2 || item.read_at ? (
                                        <p> بسته{" "} <span className="text-emerald-100 font-semibold">شده </span> </p>
                                    ) : (
                                        <p> بسته{" "}<span className="text-red-400 font-semibold">نشده </span></p>
                                    )}
                                </div>
                                <p>
                                    {item.updated_at ? moment(item.updated_at, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD") : "-"}
                                </p>
                                <div>
                                    <div className={`flex flex-row justify-center gap-4`}>
                                        <Link href={`/panel/admin/notifications-management/notification-details?id=${item.id}`} className="hover:scale-125 duration-300">
                                            <Image src="/ViewUsers/vieweye.svg" alt="مشاهده" width={20} height={20} />
                                        </Link>
                                        {item.status_id !== 2 && !item.read_at && (
                                            <div
                                                onClick={(event) => CLOSENOTIFICATION(event, item.id)}
                                                // onClick={() => closeTicket(2, item.id, setAllTickets, setIsClosed)}
                                                className={`cursor-pointer hover:scale-125 duration-300 `}>
                                                <Image src="/Panel/checkmark.svg" alt="بستن" width={20} />
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
