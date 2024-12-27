// ^ USER SETTINGS - GENIUNE USER ======================================================================================================================
"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import PanelFields from "../../components/panel-fileds";
import axios from "axios";
import { useFormik } from "formik";
import SettingsFileupload from "./components/settings-fileupload";
import { Bounce, toast } from "react-toastify";
import app from "@/services/service";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "@/redux/features/user/userSlice";
import USER__DEFAULT from '/USER__DEFAULT.png'
import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaKey } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form"

const initialValues = { FirstName: "", LastName: "", email: "", mobile: "", };

type GenuineProps = { PhoneNumber: string; userId: string; token: string; };
type Inputs = { passwordChange: string }


//^ COMPONENT ==========================================================================================================================================================================
function Genuine({ userId, token }: GenuineProps) {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [USERID, SETUSERID] = useState(null)
  const handleFileChange = (file: File) => { setSelectedFile(file); };
  const { userProfile } = useSelector((state: any) => state.userData);
  const [passwordInputType, setPasswordInputType] = useState("")
  const dispatch = useDispatch();

  //* NOTIFICATIONS
  const notifySuccess = () => toast.success("آپلود فایل موفقیت آمیز بود", { style: { border: '2px solid #4866CF', padding: '7px', color: '#303030', fontSize: "14px", fontWeight: "400" }, })
  const notifyError = () => toast.error("خطا در آپلود فایل، لطفا مجددا آپلود کنید", { style: { border: '2px solid #4866CF', padding: '7px', color: '#303030', fontSize: "14px", fontWeight: "400" }, })

  function showUserProfile() { console.log("USER PROFILE_PIC PATH ==>", userProfile.pic_path); console.log(userProfile); SETUSERID(userProfile.id) }
  useEffect(() => { showUserProfile() }, [])
  const USER_PROFILE_PIC = userProfile.pic_path

  //^ FUNCTIONS
  const handleAvatar = async () => {
    const formData = new FormData();
    formData.append("pic", selectedFile);
    try {
      const { data } = await app.post(`/upload/profile_pic/${userId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
      console.log("%c AVATAR UPLOAD SUCCESS", "color : limegreen", data);
      // check
      dispatch(updateUserProfile({ ...userProfile, pic_path: data.data.pic_path, }));
      notifySuccess()
      setSelectedFile({ name: "آپلود فایل" })
      location.reload()
    } catch (error: any) {
      notifyError()
      console.log(error.response);
    }
  };

  const GenuineSubmission = async (name: string, surname: string, email: string, mobile: string) => {
    try {
      const { data } = await app.put(`/user/update/${userId}`, { name, surname, email, mobile, });
      dispatch(updateUserProfile({ ...userProfile, name, surname, email, mobile, }));
      toast.success("ویرایش اطلاعات با موفقیت انجام شد", { position: "top-right", autoClose: 2000, style: { fontSize: "14px", whiteSpace: "nowrap" }, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
      console.log(data);
    } catch (error: any) {
      toast.error("خطا در ویرایش اطلاعات", { position: "top-right", autoClose: 2000, style: { fontSize: "14px", whiteSpace: "nowrap" }, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
      console.log(error.response);
    }
  };
  //* HANDLE SUBMISSION 
  const router = useRouter()
  const handleSubmission = async () => {
    Promise.all([await GenuineSubmission(values.FirstName, values.LastName, values.email, values.mobile), router.refresh()]);
  };

  const { values, handleChange, handleSubmit } = useFormik({ initialValues, onSubmit: handleSubmission, });

  //? PASSWORD INPUT TYPE CHANGER
  function passwordInputTypeHandler() {
    if (passwordInputType == "password") {
      setPasswordInputType("text")
    } else {
      setPasswordInputType("password")
    }
  }

  // * HANDLE PROFILE PIC
  function handleProfilePic(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const PROFILE_PIC_FILE = event.target.files?.[0]
    let FORM__DATA = new FormData()
    FORM__DATA.append("pic", PROFILE_PIC_FILE as File)
    app.post(`/upload/profile_pic`, { pic: PROFILE_PIC_FILE }, { headers: { "Content-Type": "multipart/form-data" } })
      .then(response => console.log(response.data, FORM__DATA))
      .catch((error: any) => console.log(error.response, FORM__DATA))
  }
  function HANDLESUBMIT() {
    router.refresh()
    console.log("SUBMIT SUBMIT SUBMIT")
  }

  // ! PASSWORD CHANGE
  const { register, handleSubmit: handeSubmitPassword, watch, formState: { errors }, } = useForm<Inputs>()
  const onSubmitPassword: SubmitHandler<Inputs> = (data) => { console.log(data) }
  //^  RETURN =====================================================================================================================================================
  return (
    <>
      {/* CHANGE PASSWORD MODAL */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-center">تغییر رمز عبور کاربری</h3>
          <form className="flex flex-col items-center justify-center gap-y-4 w-full my-10" onSubmit={handeSubmitPassword(onSubmitPassword)}>
            <label className="input input-bordered flex items-center gap-2">
              <FaKey />
              <input type={passwordInputType} className="grow mt-1 text-lg text-zinc-700" />
              <IoEye className="w-5 h-5" onClick={passwordInputTypeHandler} />
            </label>
            <button type="submit" className="btn btn-success w-1/2 mx-auto text-white font-medium">تایید</button>
          </form>

        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
      {/* ************************* */}

      <form className="flex flex-col lg:gap-2 items-center lg:items-end gap-12" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5%]">
          <div className="flex flex-col justify-between gap-2 px-2">
            <PanelFields label="نام : " onChange={handleChange} value={values.FirstName} name="FirstName" placeholder={userProfile?.name} />
            <PanelFields label="نام خانوادگی : " onChange={handleChange} value={values.LastName} name="LastName" placeholder={userProfile?.surname} />
            <PanelFields label="ایمیل : " onChange={handleChange} value={values.email} name="email" placeholder={userProfile?.email ? userProfile.email : "---"} />
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-start justify-start pt-5">
            {/* <SettingsFileupload handleChange={handleFileChange} selectedFile={selectedFile} label="عکس کاربری:" /> */}
            <div className="flex flex-col pt-6 justify-start gap-y-4 h-inherit w-full lg:w-1/2">
              <div className="flex flex-row items-center gap-2 whitespace-nowrap">
                <label>فایل</label>
                <input id="fileInput" type="file" required style={{ display: "none" }} onChange={event => handleProfilePic(event)} />
                <label htmlFor="fileInput" style={{ cursor: "pointer" }} className="rounded-md px-3 w-[120px] py-2 bg-[#4866CF] hover:bg-blue-800 duration-300 flex flex-row-reverse justify-between space-x-4 items-center" >
                  <MdOutlineFileUpload className="w-6 h-6 text-white" />
                  <span className="text-white text-[14px] hover:text-white flex items-center justify-center text-center mx-0">
                    آپلود فایل
                  </span>
                </label>
              </div>
              <p className="text-start w-full py-2  tracking-tighter leading-7 text-[#858585] font-faNum text-md ">
                فقط فایل های jpg / jpeg / png  حداکثر حجم 2MB حداقل سایز تصویر
                انتخابی باید(200px*200px) باشد.
              </p>
            </div>
            {USER_PROFILE_PIC ? (
              <div className="flex justify-center items-center w-full lg:w-full p-8 lg:p-2 h-full">
                <Image alt="profile" src={`https://back.keykavoos.co/storage/${userProfile.pic_path}`} className="rounded-full flex items-center justify-center text-[10px] text-zinc-600 p-0" width={650} height={32} />
              </div>
            ) : (
              <div className="flex justify-center items-center w-full lg:w-1/2 p-8 lg:p-2 h-full">
                <Image src="/USER__DEFAULT.png" alt="عکس انتخاب شده" width={600} height={600} className="rounded-full lg:translate-x-4" />
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end px-2 lg:px-8 -translate-y-2 ">
          <button className="bg-[#4866CF] text-white w-full lg:w-1/2 py-3 rounded-md hover:bg-blue-800 duration-300 tracking-wide" onClick={handleSubmission}> تایید  ویرایش</button>
        </div>
        <div className="w-full flex items-center justify-start -translate-y-16 gap-x-4">
          <label htmlFor="my_modal_7" className="btn bg-cyan-600 text-white font-medium">تغییر رمز عبور</label>
          <button className="btn btn-error w-1/5 font-medium text-white hover:bg-red-700 duration-500">حذف حساب کاربری</button>
        </div>
      </form>
    </>
  );
}

export default Genuine;
