"use client";
import React, { useEffect, useState } from "react";
import { giveRolePermission, removeRolePermission, } from "@/utils/relation-utils";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form"
import SubmitOrderDropdown from "@/app/panel/user/submit-order/components/submit-order-dropdown";
import app from "@/services/service";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";

//? TYPES
type Inputs = { permission: string, position: string }

// ^ COMPONENT
function PositionPermission() {
  const { token } = useSelector((state: any) => state.userData);
  const [isAttaching, setIsAttaching] = useState(false);
  const [roleInfos, setRoleInfos] = useState([]);
  const [permissionInfos, setPermissionInfos] = useState([]);
  const [rolePerId, setRolePerId] = useState({ perId: "", roleId: "" });
  const [allRoles, setAllRoles] = useState([])
  const [allPermissions, setAllPermissions] = useState([])
  const [allPositions, setAllPositions] = useState([])
  const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>()

  //^ FUNCTIONS 
  function GETALLPERMISSIONS() { app.get('/permissions').then(response => { setAllPermissions(response.data.data); console.log(response.data.data); }) }
  function GETALLPOSITIONS() { app.get('/positions').then(response => { setAllPositions(response.data.data); console.log("POSITIONS", response.data.data); }) }

  useEffect(() => { GETALLPERMISSIONS(); GETALLPOSITIONS() }, [])

  const router = useRouter()
  //* ATTACH ROLES
  const onSubmitGreen: SubmitHandler<Inputs> = (data) => {
    console.log("GREEN", data)
    const permission_id = data.permission
    const position_id = data.position
    app.get(`/permission/attach_position/${Number(permission_id)}/${position_id}`)
      .then(response => {
        console.log(response.data);
        toast.success("دسترسی با موفقیت به جایگاه داده شد", { position: "top-right", autoClose: 2000, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
        router.refresh()
      })
      .catch(error => {
        toast.error("لطفا مقادیر درخواستی را انتخاب کنید", { position: "top-right", autoClose: 2000, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
      })
  }
  //! DETACH ROLE
  const onSubmitRed: SubmitHandler<Inputs> = (data) => {
    console.log(data, "RED")
    const permission_id = data.permission
    const position_id = data.position
    app.get(`/permission/detach_position/${Number(permission_id)}/${position_id}`)
      .then(response => {
        console.log(response.data);
        toast.success("دسترسی با موفقیت از جایگاه گرفته شد", { position: "top-right", autoClose: 1500, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
        router.refresh()
      })
      .catch(error => {
        toast.error("لطفا مقادیر درخواستی را انتخاب کنید", { position: "top-right", autoClose: 1500, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
      })
  }
  return (
    <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] space-y-3">
      <form className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-2 place-items-stretch my-10">
          {/*//& PERMISSIONS  */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black">دسترسی ها</span>
            </div>
            <select className="select select-bordered" defaultValue="دسترسی مورد نظر را انتخاب کنید" {...register("permission", { required: true })} >
              <option disabled>دسترسی مورد نظر را انتخاب کنید</option>
              {allPermissions.map((item: any) => (
                <option key={item.id} value={item.id}>{item.name_fa}</option>
              ))}
            </select>
            {errors.permission && <p className="text-sm pr-2 text-red-800 font-thin">انتخاب دسترسی الزامی است</p>}
          </label>
          {/*//& ROLES */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black">جایگاه ها</span>
            </div>
            <select className="select select-bordered" defaultValue="جایگاه مورد نظر را انتخاب کنید" {...register("position", { required: true })}>
              <option disabled>جایگاه مورد نظر را انتخاب کنید</option>
              {allPositions.map((item: any) => (
                <option key={item.id} value={item.position.id}>{item.position.title_fa}</option>
              ))}
            </select>
            {errors.position && <p className="text-sm pr-2 text-red-800 font-thin">انتخاب جایگاه الزامی است</p>}
          </label>
        </div>
        <div className="flex items-center justify-end space-x-6 w-full">
          <button className="btn bg-green-800 text-white  mx-4 hover:bg-green-600 duration-300" onClick={handleSubmit(onSubmitGreen)} >دادن دسترسی به جایگاه</button>
          <button className="btn bg-red-800 text-white mx-4 hover:bg-red-600 duration-300" onClick={handleSubmit(onSubmitRed)}  >گرفتن دسترسی از جایگاه</button>
        </div>
      </form>
    </div>
  );
}

export default PositionPermission;
