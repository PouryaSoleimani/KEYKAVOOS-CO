"use client";
import React, { useEffect, useState } from "react";
import {
  giveRolePermission,
  removeRolePermission,
} from "@/utils/relation-utils";
import { useSelector } from "react-redux";
import SubmitOrderDropdown from "@/app/panel/user/submit-order/components/submit-order-dropdown";

function RolePermission() {
  const { token } = useSelector((state: any) => state.userData);
  const [isAttaching, setIsAttaching] = useState(false);
  const [roleInfos, setRoleInfos] = useState([]);
  const [permissionInfos, setPermissionInfos] = useState([]);
  const [rolePerId, setRolePerId] = useState({ perId: "", roleId: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localRoles = JSON.parse(
        window.sessionStorage.getItem("roles") as string
      );
      const roleInfo = localRoles.map(
        (item: { role: { id: number; name_fa: string } }) =>
          item.role.id + "-" + item.role.name_fa
      );
      setRoleInfos(roleInfo);

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

  const selectedRole = roleInfos
    .filter((item: string[]) => item.includes(rolePerId.roleId))[0]
    ?.split("-")[0];
  const selectedPermission = permissionInfos
    .filter((item: string[]) => item.includes(rolePerId.perId))[0]
    ?.split("-")[0];

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAttaching) {
      await removeRolePermission(
        token,
        Number(selectedRole),
        Number(selectedPermission)
      );
    } else {
      await giveRolePermission(
        token,
        Number(selectedRole),
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
            setRolePerId((last) => ({ ...last, perId: e.target.value }))
          }
          value={rolePerId.perId}
          dropdownItems={permissionInfos}
          dropDownTitle="دسترسی ها:"
        />
        <SubmitOrderDropdown
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setRolePerId((last) => ({ ...last, roleId: e.target.value }))
          }
          value={rolePerId.roleId}
          dropdownItems={roleInfos}
          dropDownTitle="نقش ها:"
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
            {isAttaching ? "دادن دسترسی به نقش" : "گرفتن دسترسی از نقش"}
          </span>
        </button>
      </form>
    </div>
  );
}

export default RolePermission;
