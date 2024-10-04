/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { getOrders } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";
import Link from "next/link";
import Image from "next/image";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import BackButton from "../../components/BackButton";

//^ COMPONENT ============================================================================================================================= 
function OrderManagement() {
  const { token } = useSelector((state: any) => state.userData);
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState({ loading: false, error: "", });

  useEffect(() => { getOrders(token, setOrders, setOrderStatus); }, []);

  return (
    <>
      <div className="py-3">
        <h1 className="text-2xl font-bold text-[#4866cf] pr-2">مدیریت سفارش ها</h1>
      </div>

      <div className="flex flex-col gap-5 bg-white shadow mx-auto rounded-lg w-full p-[3%]">
        <div className="grid grid-cols-6 text-center">
          <p>ردیف</p>
          <p>شماره درخواست</p>
          <p>عنوان سفارش</p>
          <p>مبلغ سفارش</p>
          <p>وضعیت سفارش</p>
          <p>عملیات</p>
        </div>
        {orderStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : orderStatus.error ? (
          <NotFound text={`${orderStatus.error}`} />
        ) : (
          orders?.map((item: any, index) => (
            <div key={item.id} className={`grid grid-cols-6 text-center py-4 rounded-[4px] bg-[#EAEFF6] text-black`}  >
              <p className="font-faNum">{index + 1}</p>
              <p className="font-faNum">{item?.id}</p>
              <p>{item.project?.title}</p>
              <p className="font-faNum">
                {Number(item.project?.final_price).toLocaleString()}
              </p>
              <p>{item.status?.title ? item.status?.title : "نامعلوم"}</p>
              <div className="flex flex-row gap-5 justify-center items-center">
                <Link href={`/panel/admin/project-management/order-management/order-detail?id=${item?.id}`} className="flex justify-center hover:scale-125 duration-300" >
                  <Image src={vieweye} alt="مشاهده" width={25} height={25} />
                </Link>
                {/* <Link href={`panel/admin/project-management/order-management`} className="hover:scale-125 duration-300">
                  <MdOutlinePayment className="text-2xl text-green-800 font-semibold" />
                </Link> */}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default OrderManagement;
