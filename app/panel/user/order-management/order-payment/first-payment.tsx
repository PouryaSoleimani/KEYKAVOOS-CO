/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FinanceInput from "../../finance/components/finance-input";
import { getOrderDetail, handleBudegtChange, sendAmount } from "@/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";

//^ COMPONENT ===========================================================================================================================
function FirstPayment({ firstOrderPayment, token, }: { firstOrderPayment: { final_price: number; debt: number; amount: number; id: number; }; token: string; }) {

  const params = useSearchParams();
  const orderId = params.get("id");
  const [orderDetail, setOrderDetail] = useState<any>([]);
  const [orderDetailStatus, seOrderDetailStatus] = useState({ loading: false, error: "", });
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendAmount(token, 100000000, firstOrderPayment?.id, setUrl);
    router.replace(url);
  };
  useEffect(() => { getOrderDetail(token, Number(orderId), setOrderDetail, seOrderDetailStatus); }, []);

  return (
    <form onSubmit={(e) => handleSubmission(e)} className="grid grid-cols-1 gap-5" >
      <div>
        <p className="font-semibold tracking-tight my-6 border-b-2 border-[#4866CE] text-[18px] max-w-[15rem]">
          اطلاعات قسط اول :
        </p>
        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-2 gap-5">
            {/* value={`${handleBudegtChange(String(firstOrderPayment?.final_price))} ریال`} */}
            <FinanceInput label="مبلغ کل پروژه : " disable={true} value={orderDetail ? ` ${Math.round(Number(orderDetail?.price)).toLocaleString()} ریال ` : "---"} />
            <FinanceInput label="مبلغ باقی مانده : " disable={true} value={firstOrderPayment ? `${firstOrderPayment.debt} ریال` : "---"} />
            <FinanceInput label="مبلغ پرداخت شده : " disable={true} value={`---`} />
            <FinanceInput label="مبلغ این قسط : " value={`${Math.round(Number(firstOrderPayment?.amount)).toLocaleString()} ریال `} setToBlue={true} />
          </div>
        </div>  
      </div>
      <div className="w-full flex justify-end">
        <button type="submit" className="bg-[#4866CE] text-white py-3 px-5 tracking-tight rounded-[6px] text-lg hover:bg-blue-800 duration-300">
          پرداخت قسط اول
        </button>
      </div>
    </form>
  );
}

export default FirstPayment;
