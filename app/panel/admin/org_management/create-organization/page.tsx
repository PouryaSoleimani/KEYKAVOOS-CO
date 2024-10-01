"use client";
import { createNewBrand, createNewOrganization, getAllBrands, getOrganizations } from "@/utils/utils";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrandType } from "../brands/page";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

// ^ COMPONENT ===========================================================================================================================================================================
function CreateOrganization() {
    const { token } = useSelector((state: any) => state.userData);
    const [organizations, setOrganizations] = useState([]);
    const [organizationsStatus, setOrganizationsStatus] = useState({ loading: false, error: "", });
    const [createBrand, setCreateBrand] = useState({ title: "", description: "", });
    //^ FORM STATES
    const [org_name, setOrg_name] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [user_id, setUser_id] = useState("")
    const [registration_number, setRegisteration_number] = useState("")
    const [shenase_melli, setShenase_melli] = useState("")

    //^ FORM SUBMIT
    const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Promise.all([
            await createNewOrganization(org_name, description, address, phone, user_id , shenase_melli , registration_number),
            await getOrganizations(setOrganizations, setOrganizationsStatus),
        ]);
        setCreateBrand({ title: "", description: "" });
    };

    return (
        <>
            <div className="flex items-center justify-between py-2">
                <h1 className="text-2xl font-extrabold text-[#4866cf] pr-2">ایجاد سازمان جدید</h1>
                <Link href='/panel/admin/org_management' className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
                    <IoArrowBack />
                </Link>
            </div>
            <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] space-y-3 flex flex-col gap-5">
                <form onSubmit={(e) => handleSubmission(e)} className="flex flex-col gap-3">
                    <label htmlFor="">نام سازمان</label>
                    <input type="text" value={org_name} onChange={(e) => setOrg_name(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC] mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">توضیحات</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">آدرس</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">تلفن</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">USER_ID</label>
                    <input type="text" value={user_id} onChange={(e) => setUser_id(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">شماره ثبت</label>
                    <input type="text" value={registration_number} onChange={(e) => setRegisteration_number(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">شناسه ملی</label>
                    <input type="text" value={shenase_melli} onChange={(e) => setShenase_melli(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <div className="flex justify-end my-5">
                        <button className="p-3 w-[120px] bg-[#4866CF] rounded-[4px] text-white">تایید</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateOrganization;
