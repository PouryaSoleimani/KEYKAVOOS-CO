"use client";
//  ^ ADMIN PANEL SINGLE ORDER DETAILS PAGE ===================================================================================================================================
import SubmitOrderDropdown from "@/app/panel/user/submit-order/components/submit-order-dropdown";
import {
  changeOrderStatus,
  getAllOrderStatuses,
  getOrderDetail,
} from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../../../components/BackButton";

function OrderDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const [orderDetail, setOrderDetail] = useState([]);
  const params = useSearchParams();
  const orderId = params.get("id");
  const [orderStatuses, setOrderStatuses] = useState<any>([]);
  const [orderStatusInput, setOrderStatusInput] = useState("");

  useEffect(() => {
    Promise.all([
      getOrderDetail(token, Number(orderId), setOrderDetail),
      getAllOrderStatuses(token, Number(orderId), setOrderStatuses),
    ]);
  }, []);

  useEffect(() => {
    if (orderStatuses.length > 0) {
      const firstItemId = orderStatuses.filter(
        (item: { title: string }) => item.title === orderStatusDropdownItems[0]
      )[0]?.id;
      setOrderStatusInput(firstItemId);
    }
  }, [orderStatuses]);

  const orderStatusDropdownItems = orderStatuses.map(
    (item: { title: string }) => item.title
  );

  const orderStatusId = orderStatuses.filter(
    (item: { title: string }) => item.title === orderStatusInput
  )[0]?.id;

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await changeOrderStatus(token, Number(orderId), Number(orderStatusId));
  };

  return (
    <section >
      <BackButton />
      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] mt-2">
        <form onSubmit={(e) => handleSubmission(e)} className="grid grid-cols-1 gap-5" >
          <p>تغییر وضعیت سفارش</p>
          <SubmitOrderDropdown dropDownTitle="" dropdownItems={orderStatusDropdownItems} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOrderStatusInput(e.target.value)} value={orderStatusInput} name="order-status" />
          <div className="flex justify-end">
            <button className="bg-[#4866CE] text-white rounded-lg px-5 py-3 hover:bg-blue-800 duration-500">
              تایید
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default OrderDetail;
