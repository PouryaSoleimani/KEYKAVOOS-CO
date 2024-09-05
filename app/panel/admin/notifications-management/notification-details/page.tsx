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

export type NotificationDetailType = {
    id: string
    dept: { id: number, title: string, description: string, } | null
    text: string,
    brand: { id: number, title: string, description: string, } | null,
    user: { id: number, name: string, surname: string, mobile: string, type: "haghighi" | "hoghooghi", email: string | null }
}[];

function NotificationDetail() {
    const [rejection, setRejection] = useState({ isRejected: false, rejection_reason: "", });
    const params = useSearchParams();
    const id = params.get("id") as number | string;
    const { token, userProfile } = useSelector((state: any) => state.userData);
    const [userNotification, setUserNotification] = useState<NotificationDetailType>();
    const [notificationDetailStatus, setNotificationDetailStatus] = useState({ loading: false, error: "", });

    useEffect(() => { getUserNotification(token, id, setUserNotification, setNotificationDetailStatus); }, []);
    useEffect(() => { console.log("USER NOTIF =====>", userNotification); }, [userNotification])
    return (
        <div>
            <div className="w-fit z-10 whitespace-nowrap">
                <div className="bg-[#4866CE] text-white rounded-t-lg relative right-1 top-1 py-2 px-2 flex justify-start items-center gap-2">
                    <span>شماره اعلان:</span>
                    <p className="font-faNum">{id}</p>
                </div>
            </div>
            <div className="py-[3%] w-full shadow mx-auto bg-white rounded-lg px-[3%] grid grid-cols-1 gap-5 relative">

                <div className="flex justify-end text-xl cursor-pointer absolute -top-12 left-0">
                    <Link href="/panel/admin/project-management" className="bg-white rounded-lg p-3 hover:bg-[#4866CF] hover:text-white duration-300"   >
                        <IoArrowBack />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-5">

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <p className="tracking-tight">عنوان اعلان : </p>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    {userNotification?.[0].text ? userNotification?.[0].text : "---"}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="tracking-tight">نام کاربر : </label>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    {userNotification?.[0]?.user?.name ? `${userNotification?.[0].user?.name} ${userNotification?.[0].user?.surname}` : "---"}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="tracking-tight"> برند  / سازمان : </label>
                            {notificationDetailStatus.loading ? (
                                <SkeletonTheme>
                                    <Skeleton count={1} className="p-4" baseColor="#EAEFF6" />
                                </SkeletonTheme>
                            ) : (
                                <div className="bg-[#EAEFF6] p-4 rounded-[4px]">
                                    {userNotification?.[0].brand?.title ? userNotification?.[0].brand?.title : userNotification?.[0].dept?.title ? userNotification?.[0].dept.title : "---"}
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
