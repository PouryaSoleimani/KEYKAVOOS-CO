"use client";
import React, { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { deletePlanAttr, getPlanAttrs, restorePlanAttr } from "@/utils/utils";
import { PlanAttrType } from "../plan-detail/page";
import { AttrIdContext } from "../context/AttrIdContext";

type AttrEditionProps = {
  token: string;
  planId: string | null;
  planAttrs: PlanAttrType[];
  setPlanAttrs: React.Dispatch<React.SetStateAction<PlanAttrType[]>>;
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
};

function AttrEdition({
  token,
  planId,
  addAtrrAndValue,
  setAddAttrAndValue,
  setPlanAttrs,
  planAttrs,
}: AttrEditionProps) {
  const [attrIsDeleted, setAttrIsDeleted] = useState(false);
  const { setAttrId } = useContext(AttrIdContext);

  useEffect(() => {
    getPlanAttrs(token, setPlanAttrs);
  }, [addAtrrAndValue.addAttr, planAttrs]);

  const handleAddingValue = (id: number) => {
    setAttrId(String(id));
    setAddAttrAndValue((last) => ({
      ...last,
      addValue: { ...last.addValue, add: true },
    }));
  };

  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center">
      <div className={`grid grid-cols-4`}>
        <div>نام ویژگی</div>
        <div>توضیحات ویژگی</div>
        <div>مقدار ویژگی</div>
        <div>عملیات</div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {planAttrs.map(
          (item: {
            deleted_at: string;
            id: number;
            title: string;
            description: string;
          }) => (
            <div
              className={`${
                attrIsDeleted && item.deleted_at ? "bg-red-300" : "bg-[#EAEFF6]"
              } grid grid-cols-4 gap-x-5 text-center py-1 rounded-[4px] cursor-pointer`}
              key={item.id}
            >
              <input
                value={item?.title}
                readOnly={true}
                className="bg-[#EAEFF6] caret-transparent cursor-default text-center"
              />
              <input
                value={item?.description ? item.description : "-"}
                readOnly={true}
                className="bg-[#EAEFF6] caret-transparent cursor-default text-center"
              />
              <p>
                {item.values?.length > 0
                  ? item.values
                      .filter(
                        (val: { plan_id: number }) =>
                          val.plan_id === Number(planId)
                      )
                      .map((item: { title: string }) => item.title)[0]
                  : "-"}
              </p>
              <div className="flex flex-row items-center justify-center gap-3">
                <span
                  onClick={() =>
                    deletePlanAttr(item?.id, token, setAttrIsDeleted)
                  }
                  className="flex justify-center"
                >
                  <RxCross1 className="text-red-600 text-lg" />
                </span>
                <span
                  onClick={() =>
                    restorePlanAttr(item.id, token, setAttrIsDeleted)
                  }
                >
                  <MdOutlineSettingsBackupRestore className="text-yellow-600 text-lg" />
                </span>
                <span onClick={() => handleAddingValue(item?.id)}>
                  <FaPlus />
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default AttrEdition;
