/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from "react";
import FinanceInput from "../../finance/components/finance-input";
import Image from "next/image";
import { getOrderDetail, handleBudegtChange, handlePaymentFileUpload } from "@/utils/utils";
import uploadfile from "@/public/Panel/uploadfile.svg";
import { useSearchParams } from "next/navigation";
import 'animate.css';
import { useSelector } from "react-redux";

// ^ COMPONENT ==========================================================================================================================================
function SecondPayment({ secondOrderPayment, paidAmount, handleFileChange, File, token, }: {
  secondOrderPayment: { final_price: number; debt: number; amount: number; id: number; };
  paidAmount: number;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  File: any;
  token: string;
}) {
  const { userProfile } = useSelector((state: any) => state.userData);
  const [isFileUploaded, setIsFileUploaded] = useState(false)
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); await handlePaymentFileUpload(File, token, secondOrderPayment.id, userProfile.id, isFileUploaded, setIsFileUploaded); };
  const params = useSearchParams();
  const orderId = params.get("id");
  const [orderDetail, setOrderDetail] = useState<any>([]);
  const [orderDetailStatus, seOrderDetailStatus] = useState({ loading: false, error: "", });
  useEffect(() => { getOrderDetail(token, Number(orderId), setOrderDetail, seOrderDetailStatus); }, []);

  return (
    <form onSubmit={(e) => handleSubmission(e)}>
      {/* اطلاعات قسط دوم */}
      <div className="grid grid-cols-1 gap-5">
        <p className="font-semibold my-4 border-b-2 border-[#4866CE] text-[18px] max-w-[15rem] tracking-tight">
          اطلاعات قسط دوم :
        </p>
        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-5">
            <FinanceInput label="مبلغ کل پروژه : " disable={true} value={orderDetail ? ` ${orderDetail?.price?.toLocaleString()}  ریال ` : "---"} />
            <FinanceInput label="مبلغ باقی مانده : " disable={true} value={secondOrderPayment ? `${handleBudegtChange(String(secondOrderPayment?.debt))} ریال` : "---"} />
            <FinanceInput label="مبلغ پرداخت شده : " disable={true} value={paidAmount ? `${handleBudegtChange(String(paidAmount))}` : "---"} />
            <FinanceInput label="مبلغ پرداختی شما : " value={secondOrderPayment ? `${handleBudegtChange(String(secondOrderPayment?.amount))} ریال` : "---"} setToBlue={true} />
            {/* FILE UPLOAD */}
            <div className="flex lg:flex-row flex-col gap-5">
              <p className="my-2 font-sm tracking-tight"> لطفا فایل چک قسط دوم را آپلود کنید : </p>
              <div className="flex text-black border-[#4866cf] bg-[#EAEFF6] border-2 rounded-[8px] items-center justify-between py-2 w-full px-2">
                <div>
                  <input id="fileInput" type="file" multiple style={{ display: "none" }} onChange={handleFileChange} />
                  <label htmlFor="fileInput" className="cursor-pointer hover:bg-[#4866cf] hover:text-white p-2 rounded-md duration-500 tracking-tight">انتخاب فایل</label>
                </div>
                <div className="flex flex-col items-center justify-end space-y-2">
                  <label htmlFor="fileInput" style={{ cursor: "pointer" }} className="flex justify-center items-center whitespace-nowrap"  >
                    {File ? (File.name) : isFileUploaded == true ? " آپلود مجدد" : (<Image src="/Panel/uploadfile.svg" alt="انتخاب فایل" className="w-5 h-5 hover:scale-125 duration-300" width={15} height={15} />)}
                  </label>
                  <span dir="rtl" className="text-[#4f647e] text-[.6rem] sm:text-[.8rem] tracking-tighter">
                    فرمت های مورد قبول:  <b>  zip, rar  </b>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center">
              <button className="bg-[#4866CE] text-white p-3 w-[30%] tracking-tight rounded-[6px] text-lg hover:bg-blue-800 duration-300">
                تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SecondPayment;
