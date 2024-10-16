"use client";
import app from "@/services/service";
import { getPermissionDetail, getPositionDetail, getRoleDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../../../components/BackButton";

function PositionDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const ID = params.get("id");
  const [positionDetail, setpositionDetail] = useState({ title_en: "", title_fa: "", });



  // useEffect(() => { getPositionDetail(token, id, setpositionDetail); }, []);

  function getSinglePositionDetail(ID: string) {
    app.get(`/position/show/${Number(ID)}`)
      .then((response: any) => { console.log("DATA DATA ===>", response.data); setpositionDetail(response.data.data) })
      .catch((error: any) => { console.log("DATA ERROR ====>", error.response); })
  }
  useEffect(() => {
    console.log("ID =====>", ID);
    getSinglePositionDetail(ID as string)
  }, [])

  return (
    <>
      <div className="w-full py-2 items-center justify-end">
        <BackButton />
      </div>
      
      <div className="bg-white shadow mx-auto rounded-lg w-full p-3 text-center space-y-4">
        <div className="grid grid-cols-2">
          <div>نام به فارسی</div>
          <div>نام به انگلیسی</div>
        </div>

        <div className="grid grid-cols-2 py-3 bg-[#EAEFF6] rounded-[4px] cursor-pointer">
          <p>{positionDetail.title_fa}</p>
          <p>{positionDetail.title_en}</p>
        </div>
      </div>
    </>
  );
}

export default PositionDetail;
