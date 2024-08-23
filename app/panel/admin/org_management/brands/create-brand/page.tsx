"use client";
import { createNewBrand, getAllBrands } from "@/utils/utils";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrandType } from "../page";

function CreateBrand() {
  const { token } = useSelector((state: any) => state.userData);
  const [allBrands, setAllBrands] = useState<BrandType[]>([]);
  const [createBrand, setCreateBrand] = useState({
    title: "",
    description: "",
  });
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Promise.all([
      await createNewBrand(token, createBrand.title, createBrand.description),
      await getAllBrands(setAllBrands),
    ]);
    setCreateBrand({ title: "", description: "" });
  };

  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] space-y-3 flex flex-col gap-5">
      <p>ایجاد برند جدید</p>
      <form
        onSubmit={(e) => handleSubmission(e)}
        className="flex flex-col gap-3"
      >
        <label htmlFor="">عنوان</label>
        <input
          type="text"
          value={createBrand.title}
          onChange={(e) =>
            setCreateBrand((last) => ({ ...last, title: e.target.value }))
          }
          className="bg-[#D0DBEC] border-[#D0DBEC] mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
        />

        <label htmlFor="">توضیحات</label>
        <input
          type="text"
          value={createBrand.description}
          onChange={(e) =>
            setCreateBrand((last) => ({ ...last, description: e.target.value }))
          }
          className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
        />

        <div className="flex justify-end my-5">
          <button className="p-2 w-[80px] bg-[#4866CF] rounded-[4px] text-white">
            تایید
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBrand;
