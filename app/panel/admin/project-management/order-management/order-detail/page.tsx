"use client";
//  ^ ADMIN PANEL SINGLE ORDER DETAILS PAGE ===================================================================================================================================
import SubmitOrderDropdown from "@/app/panel/user/submit-order/components/submit-order-dropdown";
import { changeOrderStatus, getAllOrderStatuses, getOrderDetail, } from "@/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../../../components/BackButton";


// ^ COMPONENT --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function OrderDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const [orderDetail, setOrderDetail] = useState<any>([]);
  const params = useSearchParams();
  const orderId = params.get("id");
  const [orderStatuses, setOrderStatuses] = useState<any>([]);
  const [orderStatusInput, setOrderStatusInput] = useState("");
  const router = useRouter()

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
    setTimeout(() => { location.reload() }, 1000);
  };

  return (
    <section >
      <BackButton />
      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] mt-2">
        {/*//^ PROJECT DETAILS */}
        <div className="flex items-center  justify-around flex-wrap">

          <label className="form-control w-full max-w-xs my-5">
            <div className="label">
              <span className="label-text">عنوان سفارش</span>
            </div>
            <span className="input input-bordered w-full max-w-xs flex items-center ">
              {orderDetail?.project?.title}
            </span>
          </label>

          <label className="form-control w-full max-w-xs my-5">
            <div className="label">
              <span className="label-text">مبلغ سفارش</span>
            </div>
            <span className="input input-bordered w-full max-w-xs flex items-center ">
              {orderDetail?.price}
            </span>
          </label>

          <label className="form-control w-full max-w-xs my-5">
            <div className="label">
              <span className="label-text">اولویت سفارش</span>
            </div>
            <span className="input input-bordered w-full max-w-xs flex items-center ">
              {orderDetail?.project?.priority == "high" ? "زیاد" : "کم"}
            </span>
          </label>

          <label className="form-control w-full max-w-xs my-5">
            <div className="label">
              <span className="label-text">نوع سفارش</span>
            </div>
            <span className="input input-bordered w-full max-w-xs flex items-center ">
              {orderDetail?.project?.plan_id == "1" ? "پایه فروشکاهی" :
                orderDetail?.project?.plan_id == "2" ? "حرفه ای  فروشکاهی" :
                  orderDetail?.project?.plan_id == "3" ? "ویژه فروشکاهی" :
                    orderDetail?.project?.plan_id == "4" ? "الیت  فروشکاهی" :
                      orderDetail?.project?.plan_id == "5" ? "پایه شرکتی" :
                        orderDetail?.project?.plan_id == "6" ? "حرفه ای شرکتی" :
                          orderDetail?.project?.plan_id == "7" ? "ویژه شرکتی" :
                            orderDetail?.project?.plan_id == "8" ? "الیت شرکتی" :
                              orderDetail?.project?.plan_id == "9" ? "پایه گردشگری" :
                                orderDetail?.project?.plan_id == "10" ? "حرفه ای گردشگری" :
                                  orderDetail?.project?.plan_id == "11" ? "ویژه گردشگری" :
                                    orderDetail?.project?.plan_id == "12" ? "الیت گردشگری" :
                                      orderDetail?.project?.plan_id == "13" ? "پایه پزشکی" :
                                        orderDetail?.project?.plan_id == "14" ? "حرفه ای پزشکی" :
                                          orderDetail?.project?.plan_id == "15" ? "ویژه فروشکاهی" :
                                            orderDetail?.project?.plan_id == "16" ? "الیت فروشکاهی" : " ثبت نشده"
              }
            </span>
          </label>

          <label className="form-control w-full max-w-xs my-5">
            <div className="label">
              <span className="label-text">توضیحات سفارش</span>
            </div>
            <span className="input input-bordered w-full max-w-xs flex items-center ">
              {orderDetail?.project?.description}
            </span>
          </label>

          <label className="form-control w-full max-w-xs my-5">
            <div className="label">
              <span className="label-text">مرحله سفارش</span>
            </div>
            <span className="input input-bordered w-full max-w-xs flex items-center ">
              {orderDetail?.status?.title}
            </span>
          </label>

          <label className="form-control w-full max-w-xs my-5">
            <div className="label">
              <span className="label-text">نام سفارش دهنده </span>
            </div>
            <span className="input input-bordered w-full max-w-xs flex items-center ">
              {orderDetail?.user?.name}  {orderDetail?.user?.surname}
            </span>
          </label>

          <label className="form-control w-full max-w-xs my-5">
            <div className="label">
              <span className="label-text">وضعیت سفارش </span>
            </div>
            <span className="input input-bordered w-full max-w-xs flex items-center ">
              {orderDetail?.project?.status}
            </span>
          </label>


        </div>












        {/* //? STATUS CHANGE */}
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
