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
type Inputs = { permission: string | number, position: string | number, role: string | number }

// ^ COMPONENT =========================================================================================================================================
function PositionRole() {
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
  function GETALLROLES() { app.get('/roles').then(response => { setAllRoles(response.data.data); console.log(response.data.data); }) }
  function GETALLPOSITIONS() { app.get('/positions').then(response => { setAllPositions(response.data.data); console.log("POSITIONS", response.data.data); }) }

  useEffect(() => { GETALLPERMISSIONS(); GETALLPOSITIONS(); GETALLROLES() }, [])

  const router = useRouter()
  //* ATTACH POSITION TO ROLE
  const onSubmitGreen: SubmitHandler<Inputs> = (data) => {
    console.log("GREEN", data)
    const role_id = data.role
    const position_id = data.position

    app.get(`/role/attach_position/${Number(role_id)}/${Number(position_id)}`)
      .then(response => {
        console.log(response.data);
        toast.success("نقش با موفقیت به جایگاه داده شد", { position: "top-right", autoClose: 2000, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
        router.refresh()
      })
      .catch((error: any) => {
        console.log(error.response);
        toast.error("لطفا مقادیر درخواستی را انتخاب کنید", { position: "top-right", autoClose: 2000, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
      })
  }
  //! DETACH POSITIONS FROM ROLE
  const onSubmitRed: SubmitHandler<Inputs> = (data) => {
    console.log(data, "RED")
    const role_id = data.role
    const position_id = data.position
    app.get(`/role/detach_position/${role_id}/${Number(position_id)}`)
      .then(response => {
        console.log(response.data);
        toast.success("نقش با موفقیت از جایگاه گرفته شد", { position: "top-right", autoClose: 1500, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
        router.refresh()
      })
      .catch((error: any) => {
        console.log(error.response)
        toast.error("لطفا مقادیر درخواستی را انتخاب کنید", { position: "top-right", autoClose: 1500, hideProgressBar: true, style: { fontSize: "14px" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });

      })
  }

  //^ RETURN ================================================================================================================================================
  return (
    <div className="bg-white shadow mx-auto rounded-lg w-full p-[3%] space-y-3">
      <form className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-2 place-items-stretch my-10">
          {/*//& ROLES */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black">نقش ها</span>
            </div>
            <select className="select select-bordered" defaultValue="نقش مورد نظر را انتخاب کنید" {...register("role", { required: true })}>
              <option disabled>نقش مورد نظر را انتخاب کنید</option>
              {allRoles.map((item: any) => (
                <option key={item.id} value={item.role.id}>{item.role.name_fa}</option>
              ))}
            </select>
            {errors.role && <p className="text-sm pr-2 text-red-800 font-thin">انتخاب نقش الزامی است</p>}
          </label>
          {/*//& POSITIONS */}
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
          <button className="btn bg-green-800 text-white  mx-4 hover:bg-green-600 duration-300" onClick={handleSubmit(onSubmitGreen)} >دادن نقش به جایگاه</button>
          <button className="btn bg-red-800 text-white mx-4 hover:bg-red-600 duration-300" onClick={handleSubmit(onSubmitRed)}  >گرفتن نقش از جایگاه</button>
        </div>
      </form>
    </div>
  );
}

export default PositionRole;
