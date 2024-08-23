"use client";
import { createNewPermission, getAllPermissions } from "@/utils/utils";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { PermissionContext } from "../../../context/permission-context/PermissionContext";

function CreatePermission() {
  const { token } = useSelector((state: any) => state.userData);
  const [createPermission, setCreatePermission] = useState({
    name_en: "",
    name_fa: "",
  });
  const { setPermissions, setPermissionStatus } = useContext(PermissionContext);
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Promise.all([
      await createNewPermission(
        token,
        createPermission.name_en,
        createPermission.name_fa
      ),
      await getAllPermissions(token, setPermissions, setPermissionStatus),
    ]);

    setCreatePermission({ name_en: "", name_fa: "" });
  };
  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] space-y-3 flex flex-col gap-5">
      <p>ایجاد دسترسی جدید</p>
      <form
        onSubmit={(e) => handleSubmission(e)}
        className="flex flex-col gap-3"
      >
        <label htmlFor="">نام انگلیسی</label>
        <input
          type="text"
          value={createPermission.name_en}
          onChange={(e) =>
            setCreatePermission((last) => ({
              ...last,
              name_en: e.target.value,
            }))
          }
          className="bg-[#D0DBEC] border-[#D0DBEC] mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
        />

        <label htmlFor="">نام فارسی</label>
        <input
          type="text"
          value={createPermission.name_fa}
          onChange={(e) =>
            setCreatePermission((last) => ({
              ...last,
              name_fa: e.target.value,
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
    </div>
  );
}

export default CreatePermission;
