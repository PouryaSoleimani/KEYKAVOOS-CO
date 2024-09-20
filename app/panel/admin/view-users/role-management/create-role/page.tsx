"use client";
import { createNewPermission, createNewRole } from "@/utils/utils";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function CreateRole() {
  const { token } = useSelector((state: any) => state.userData);
  const [createRole, setCreateRole] = useState({ name_en: "", name_fa: "", });

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createNewRole(token, createRole.name_en, createRole.name_fa);
    setCreateRole({ name_en: "", name_fa: "" });
  };


  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] space-y-3 flex flex-col gap-5">
      <p className="bg-[#4866CF] px-4 py-2 rounded-md w-fit text-zinc-100">ایجاد نقش جدید</p>
      <form onSubmit={(e) => handleSubmission(e)} className="flex flex-col gap-3"      >

        <label htmlFor="" className="font-semibold tracking-tight">نام انگلیسی</label>
        <input type="text" value={createRole.name_en} onChange={(e) => setCreateRole((last) => ({ ...last, name_en: e.target.value }))} className="bg-[#D0DBEC]  mx-auto outline-none rounded-md px-2 py-3 text-lg font-thin text-zinc-700 tracking-tight w-full border-[0.3px]" />

        <label htmlFor="" className="font-semibold tracking-tight">نام فارسی</label>
        <input type="text" value={createRole.name_fa} onChange={(e) => setCreateRole((last) => ({ ...last, name_fa: e.target.value }))} className="bg-[#D0DBEC]  mx-auto outline-none rounded-md px-2 py-3 text-lg font-thin text-zinc-700 tracking-tight w-full border-[0.3px]" />

        <div className="flex justify-end my-5">
          <button className="p-2 w-[120px] bg-[#4866CF] rounded-[4px] text-white hover:bg-blue-800 duration-300">
            تایید
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRole;
