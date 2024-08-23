import React, { ChangeEvent } from "react";
import FinanceInput from "../../finance/components/finance-input";
import Image from "next/image";
import { handleBudegtChange, handlePaymentFileUpload } from "@/utils/utils";
import uploadfile from "@/public/Panel/uploadfile.svg";

function ThirdPayment({
  thirdOrderPayment,
  handleFileChange,
  totalPaid,
  File,
  token,
}: {
  thirdOrderPayment: {
    final_price: number;
    debt: number;
    amount: number;
    id: number;
  };
  totalPaid: number;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  File: any;
  token: string;
}) {
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handlePaymentFileUpload(File, token, thirdOrderPayment.id);
  };
  return (
    <form onSubmit={(e) => handleSubmission(e)}>
      {/* اطلاعات قسط سوم */}
      <div className="grid grid-cols-1 gap-5">
        <p className="font-semibold my-4 border-b-2 border-[#4866CE] text-[18px] max-w-[15rem]">
          اطلاعات قسط سوم:
        </p>
        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-5">
            <FinanceInput
              label="مبلغ کل پروژه:"
              disable={true}
              value={`${handleBudegtChange(
                String(thirdOrderPayment?.final_price)
              )} ریال`}
            />
            <FinanceInput
              label="مبلغ باقی مانده:"
              disable={true}
              value={`${handleBudegtChange(
                String(thirdOrderPayment?.debt)
              )} ریال`}
            />
            <FinanceInput
              label="مبلغ پرداخت شده:"
              disable={true}
              value={`${totalPaid}`}
            />
            <FinanceInput
              label="مبلغ پرداختی شما:"
              value={`${handleBudegtChange(
                String(thirdOrderPayment?.amount)
              )} ریال`}
              setToBlue={true}
            />
            <div className="flex lg:flex-row flex-col gap-5">
              {/* فایل آپلود */}
              <p className="my-2 font-medium">
                لطفا فایل چک قسط سوم را آپلود کنید:
              </p>
              <div className="flex flex-col bg-white border-[#D0DBEC] border-2 rounded-[8px] items-center justify-center w-full">
                <div className="flex flex-col items-center gap-[5%] whitespace-nowrap">
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <label className="text-[#68707A]">انتخاب فایل</label>
                  <label
                    htmlFor="fileInput"
                    style={{ cursor: "pointer" }}
                    className="flex flex-col items-center"
                  >
                    {File ? (
                      File.name
                    ) : (
                      <Image src={uploadfile} alt="انتخاب فایل" />
                    )}
                  </label>
                  <span dir="rtl" className="text-[#4f647e] text-[0.5rem]">
                    فرمت های مورد قبول: zip, rar
                  </span>
                </div>
              </div>
            </div>
            {/* آپلود فایل */}
            <div className="flex justify-end items-center">
              <button className="bg-[#4866CE] text-white p-2 rounded-[4px] w-[40%]">
                تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ThirdPayment;
