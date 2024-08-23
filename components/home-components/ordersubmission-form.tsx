"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import OrdersubmissionInput from "./ordersubmission-input";
import Image from "next/image";
import uploadfile from "../../public/Panel/uploadfile.svg";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { useFormik } from "formik";
import { HomeFormSubmissionSchema } from "@/schemas/userpanel-profile-schema";
type OrdersubmissionFormProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};
const initialValues = {
  FullName: "",
  PhoneNumber: "",
  email: "",
  Description: "",
};
function OrdersubmissionForm({ setCurrentStep }: OrdersubmissionFormProps) {
  const [fileId, setFileId] = useState("");

  const [File, setFile] = useState<any>(null);
  const [fileSelected, setFileSelected] = useState(false);
  const handleChangingFile = (file: File) => {
    setFile(file);
    setFileSelected(true);
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleChangingFile(file);
    }
  };
  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("File", File);
    try {
      const { data } = await axios.post(
        `https://keykavoos.liara.run/Client/UploadFile_req`,
        formData
      );
      setFileId(data.data);
      toast.success("آپلود فایل موفق بود.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
    } catch (error) {
      toast.error("خطا در آپلود فایل، لطفا مجدد آپلود کنید.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
    }
  };
  const handleFormReq = async (
    FullName: string,
    PhoneNumber: string,
    email: string,
    Description: string,
    id: string
  ) => {
    try {
      const { data } = await axios.post(
        `https://keykavoos.liara.run/Client/FormReq`,
        {
          FullName,
          PhoneNumber,
          email,
          Description,
          _id: id,
        }
      );
      toast.success("اطلاعات با موفقیت ثبت شد.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
    } catch (error) {
      toast.error("خطا در ثبت اطلاعات.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
    }
  };
  const handleSubmission = async () => {
    Promise.all([
      await handleFileUpload(),
      await handleFormReq(
        values.FullName,
        values.PhoneNumber,
        values.email,
        values.Description,
        fileId
      ),
    ]);
  };
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues,
    onSubmit: handleSubmission,
    validationSchema: HomeFormSubmissionSchema,
    validateOnMount: true,
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F8FAFC] rounded-2xl grid grid-cols-1 gap-3 px-[5%] py-[2%] w-full"
    >
      <label className="text-[#4866CF] flex justify-center sm:text-[36px] text-[30px]">
        فرم ثبت درخواست
      </label>
      <div className="flex flex-row-reverse gap-3 flex-wrap md:flex-nowrap">
        <OrdersubmissionInput
          placeholder="نام و نام خانوادگی"
          value={values.FullName}
          onChange={handleChange}
          name="FullName"
          error={errors.FullName && touched.FullName}
          onBlur={handleBlur}
        />
        <OrdersubmissionInput
          placeholder="پست الکترونیکی"
          value={values.email}
          onChange={handleChange}
          name="email"
          error={errors.email && touched.email}
          onBlur={handleBlur}
        />
        <OrdersubmissionInput
          placeholder="شماره تماس"
          value={values.PhoneNumber}
          onChange={handleChange}
          name="PhoneNumber"
          error={errors.PhoneNumber && touched.PhoneNumber}
          onBlur={handleBlur}
        />
      </div>
      <div className="flex flex-row-reverse justify-between gap-3 flex-wrap sm:flex-nowrap">
        <textarea
          className={`${
            errors.Description && touched.Description
              ? "border-indigo-400"
              : " border-[#D0DBEC]"
          } outline-none bg-white border-2 rounded-[8px] h-[100px] w-full sm:w-[50%] p-3`}
          placeholder="توضیحات تکمیلی"
          dir="rtl"
          value={values.Description}
          onChange={handleChange}
          name="Description"
        ></textarea>
        <div className="flex flex-col bg-white border-[#D0DBEC] border-2 rounded-[8px] items-center justify-center sm:w-[50%] w-full">
          <div className="flex flex-col items-center gap-[5%] whitespace-nowrap">
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label className="text-[#68707A]">انتخاب فایل</label>
            <label
              htmlFor="fileInput"
              style={{ cursor: "pointer" }}
              className="flex flex-col items-center"
            >
              {File ? File.name : <Image src={uploadfile} alt="انتخاب فایل" />}
            </label>
            <span dir="rtl" className="text-[#4f647e] text-[0.5rem]">
              فرمت های مورد قبول: zip, rar
            </span>
          </div>
        </div>
      </div>
      <button
        className="bg-[#4866CF] text-white w-[120px] p-2 rounded-lg"
        type="submit"
        disabled={isValid === false || fileSelected === false ? true : false}
      >
        ثبت درخواست
      </button>
    </form>
  );
}

export default OrdersubmissionForm;
