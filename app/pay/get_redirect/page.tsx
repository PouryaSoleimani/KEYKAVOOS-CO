"use client";
import Loading from "@/app/loading";
import {
  fetchUserProfile,
  getIdFromLocal,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import app from "@/services/service";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function WebService() {
  const dispatch = useDispatch();
  const { localToken } = useSelector((state: any) => state.userData);
  useEffect(() => {
    dispatch(getTokenFromLocal());
    dispatch(getIdFromLocal());
    dispatch<any>(fetchUserProfile());
  }, []);
  const params = useSearchParams();
  const [transId, setTransId] = useState<string | null>("");
  const [idGet, setIdGet] = useState<string | null>("");
  const [factorId, setFactorId] = useState<string | null>("");
  const [payMessage, setPayMessage] = useState("");
  const [error, setError] = useState<boolean | null>();

  const getPayRedirect = async (
    transId: string | null,
    idGet: string | null,
    factorId: string | null
  ) => {
    try {
      const { data } = await app.get(
        `/pay/get?trans_id=${Number(transId)}&id_get=${Number(idGet)}&factorId=${Number(factorId)}`,
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      );
      setPayMessage("عملیات موفق بود");
      setError(true);
      console.log(data);
    } catch (error) {
      setPayMessage("خطا در اجرای عملیات");
      setError(false);
      console.log(error);
    }
  };
  useEffect(() => {
    const trans_id = params.get("trans_id");
    setTransId(trans_id);
    const id_get = params.get("id_get");
    setIdGet(id_get);
    const factor_id = params.get("factorId");
    setFactorId(factor_id);
    // if (localToken) {
      getPayRedirect(transId, idGet, factorId);
    // }
  }, []);
  return (
    <div>
      {/* {payMessage ? ( */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[200px] flex items-center justify-center flex-col rounded-2xl gap-3 ${
            error ? "bg-emerald-500" : "bg-red-700"
          }`}
        >
          <div
            dir="rtl"
            className="flex justify-center items-center text-white text-2xl"
          >

            hi
            {/* {payMessage} */}
          </div>
          <Link
            href="/"
            className={`flex justify-center items-center text-white p-2 rounded-lg ${
              error ? "bg-indigo-500" : "bg-teal-600"
            }`}
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      {/* ) : (
        <Loading />
      )} */}
    </div>
  );
}

export default WebService;
