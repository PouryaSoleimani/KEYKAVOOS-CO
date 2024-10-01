"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { deletePlanAttr, getPlanAttrs, restorePlanAttr } from "@/utils/utils";
import { PlanAttrType } from "../plan-detail/page";
import { AttrIdContext } from "../context/AttrIdContext";
import { IoReloadCircle } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";


type AttrEditionProps = {
  token: string;
  planId: string | null;
  planAttrs: PlanAttrType[];
  setPlanAttrs: React.Dispatch<React.SetStateAction<PlanAttrType[]>>;
  addAtrrAndValue: { addAttr: { add: boolean; attrTitle: string; attrDesc: string; }; addValue: { add: boolean; valueTitle: string; valueDesc: string; }; };
  setAddAttrAndValue: React.Dispatch<React.SetStateAction<{ addAttr: { add: boolean; attrTitle: string; attrDesc: string; }; addValue: { add: boolean; valueTitle: string; valueDesc: string; }; }>>;
  values: string[]
};

//^ COMPONENT ==============================================================================================================================================
function AttrEdition({ token, planId, addAtrrAndValue, setAddAttrAndValue, setPlanAttrs, planAttrs,
}: AttrEditionProps) {
  const router = useRouter()
  const [attrIsDeleted, setAttrIsDeleted] = useState(false);
  const { setAttrId } = useContext(AttrIdContext);

  useEffect(() => { getPlanAttrs(token, setPlanAttrs) }, []);

  const handleAddingValue = (id: number) => {
    setAttrId(String(id));
    setAddAttrAndValue((last) => ({ ...last, addValue: { ...last.addValue, add: true }, }));
    router.refresh()
    toast.success("ویژگی موردنظر با موفقیت اضافه شد", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      style: { fontSize: "12px" },
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  };

  return (
    <div className="bg-white shadow mx-auto rounded-xl w-full p-3 text-center">
      <div className={`grid grid-cols-5`}>
        <div>نام ویژگی</div>
        <div>توضیحات ویژگی</div>
        <div>مقدار ویژگی</div>
        <div>عملیات</div>
        <div>مقدار ها</div>
      </div>

      <div className="grid grid-cols-1 gap-5 py-3">
        {planAttrs.map(
          (item: { deleted_at: string; id: number; title: string; description: string; values: any }) => (
            <div className={`${item.deleted_at ? "bg-red-500/80" : "bg-[#EAEFF6]"} grid grid-cols-5 gap-x-5 text-center py-3 rounded-[4px] cursor-pointer px-2`} key={item.id} >
              <input value={item?.title} readOnly={true} className={`${item.deleted_at ? "bg-transparent" : "bg-[#EAEFF6] caret-transparent cursor-default text-center"} text-center py-2`} />
              <input value={item?.description ? item.description : "-"} readOnly={true} className={`${item.deleted_at ? "bg-transparent" : "bg-[#EAEFF6] caret-transparent cursor-default text-center"} text-center py-2`} />
              <p>---</p>
              <div className="flex flex-row items-center justify-center gap-8">
                <span onClick={() => deletePlanAttr(item?.id, setAttrIsDeleted)} className="flex justify-center hover:scale-105 duration-300" >
                  <RiDeleteBin7Fill className="text-red-600 text-xl" />
                </span>
                <span onClick={() => restorePlanAttr(item.id, setAttrIsDeleted)} className="hover:scale-105 duration-300">
                  <IoReloadCircle className="text-emerald-600 text-2xl" />
                </span>
                <span onClick={() => handleAddingValue(item?.id)} >
                  <FaPlus className="hover:scale-105 duration-300 text-xl" />
                </span>
              </div>
              <p>
                {item.values?.length > 0 ? item.values.filter((val: { plan_id: number }) => val.plan_id === Number(planId))
                  .map((item: { title: string }) => item.title)[0] : "-"}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default AttrEdition;
