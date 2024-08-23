import React from "react";
import AllProjects from "./all-projects";
import NewInfoOnEachPageBtn from "../components/NewInfoOnEachPageBtn";
function ProjectManagement() {
  return (
    <div>
      <div className="mb-5 flex">
        <NewInfoOnEachPageBtn btnText="ایجاد پروژه جدید" src="/panel/user/submit-order"/>
      </div>
      <div className={`bg-white shadow mx-auto rounded-2xl py-[3%] px-[3%]`}>
        <AllProjects />
      </div>
    </div>
  );
}

export default ProjectManagement;
