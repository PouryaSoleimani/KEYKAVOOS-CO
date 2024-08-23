"use client";
import { getOrderDetail, sendAmount } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirstPayment from "./first-payment";
import SecondPayment from "./second-payment";
import ThirdPayment from "./third-payment";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "@/app/panel/admin/components/NotFound";

function OrderPayment() {
  const { token } = useSelector((state: any) => state.userData);
  const [orderDetail, setOrderDetail] = useState<any>([]);
  const params = useSearchParams();
  const orderId = params.get("id");
  const [File, setFile] = useState<any>(null);

  const [fileSelected, setFileSelected] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [orderDetailStatus, seOrderDetailStatus] = useState({
    loading: false,
    error: "",
  });
  const handleChangingFile = (file: File) => {
    setFile(file);
    setFileSelected(true);
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleChangingFile(file);
    }
  };

  useEffect(() => {
    getOrderDetail(token, Number(orderId), setOrderDetail, seOrderDetailStatus);
  }, []);

  // console.log(orderDetail);
  const firstOrderPayment = orderDetail.payments?.[0];
  const secondOrderPayment = orderDetail.payments?.[1];
  const thirdOrderPayment = orderDetail.payments?.[2];
  const totalPaid =
    Number(firstOrderPayment?.amount) + Number(secondOrderPayment?.amount);

  // const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   await sendAmount(
  //     token,
  //     firstOrderPayment.amount,
  //     firstOrderPayment.id,
  //     setUrl
  //   );
  // };

  return (
    <div className="bg-white shadow mx-auto rounded-2xl py-[3%] px-[3%] grid grid-cols-1 gap-5">
      {orderDetailStatus.loading ? (
        <SkeletonTheme>
          <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
        </SkeletonTheme>
      ) : orderDetailStatus.error ? (
        <NotFound text={`${orderDetailStatus.error}`} />
      ) : (
        <div>
          <div className="flex flex-row gap-3 bg-[#4866CE] text-white w-[200px] px-2 py-2 justify-center items-center font-semibold">
            <p>شماره سفارش:</p>
            <span>{orderId}</span>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <FirstPayment firstOrderPayment={firstOrderPayment} token={token} />
            <SecondPayment
              paidAmount={firstOrderPayment?.amount}
              handleFileChange={handleFileChange}
              secondOrderPayment={secondOrderPayment}
              File={File}
              token={token}
            />
            <ThirdPayment
              thirdOrderPayment={thirdOrderPayment}
              totalPaid={totalPaid}
              handleFileChange={handleFileChange}
              File={File}
              token={token}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPayment;
