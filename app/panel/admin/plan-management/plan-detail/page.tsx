"use client";
import { getPlanDetail } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AttrAdditionForm from "../components/attr-addition-form";
import { useSelector } from "react-redux";
import AttrEdition from "../components/attr-edition";
import ValueAddition from "../components/value-addition";

export type PlanDetailType = {
  title: string;
  description: string;
};
export type PlanAttrType = {
  id: number;
  title: string;
  description: string;
  deleted_at: string;
};

function PlanDetail() {
  const { token } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const planId = params.get("id");
  const [planAttrs, setPlanAttrs] = useState<PlanAttrType[]>([]);

  const [planDetail, setPlanDetail] = useState<PlanDetailType>({
    title: "",
    description: "",
  });
  const [addAtrrAndValue, setAddAttrAndValue] = useState({
    addAttr: {
      add: false,
      attrTitle: "",
      attrDesc: "",
    },
    addValue: {
      add: false,
      valueTitle: "",
      valueDesc: "",
    },
  });

  useEffect(() => {
    getPlanDetail(planId, setPlanDetail);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {/* attr info form */}
      <div className="flex flex-row items-center gap-5">
        <button
          className="text-white bg-[#4866CF] p-2 rounded-[5px] w-[130px]"
          onClick={() =>
            setAddAttrAndValue((last) => ({
              ...last,
              addAttr: { ...last.addAttr, add: !last.addAttr.add },
            }))
          }
        >
          + افزودن ویژگی
        </button>
      </div>
      {addAtrrAndValue.addAttr.add && (
        <AttrAdditionForm
          setAddAttrAndValue={setAddAttrAndValue}
          addAtrrAndValue={addAtrrAndValue}
          setPlanAttrs={setPlanAttrs}
        />
      )}
      {/* plan info */}
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center">
        <div className="grid grid-cols-2">
          <div>نام پلن</div>
          <div>توضیحات</div>
        </div>

        <div className="grid grid-cols-2 py-1 bg-[#EAEFF6] rounded-[4px] cursor-pointer">
          <p>{planDetail.title}</p>
          <p>{planDetail.description ? planDetail.description : "-"}</p>
        </div>
      </div>
      {/* att info */}
      <AttrEdition
        token={token}
        planId={planId}
        addAtrrAndValue={addAtrrAndValue}
        setAddAttrAndValue={setAddAttrAndValue}
        setPlanAttrs={setPlanAttrs}
        planAttrs={planAttrs}
      />
      {/* value */}
      {addAtrrAndValue.addValue.add && (
        <ValueAddition
          token={token}
          planId={planId}
          addAtrrAndValue={addAtrrAndValue}
          setAddAttrAndValue={setAddAttrAndValue}
        />
      )}
    </div>
  );
}

export default PlanDetail;
