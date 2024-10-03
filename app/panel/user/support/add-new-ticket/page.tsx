"use client";
//^ SUPPORT ==  ADD NEW TICKET  ================================================================================================================================ 
import React, { useContext, useEffect, useState } from "react";
import TicketFields from "./components/ticket-fields";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import SubmitOrderDropdown from "../../submit-order/components/submit-order-dropdown";
// import { createTicket } from "@/utils/utils";
import { CREATETICKET } from "@/utils/utils";
import { DepartmentContext } from "@/app/panel/admin/context/department-context/DepartmentContext";
import { DepartmentFinalType } from "@/app/panel/admin/org_management/departments/page";
import app from "@/services/service";

// ^ COMPONENT
function AddNewTicket() {
  //STATES
  const { userProfile, token } = useSelector((state: any) => state.userData);
  const [departments, setDepartments] = useState([]);
  const typedDepartments: DepartmentFinalType[] = departments as DepartmentFinalType[];

  // FUNCTIONS
  const GETALLDEPARTMENTS = () => {
    app.get('/departments')
      .then(response => console.log("DEPARTMENTS ==>", response.data))
      .catch((error: any) => console.log("DEPARTMENTS ERROR => ", error.response))
  }



  useEffect(() => {
    if (typeof window !== "undefined") {
      const localDepartments = JSON.parse(window.sessionStorage.getItem("departments") as string);
      setDepartments(localDepartments);
    }
  }, []);

  useEffect(() => {
    if (typedDepartments?.length > 0) {
      const firstDepId = typedDepartments?.map((item) => item?.department.id)?.[0];
      setTicket((last) => ({ ...last, dept_id: String(firstDepId) }));
    }
  }, [typedDepartments]);

  const departmentInfo = typedDepartments?.map((item) => String(item.department.id) + " - " + item.department.name_fa);
  const dispatch = useDispatch();
  const router = useRouter();
  const [ticket, setTicket] = useState({ title: "", description: "", status_id: "", priority_id: "کم", register_user_id: "", dept_id: "", departmentId: "" });
  
  const departmentId = typedDepartments?.filter((item) => item.department.id === Number(ticket.dept_id))?.map((item) => item.department.id)[0];
  
  useEffect(() => { console.log("DEPARTMENT INFO",departmentInfo , typedDepartments) }, [])
  // * HANDLE SUMBISSION
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CREATETICKET(ticket.title, token, ticket.description, ticket.status_id, ticket.priority_id == "عادی" ? 1 : 2, ticket.dept_id == "واحد مالی" ? 1 : 2, userProfile.id, null)
    setTicket((last) => ({ ...last, title: "", description: "" }));
  };

  //^ RETURN  ================================================================================================================================================
  return (
    <div className="relative">
      <div className="flex justify-end w-full text-xl cursor-pointer absolute -top-12" onClick={() => router.back()} >
        <div className="rounded-lg p-2 bg-white">
          <IoArrowBack />
        </div>
      </div>
      <form onSubmit={(e) => handleSubmission(e)} className="bg-white shadow mx-auto rounded-xl py-[3%] px-[3%] w-full grid grid-cols-1 gap-3 lg:mt-0 mt-10" >
        <span className="absolute right-[7.8rem] top-7 text-red-800 text-xl">*</span>
        <TicketFields label="عنوان تیکت:" width="w-[30%]" value={ticket.title} onChange={(e) => setTicket((last) => ({ ...last, title: e.target.value }))} />
        <div className="lg:w-[30%] w-full">
          <SubmitOrderDropdown onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket((last) => ({ ...last, dept_id: e.target.value }))} value={ticket.dept_id === "واحد مالی" ? "1" : "2"} dropDownTitle="واحد مربوطه:" dropdownItems={["واحد مالی", "واحد فنی"]} />
        </div>
        <div className="lg:w-[30%] w-full">
          <SubmitOrderDropdown onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket((last) => ({ ...last, priority_id: e.target.value }))} value={ticket.priority_id} dropDownTitle="اولویت تیکت:" dropdownItems={["عادی", "فوری"]} />
        </div>
        <div style={{ border: "none", borderTop: "3px solid", borderImage: "linear-gradient(to right, #FFFFFF 0%, #4866CE 45% ,#4866CE 55% , #FFFFFF 100%) 1", margin: "3% 0", }}></div>
        <div className="flex flex-col gap-2 -translate-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">متن تیکت:</label>
            <span className="absolute right-[4.8rem] -top-1 text-red-800 text-xl">*</span>
            <textarea placeholder="متن خود را اینجا بنویسید ..." name="" id="" cols={90} rows={10} className="p-2 bg-[#EAEFF6] lg:w-full px-4 py-3 rounded-lg w-full" value={ticket.description} onChange={(e) => setTicket((last) => ({ ...last, description: e.target.value }))}>
            </textarea>
          </div>
        </div>
        <div className="flex justify-end"><span className="absolute right-[8rem] text-red-800">*</span>
          <button className={`${"bg-[#4866CE]"} text-white px-12 py-4 text-lg rounded-lg hover:bg-blue-800 duration-300 -translate-y-4`} >
            ارسال تیکت
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewTicket;
