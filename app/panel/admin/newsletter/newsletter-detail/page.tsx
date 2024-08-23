"use client";
import { getNewsLetterDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function NewsletterDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const [newsletterDetail, setNewsletterDetail] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    getNewsLetterDetail(token, id, setNewsletterDetail);
  }, []);
  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center">
      <div className="grid grid-cols-2">
        <div>عنوان خبرنامه</div>
        <div>متن خبرنامه</div>
      </div>

      <div className="grid grid-cols-2 py-1 bg-[#EAEFF6] rounded-[4px] cursor-pointer">
        <p>{newsletterDetail.title}</p>
        <p>{newsletterDetail.description}</p>
      </div>
    </div>
  );
}

export default NewsletterDetail;
