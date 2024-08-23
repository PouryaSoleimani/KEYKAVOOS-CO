"use client";
import { getOrders } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";
import Link from "next/link";
import Image from "next/image";
import vieweye from "@/public/ViewUsers/vieweye.svg";

function OrderManagement() {
  const { token } = useSelector((state: any) => state.userData);
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState({
    loading: false,
    error: "",
  });

  useEffect(() => {
    getOrders(token, setOrders, setOrderStatus);
  }, []);
  return (
    <div className="flex flex-col gap-5 bg-white shadow mx-auto rounded-2xl w-full p-[3%]">
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
          <div
            key={item.id}
            className={`grid grid-cols-6 text-center py-1 rounded-[4px] bg-[#EAEFF6] text-black`}
          >
            <p className="font-faNum">{index + 1}</p>
            <p className="font-faNum">{item?.id}</p>
            <p>{item.project?.title}</p>
            <p className="font-faNum">
              {Number(item.project?.final_price).toLocaleString()}
            </p>
            <p>{item.status?.title ? item.status?.title :"نامعلوم"}</p>
            <Link
              href={`/panel/admin/project-management/order-management/order-detail?id=${item?.id}`}
              className="flex justify-center"
            >
              <Image src={vieweye} alt="مشاهده" width={20} height={20} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderManagement;
