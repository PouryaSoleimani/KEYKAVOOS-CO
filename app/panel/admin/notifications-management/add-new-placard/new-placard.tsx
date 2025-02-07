// "use client";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import CostumSelect from "@/app/panel/components/costum-select";
// import { createNotification } from "@/utils/utils";
// import { BrandType } from "../../org_management/brands/page";
// type NewPlacardProps = { setSteps: React.Dispatch<React.SetStateAction<number>>; };
// //^ COMPONENT 
// function NewPlacard({ setSteps }: NewPlacardProps) {
//   type brandType = { title: string }
//   //^ STATES
//   const { token } = useSelector((state: any) => state.userData);
//   const [users, setUsers] = useState([]);
//   const [departments, setDepartments] = useState([{ departments: { name_fa: "" } }]);
//   const [brands, setBrands] = useState([]);
//   const [annonceInfo, setAnnounceInfo] = useState({ description: "", dept_id: "", user_id: "", brand_id: "", firstuser: { name: "" } });


//   //^ FUNCTIONS
//   useEffect(() => {
//       const localUsers = JSON.parse(window.sessionStorage?.getItem("users") as string);
//       setUsers(localUsers);

//       const localDepartments = JSON.parse(window.sessionStorage?.getItem("departments") as string);
//       setDepartments(localDepartments);

//       const localBrands = JSON.parse(window.sessionStorage?.getItem("brands") as string);
//       setBrands(localBrands);
//   }, []);

//   useEffect(() => {
//     if (users.length > 0 && !annonceInfo.user_id) {
//       const firstUser = users[0]; // Get the first user
//       setAnnounceInfo((prev) => ({ ...prev, user_id: firstUser.? name}))
//       //? Set the user_id to the first user's name
//     }
//   }, []);

//   //?[] Automatically select the first department if available
//   useEffect(() => {
//     if (departments?.length > 0 && !annonceInfo.dept_id) {
//       const firstDepartment = departments[0].departments.name_fa; // Get the first department name
//       setAnnounceInfo((prev) => ({ ...prev, dept_id: firstDepartment })); // Set the dept_id to the first department name
//     } else { null }
//   }, [departments]);

//   useEffect(() => {
//     if (brands.length > 0 && !annonceInfo.brand_id) {
//       // const firstBrand = brands[0].? brand.title;
//       const firstBrand = brands[0].brand.title
//       setAnnounceInfo((prev) => ({ ...prev, dept_id: firstBrand }));
//     }
//   }, [departments]);

//   const departmentInfo = departments?.map(
//     (item: any) => item.department.id + "-" + item.department.name_fa
//   );

//   const usersInfo = users?.map((item: { name: string; surname: string }) => item.name + " " + item.surname);

//   const brandInfo = brands?.map((item: { brand: { title: string } }) => item.brand?.title);

//   const depId = departments
//     .filter((item: any) => annonceInfo?.dept_id?.includes(item.department.name_fa))
//     .map((item: any) => item.department.id)[0];

//   const userId = users?.filter((item: { name: string }) => annonceInfo?.user_id?.includes(item.name))?.map((item: { id: number }) => item.id)[0];

//   const brandId = brands?.filter((item: { brand: { title: string } }) => item.brand?.title.includes(annonceInfo.brand_id))?.map((item: { brand: { id: number } }) => item.brand?.id)?.[0];

//   const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     await createNotification(token, Number(depId), Number(brandId), Number(userId), annonceInfo.description);
//     setAnnounceInfo((last) => ({ ...last, description: "" }));
//   };


//   // RETURN
//   return (
//     <form onSubmit={(e) => handleSubmission(e)} className="grid grid-cols-1 gap-3" >
//       {/* <form className="grid grid-cols-1 gap-3" > */}
//       <div className="grid grid-cols-2 gap-8">
//         <CostumSelect
//           changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => setAnnounceInfo((last) => ({ ...last, dept_id: e.target.value }))}
//           label="ایجاد اعلان به:"
//           name="dept_id"
//           selectOptions={departmentInfo}
//           value={annonceInfo.dept_id}
//         />
//         <CostumSelect
//           changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => setAnnounceInfo((last) => ({ ...last, user_id: e.target.value }))}
//           label="ایجاد اعلان به:"
//           name="user_id"
//           selectOptions={usersInfo}
//           value={annonceInfo.user_id}
//         />
//         <CostumSelect
//           changeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
//             setAnnounceInfo((last) => ({ ...last, brand_id: e.target.value }))
//           }
//           label="ایجاد اعلان به:"
//           name="brand_id"
//           selectOptions={brandInfo}
//           value={annonceInfo.brand_id}
//         />
//       </div>
//       <div
//         style={{
//           border: "none",
//           borderTop: "3px solid",
//           borderImage: "linear-gradient(to right, #FFFFFF 0%, #4866CE 45% ,#4866CE 55% , #FFFFFF 100%) 1",
//           margin: "3% 0",
//         }}
//       ></div>
//       <div className="flex flex-col gap-5">
//         <div className="flex flex-row gap-2">
//           <label htmlFor="">متن اعلان:</label>
//           <textarea
//             name=""
//             id=""
//             cols={30}
//             rows={10}
//             className="p-2 bg-[#EAEFF6] w-[30%] rounded-[4px]"
//             value={annonceInfo.description}
//             onChange={(e) => setAnnounceInfo((last) => ({ ...last, description: e.target.value, }))
//             }
//           ></textarea>
//         </div>
//       </div>
//       <div className="flex items-center w-[37%] justify-end">
//         <button className="bg-[#4866CE] text-white p-2 rounded-[4px]">
//           ارسال اعلان
//         </button>
//       </div>
//     </form>
//   );
// }

// export default NewPlacard;
