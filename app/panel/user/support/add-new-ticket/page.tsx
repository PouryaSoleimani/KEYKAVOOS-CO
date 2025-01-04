"use client";
//^ SUPPORT ==  ADD NEW TICKET  ================================================================================================================================ 
import React, { useContext, useEffect, useRef, useState } from "react";
import TicketFields from "./components/ticket-fields";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import SubmitOrderDropdown from "../../submit-order/components/submit-order-dropdown";
import { CREATETICKET } from "@/utils/utils";
import { DepartmentContext } from "@/app/panel/admin/context/department-context/DepartmentContext";
import { DepartmentFinalType } from "@/app/panel/admin/org_management/departments/page";
import app from "@/services/service";
import { BiUpload } from "react-icons/bi";

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
    const localDepartments = JSON.parse(window.sessionStorage.getItem("departments") as string);
    setDepartments(localDepartments);
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

  useEffect(() => { console.log("DEPARTMENT INFO", departmentInfo, typedDepartments) }, [])
  const fileInput: React.MutableRefObject<any> = useRef("FILEINPUT");
  
  // * HANDLE SUMBISSION
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CREATETICKET(ticket.title, token, ticket.description, ticket.status_id, ticket.priority_id == "عادی" ? 1 : 2, departmentId, userProfile.id, null)
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
          <SubmitOrderDropdown onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket((last) => ({ ...last, dept_id: e.target.value }))} value={ticket.dept_id} dropDownTitle="واحد مربوطه:" dropdownItems={["واحد مالی", "واحد فنی"]} />
        </div>
        <div className="lg:w-[30%] w-full">
          <SubmitOrderDropdown onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicket((last) => ({ ...last, priority_id: e.target.value }))} value={ticket.priority_id} dropDownTitle="اولویت تیکت:" dropdownItems={["عادی", "فوری"]} />
        </div>
        <div style={{ border: "none", borderTop: "3px solid", borderImage: "linear-gradient(to right, #FFFFFF 0%, #4866CE 45% ,#4866CE 55% , #FFFFFF 100%) 1", margin: "3% 0", }}></div>
        <div className="flex flex-col gap-2 -translate-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">متن تیکت:</label>
            <span className="absolute right-[4.8rem] -top-0.5  text-red-800 text-xl">*</span>
            <textarea placeholder="متن خود را اینجا بنویسید ..." name="" id="" cols={90} rows={10} className="p-2 bg-[#EAEFF6] lg:w-full px-4 py-3 rounded-lg w-full" value={ticket.description} onChange={(e) => setTicket((last) => ({ ...last, description: e.target.value }))}> </textarea>
            <span className="mr-1 bg-zinc-100 w-fit px-3 rounded-md">{ticket.description.length}</span>
          </div>
        </div>
        <div className="flex justify-end gap-x-3">
          <button className={`${"bg-[#4866CE]"} text-white px-12 py-4 text-lg rounded-lg flex items-center flex-row-reverse gap-x-2 hover:bg-blue-800 duration-300 -translate-y-4`} type="button">
            <BiUpload className="w-6 h-6" />
            <input type="file" className="opacity-0 w-inherit absolute -z-10" ref={fileInput} />
            {fileInput.current && fileInput.current.files?.length > 0 ? fileInput.current.files[0].name.toString() : "فایل پیوست"}
          </button>
          <button className={`${"bg-emerald-600"} text-white px-12 py-4 text-lg rounded-lg hover:bg-emerald-800 duration-300 -translate-y-4`} type="submit" >   ارسال تیکت </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewTicket;
