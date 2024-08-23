"use client";
import React, { useEffect, useState } from "react";
import {
  givePositionPermission,
  giveRolePermission,
  removePositionPermission,
  removeRolePermission,
} from "@/utils/relation-utils";
import { useSelector } from "react-redux";
import SubmitOrderDropdown from "@/app/panel/user/submit-order/components/submit-order-dropdown";

function PositionPermission() {
  const { token } = useSelector((state: any) => state.userData);
  const [isAttaching, setIsAttaching] = useState(false);
  const [positionInfos, setPositionInfos] = useState([]);
  const [permissionInfos, setPermissionInfos] = useState([]);
  const [positionPerId, setPositionPerId] = useState({ perId: "", positionId: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localPositions = JSON.parse(
        window.sessionStorage.getItem("positions") as string
      );
      const positionInfo = localPositions?.map(
        (item: { position: { id: number; name_fa: string } }) =>
          item.position.id + "-" + item.position.name_fa
      );
      setPositionInfos(positionInfo);

      const localPermissions = JSON.parse(
        window.sessionStorage.getItem("permissions") as string
      );
      const perInfo = localPermissions.map(
        (item: { id: number; name_fa: string; name_en: string }) =>
          item.id + "-" + item.name_en
      );
      setPermissionInfos(perInfo);
    }
  }, []);

  const selectedPosition = positionInfos
    ?.filter((item: string[]) => item.includes(positionPerId.positionId))[0]
    ?.split("-")[0];
  const selectedPermission = permissionInfos
    .filter((item: string[]) => item.includes(positionPerId.perId))[0]
    ?.split("-")[0];

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAttaching) {
      await removePositionPermission(
        token,
        Number(selectedPosition),
        Number(selectedPermission)
      );
    } else {
      await givePositionPermission(
        token,
        Number(selectedPosition),
        Number(selectedPermission)
      );
    }
  };

  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] space-y-3">
      <form
        onSubmit={(e) => handleSubmission(e)}
        className="grid grid-cols-1 gap-8"
      >
        <SubmitOrderDropdown
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPositionPerId((last) => ({ ...last, perId: e.target.value }))
          }
          value={positionPerId.perId}
          dropdownItems={permissionInfos}
          dropDownTitle="دسترسی ها:"
        />
        <SubmitOrderDropdown
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPositionPerId((last) => ({ ...last, positionId: e.target.value }))
          }
          value={positionPerId.perId}
          dropdownItems={positionInfos}
          dropDownTitle="جایگاه ها:"
        />
        <button
          className="flex gap-3 items-center justify-end"
          onClick={() => setIsAttaching(!isAttaching)}
        >
          <p
            className={`appearance-none border-2 border-black rounded-sm w-4 h-4 ${
              isAttaching ? "bg-[#4866CF]" : "bg-white"
            }`}
          />
          <span>
            {isAttaching ? "دادن دسترسی به جایگاه" : "گرفتن دسترسی از جایگاه"}
          </span>
        </button>
      </form>
    </div>
  );
}

export default PositionPermission;
