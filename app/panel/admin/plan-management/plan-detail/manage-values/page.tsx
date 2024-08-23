"use client";
import React, { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { FaCheck, FaPlus } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import {
  deletePlanAttr,
  deletePlanValue,
  getPlanAttrs,
  getPlanValueDetail,
  getPlanValues,
  restorePlanAttr,
  restorePlanValues,
  updatePlanAttr,
  updatePlanValue,
} from "@/utils/utils";
import { createActionCreatorInvariantMiddleware } from "@reduxjs/toolkit";
import { PlanAttrType } from "../page";
import { ValueType } from "../../components/value-component";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { AttrIdContext } from "../../context/AttrIdContext";

function ManageValues() {
  const [valueIsDeleted, setValueIsDeleted] = useState(false);
  const [planValueDetail, setPlanValueDetail] = useState<ValueType[]>([]);
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const planId = params.get("plan_id");
  const { attrId, setAttrId } = useContext(AttrIdContext);
  const [editValue, setEditValue] = useState({
    showField: false,
    title: "",
    description: "",
  });

  useEffect(() => {
    getPlanValueDetail(token, setPlanValueDetail, attrId);
  }, []);

  const handlePlanValueEdit = async (id: number) => {
    // const selectedPlan = planAttrs.find((item: PlanAttrType) => item.id === id);
    // if (selectedPlan) {
    //   setPlanAttrs((last) =>
    //     last.map((item: PlanAttrType) =>
    //       item.id === id
    //         ? {
    //             ...item,
    //             title:
    //               editAttrAndValue.editAttr.editTitle !== ""
    //                 ? editAttrAndValue.editAttr.editTitle
    //                 : item.title,
    //             description:
    //               editAttrAndValue.editAttr.editDesc !== ""
    //                 ? editAttrAndValue.editAttr.editDesc
    //                 : item.description,
    //           }
    //         : item
    //     )
    //   );
    // await updatePlanValue(
    //   token,
    //   Number(attrId),
    //   Number(planId),
    //   editValue.title,
    //   editValue.description
    // );
  };

  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center">
      <div
        className={`grid grid-cols-4`}
      >
        <div>نام ویژگی</div>
        <div>توضیحات ویژگی</div>
        <div>مقدار ویژگی</div>
        <div>عملیات</div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {planValueDetail.map((item) => (
          <div
            className={`${
              valueIsDeleted && item.deleted_at ? "bg-red-300" : "bg-[#EAEFF6]"
            } grid grid-cols-4 gap-x-5 text-center py-1 rounded-[4px] cursor-pointer`}
            key={item.id}
          >
            <input
              value={editValue.showField ? editValue.title : item.title}
              onChange={(e) =>
                setEditValue((last) => ({
                  ...last,
                  title: e.target.value,
                }))
              }
              className={`${
                editValue.showField
                  ? "bg-white"
                  : "bg-[#EAEFF6] caret-transparent cursor-default text-center"
              } outline-none`}
            />
            <input
              value={
                editValue.showField ? editValue.description : item.description
              }
              onChange={(e) =>
                setEditValue((last) => ({
                  ...last,
                  description: e.target.value,
                }))
              }
              className={`${
                editValue.showField
                  ? "bg-white"
                  : "bg-[#EAEFF6] caret-transparent cursor-default text-center"
              } outline-none`}
            />

            <div className="flex flex-row items-center justify-center gap-3">
              <span
                onClick={() =>
                  deletePlanValue(item.id, token, setValueIsDeleted)
                }
                className="flex justify-center"
              >
                <RxCross1 className="text-red-600 text-lg" />
              </span>
              <span
                onClick={() =>
                  restorePlanValues(item.id, token, setValueIsDeleted)
                }
              >
                <MdOutlineSettingsBackupRestore className="text-yellow-600 text-lg" />
              </span>
              {/* <span
                onClick={() =>
                  setEditAttrAndValue((last) => ({
                    ...last,
                    editAttr: {
                      ...last.editAttr,
                      showEditField: !last.editAttr.showEditField,
                    },
                  }))
                }
                className="flex justify-center items-center"
              >
                {editAttrAndValue.editAttr.showEditField ? (
                  <FaCheck
                    onClick={() => handlePlanEdit(item.id)}
                    className="text-green-600 text-lg"
                  />
                ) : (
                  <AiOutlineEdit className="text-green-600 text-lg" />
                )}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageValues;
