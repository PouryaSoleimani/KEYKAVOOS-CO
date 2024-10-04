// ^ PROJECT MANAGEMENT PAGE
import React from "react";
import AllProjects from "./all-projects";
import NewInfoOnEachPageBtn from "../components/NewInfoOnEachPageBtn";
import 'animate.css';

//^ COMPONENT 
function ProjectManagement() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#4866cf] my-4">مدیریت پروژه ها</h1>
      <div className="mb-5 flex ">
        <NewInfoOnEachPageBtn btnText="ایجاد پروژه جدید" src="/panel/user/submit-order" />
      </div>
      <div className={`bg-white shadow mx-auto rounded-xl py-[3%] px-[3%] animate__animated animate__pulse`}>
        <AllProjects />
      </div>
    </div>
  );
}

export default ProjectManagement;
