"use client";
import React, { useEffect, useState } from "react";
import TicketFields from "../../support/add-new-placard/components/ticket-fields";
import { createNewsLetter } from "@/utils/utils";
import { useSelector } from "react-redux";
import SubmitOrderDropdown from "@/app/panel/user/submit-order/components/submit-order-dropdown";

function CreateNewsletter() {
  const { token } = useSelector((state: any) => state.userData);
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [brands, setBrands] = useState([]);
  const [newsletterInfo, setNewsLetteInfo] = useState({
    title: "",
    description: "",
    user_id: "",
    dept_id: "",
    brand_id: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localUsers = JSON.parse(
        window.sessionStorage.getItem("users") as string
      );
      setUsers(localUsers);

      const localDepartments = JSON.parse(
        window.sessionStorage.getItem("departments") as string
      );
      setDepartments(localDepartments);

      const localBrands = JSON.parse(
        window.sessionStorage.getItem("brands") as string
      );
      setBrands(localBrands);
    }
  }, []);

  useEffect(() => {
    if (users.length > 0 && !newsletterInfo.user_id) {
      const firstUser: { name: string } = users?.[0];
      setNewsLetteInfo((prev) => ({ ...prev, user_id: firstUser.name }));
    }
  }, [users]);

  useEffect(() => {
    if (departments.length > 0 && !newsletterInfo.dept_id) {
      const firstDepartment = departments[0].department?.name_fa;
      setNewsLetteInfo((prev) => ({ ...prev, dept_id: firstDepartment }));
    }
  }, [departments]);

  const departmentsInfo = departments?.map(
    (item: { department: { name_fa: string; id: number } }) =>
      item.department?.id + "-" + item.department?.name_fa
  );

  const usersInfo = users?.map(
    (item: { name: string; surname: string }) =>
      item?.name + " " + item?.surname
  );

  const depId = departments
    .filter((item: { department: { name_fa: string } }) =>
      newsletterInfo?.dept_id?.includes(item.department?.name_fa)
    )
    .map((item: { department: { id: number } }) => item.department.id)[0];

  const userId = users
    .filter((item: { name: string }) =>
      newsletterInfo?.user_id?.includes(item?.name)
    )
    .map((item: { id: number }) => item?.id)[0];

  const handleNewsLetterSubmission = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await createNewsLetter(
      token,
      Number(userId),
      Number(depId),
      newsletterInfo.title,
      newsletterInfo.description
    );
  };
  return (
    <form
      onSubmit={(e) => handleNewsLetterSubmission(e)}
      className="flex flex-col gap-5 bg-white shadow mx-auto rounded-2xl w-full p-[3%]"
    >
      <p>ایجاد خبرنامه جدید</p>
      <TicketFields
        label="عنوان:"
        width="100%"
        value={newsletterInfo.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewsLetteInfo((last) => ({
            ...last,
            title: e.target.value,
          }))
        }
        // direction="flex-row items-center"
      />
      <div className="grid grid-cols-2 gap-5">
        <SubmitOrderDropdown
          dropDownTitle="به کاربر:"
          dropdownItems={usersInfo}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setNewsLetteInfo((last) => ({ ...last, user_id: e.target.value }))
          }
          value={newsletterInfo.user_id}
          name={newsletterInfo.user_id}
        />
        <SubmitOrderDropdown
          dropDownTitle="به دپارتمان:"
          dropdownItems={departmentsInfo}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setNewsLetteInfo((last) => ({ ...last, dept_id: e.target.value }))
          }
          value={newsletterInfo.dept_id}
          name={newsletterInfo.dept_id}
        />
      </div>
      <div
        style={{
          border: "none",
          borderTop: "3px solid",
          borderImage:
            "linear-gradient(to right, #FFFFFF 0%, #4866CE 45% ,#4866CE 55% , #FFFFFF 100%) 1",
          margin: "3% 0",
        }}
      ></div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-2">
          <label htmlFor="">متن خبرنامه:</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="p-2 bg-[#EAEFF6] w-[30%] rounded-[4px]"
            value={newsletterInfo.description}
            onChange={(e) =>
              setNewsLetteInfo((last) => ({
                ...last,
                description: e.target.value,
              }))
            }
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-end gap-5">
        <button className="bg-[#4866CE] text-white p-2 rounded-[4px]">
          ارسال خبرنامه
        </button>
      </div>
    </form>
  );
}

export default CreateNewsletter;
