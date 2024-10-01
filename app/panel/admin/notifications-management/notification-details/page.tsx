/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FileUpload from "@/app/panel/user/submit-order/components/file-upload";
import { confirmProjectByAdmin, getProjectDetail, getUserNotification, rejectProject, } from "@/utils/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";
import BackButton from "../../components/BackButton";

export type NotificationDetailType = {
    id: string | number,
    dept: { id: number, title: string, description: string, } | null
    text: string,
    brand: { id: number, title: string, description: string, } | null,
    user: { id: number, name: string, surname: string, mobile: string, type: "haghighi" | "hoghooghi", email: string | null }
    created_at: string,
    read_at: string,
    updated_at: string
}[];

function NotificationDetail() {
    const [rejection, setRejection] = useState({ isRejected: false, rejection_reason: "", });
    const params = useSearchParams();
    const ID = params.get("id")?.toString() as number | string;
    const { token, userProfile } = useSelector((state: any) => state.userData);
    const [userNotification, setUserNotification] = useState({} as any);
    const [notificationDetailStatus, setNotificationDetailStatus] = useState({ loading: false, error: "", });
    const moment = require("moment-jalaali");

    useEffect(() => { getUserNotification(token, ID, setUserNotification, setNotificationDetailStatus); }, []);


    return (
        <div>
            <div className="w-fit z-10 whitespace-nowrap">
                <div className="bg-[#4866CE] text-white rounded-t-lg relative right-1 top-1 py-2 px-2 flex justify-start items-center gap-2">
                    <span>شماره اعلان:</span>
                    <p className="font-faNum">{ID}</p>
                </div>
            </div>
            <div className="py-[3%] w-full shadow mx-auto bg-white rounded-lg px-[3%] grid grid-cols-1 gap-5 relative">

                <div className="flex justify-end text-xl cursor-pointer absolute -top-16 left-0 items-center">
                    <BackButton />
                </div>

                <div className="grid grid-cols-1 gap-5">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <p className="tracking-tighter font-semibold">متن اعلان : </p>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    {userNotification?.text ? userNotification?.text : ". . ."}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="tracking-tighter font-semibold">نام کاربر : </label>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    {userNotification?.user?.name ? `${userNotification?.user?.name} ${userNotification?.user?.surname}` : ". . ."}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="tracking-tighter font-semibold"> برند  / سازمان : </label>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    {userNotification?.brand?.title ? userNotification?.brand?.title : userNotification?.dept?.title ? userNotification?.dept.title : ". . ."}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="tracking-tighter font-semibold">   تاریخ ارسال اعلان  : </label>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    <p>{userNotification?.created_at ? moment(userNotification?.created_at, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD") : " . . ."}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="tracking-tighter font-semibold">   تاریخ خوانده شدن  اعلان  : </label>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    <p>{userNotification?.read_at ? moment(userNotification?.read_at, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD") : ". . ."}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="tracking-tighter font-semibold">   تاریخ بروزرسانی  اعلان  : </label>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    <p>{userNotification?.updated_at ? moment(userNotification?.updated_at, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD") : ". . ."}</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NotificationDetail;
