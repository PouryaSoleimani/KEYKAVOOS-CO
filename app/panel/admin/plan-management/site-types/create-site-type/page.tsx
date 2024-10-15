"use client";
import { CreateNewSiteType } from "@/utils/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../../../../../../components/ADMIN__PANEL__COMPONENTS/BackButton";

function CreateSiteType() {
  const router = useRouter()
  const { token } = useSelector((state: any) => state.userData);
  const [createSiteType, setCreateSiteType] = useState({ title: "", description: "", });
  // HANDLE SUBMISSION
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await CreateNewSiteType(token, createSiteType.title, createSiteType.description);
    setCreateSiteType({ title: "", description: "" });
    router.back()
  };


  return (
    <>
      <div className="w-full items-center justify-end py-1">
        <BackButton />
      </div>
      <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] space-y-3 flex flex-col gap-5">
        <p>ایجاد طراحی جدید</p>
        <form onSubmit={(e) => handleSubmission(e)} className="flex flex-col gap-3"  >
          <label htmlFor="">عنوان</label>
          <input
            type="text"
            value={createSiteType.title}
            onChange={(e) => setCreateSiteType((last) => ({ ...last, title: e.target.value }))}
            placeholder="الزامی"
            className="bg-[#D0DBEC] border-[#D0DBEC] mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
          />

          <label htmlFor="">توضیحات</label>
          <input
            type="text"
            value={createSiteType.description}
            onChange={(e) => setCreateSiteType((last) => ({ ...last, description: e.target.value }))}
            placeholder="الزامی"
            className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
          />

          <div className="flex justify-end my-5">
            <button className="p-2 w-[80px] bg-[#4866CF] rounded-[4px] text-white">
              تایید
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateSiteType;
