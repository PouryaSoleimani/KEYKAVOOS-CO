"use client";
import { createNewPlanAttr, createNewPlanValue } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { PlanAttrType } from "../plan-detail/page";

type AttrAdditionFormProps = {
  setPlanAttrs: React.Dispatch<React.SetStateAction<PlanAttrType[]>>;
  setAddAttrAndValue: React.Dispatch<
    React.SetStateAction<{
      addAttr: {
        add: boolean;
        attrTitle: string;
        attrDesc: string;
      };
      addValue: {
        add: boolean;
        valueTitle: string;
        valueDesc: string;
      };
    }>
  >;
  addAtrrAndValue: {
    addAttr: {
      add: boolean;
      attrTitle: string;
      attrDesc: string;
    };
    addValue: {
      add: boolean;
      valueTitle: string;
      valueDesc: string;
    };
  };
};

function AttrAdditionForm({
  setAddAttrAndValue,
  addAtrrAndValue,
  setPlanAttrs,
}: AttrAdditionFormProps) {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const planId = params.get("id");
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createNewPlanAttr(
      Number(planId),
      token,
      addAtrrAndValue.addAttr.attrTitle,
      addAtrrAndValue.addAttr.attrDesc,
      setPlanAttrs
    );
    setAddAttrAndValue((last) => ({
      ...last,
      addAttr: { ...last.addAttr, attrDesc: "", attrTitle: "", add: false },
    }));
  };

  return (
    <form
      onSubmit={(e) => handleSubmission(e)}
      className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] flex flex-col gap-3"
    >
      <label htmlFor="">عنوان ویژگی</label>
      <input
        type="text"
        value={addAtrrAndValue.addAttr.attrTitle}
        onChange={(e) =>
          setAddAttrAndValue((last) => ({
            ...last,
            addAttr: { ...last.addAttr, attrTitle: e.target.value },
          }))
        }
        className="bg-[#D0DBEC] border-[#D0DBEC] mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
      />

      <label htmlFor="">توضیحات ویژگی</label>
      <input
        type="text"
        value={addAtrrAndValue.addAttr.attrDesc}
        onChange={(e) =>
          setAddAttrAndValue((last) => ({
            ...last,
            addAttr: { ...last.addAttr, attrDesc: e.target.value },
          }))
        }
        className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
      />

      <div className="flex justify-end my-5">
        <button className="p-2 w-[80px] bg-[#4866CF] rounded-[4px] text-white">
          تایید
        </button>
      </div>
    </form>
  );
}

export default AttrAdditionForm;
