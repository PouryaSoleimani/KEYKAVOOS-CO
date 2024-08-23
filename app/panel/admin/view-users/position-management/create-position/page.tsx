"use client";
import SubmitOrderDropdown from "@/app/panel/user/submit-order/components/submit-order-dropdown";
import { createNewPosition } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CreatePosition() {
  const { token } = useSelector((state: any) => state.userData);
  const [usersInfo, setUsersInfo] = useState([]);
  const [departmentsInfo, setDepartmentsInfo] = useState([]);
  const [createPosition, setCreatePosition] = useState({
    title_en: "",
    title_fa: "",
    dept_id: "",
    user_id: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localUsers = JSON.parse(
        window.sessionStorage.getItem("users") as string
      );
      setUsersInfo(localUsers);

      const localDepartments = JSON.parse(
        window.sessionStorage.getItem("departments") as string
      );

      setDepartmentsInfo(localDepartments);

      if (localUsers.length === 1) {
        setCreatePosition((prev) => ({ ...prev, user_id: localUsers[0].name }));
      }
      if (localDepartments.length === 1) {
        const departments = localDepartments.map(
          (item: { department: { name_fa: string } }) => item.department.name_fa
        );
        setCreatePosition((prev) => ({ ...prev, dept_id: departments[0] }));
      }
    }
  }, []);

  const usersDropDownInfo = usersInfo.map(
    (item: { name: string }) => item.name
  );
  const selectedUsersId = usersInfo
    .filter((item: { name: string }) => item.name === createPosition.user_id)
    .map((item: { id: number }) => item.id)?.[0];

  const departmentsDropdownInfo = departmentsInfo.map(
    (item: { department: { name_fa: string } }) => item.department.name_fa
  );
  const selectedDepartmentsId = departmentsInfo.filter(
    (item: { department: { name_fa: string; id: number } }) =>
      item.department.name_fa === createPosition.dept_id
  )[0]?.department?.id;

  // console.log("dept_id",selectedDepartmentsId);
  // console.log("user_id",selectedUsersId);

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createNewPosition(
      token,
      createPosition.title_en,
      createPosition.title_fa,
      Number(selectedDepartmentsId),
      Number(selectedUsersId)
    );
    setCreatePosition({ title_en: "", title_fa: "", dept_id: "", user_id: "" });
  };
  return (
    <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] space-y-3 flex flex-col gap-5">
      <p>ایجاد موقعیت جدید</p>
      <form
        onSubmit={(e) => handleSubmission(e)}
        className="flex flex-col gap-3"
      >
        <label htmlFor="">نام انگلیسی</label>
        <input
          type="text"
          value={createPosition.title_en}
          onChange={(e) =>
            setCreatePosition((last) => ({ ...last, title_en: e.target.value }))
          }
          className="bg-[#D0DBEC] border-[#D0DBEC] mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
        />

        <label htmlFor="">نام فارسی</label>
        <input
          type="text"
          value={createPosition.title_fa}
          onChange={(e) =>
            setCreatePosition((last) => ({ ...last, title_fa: e.target.value }))
          }
          className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]"
        />

        {/* user id */}
        <SubmitOrderDropdown
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCreatePosition((last) => ({ ...last, user_id: e.target.value }))
          }
          value={createPosition.user_id}
          dropdownItems={usersDropDownInfo}
          dropDownTitle="کاربران:"
        />

        {/* department id */}
        <SubmitOrderDropdown
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCreatePosition((last) => ({ ...last, dept_id: e.target.value }))
          }
          value={createPosition.dept_id}
          dropdownItems={departmentsDropdownInfo}
          dropDownTitle="دپارتمان ها:"
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

export default CreatePosition;
