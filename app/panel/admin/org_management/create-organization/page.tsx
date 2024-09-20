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
    const [name_fa, setName_fa] = useState("")
    const [name_en, setName_en] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [user_id, setUser_id] = useState("")

    //^ FORM SUBMIT
    const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Promise.all([
            await createNewOrganization(name_fa, name_en, description, address, phone, user_id),
            await getOrganizations(setOrganizations, setOrganizationsStatus),
        ]);
        setCreateBrand({ title: "", description: "" });
    };

    return (
        <>
            <div className="flex items-center justify-end py-2">
                <Link href='/panel/admin/org_management' className="bg-white rounded-lg p-3 text-xl hover:bg-[#4866CF] hover:text-white duration-300 cursor-pointer">
                    <IoArrowBack />
                </Link>
            </div>
            <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] space-y-3 flex flex-col gap-5">
                <p>ایجاد سازمان جدید</p>
                <form onSubmit={(e) => handleSubmission(e)} className="flex flex-col gap-3">
                    <label htmlFor="">اسم فارسی</label>
                    <input type="text" value={name_fa} onChange={(e) => setName_fa(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC] mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">اسم انگلیسی</label>
                    <input type="text" value={name_en} onChange={(e) => setName_en(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">توضیحات</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">آدرس</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">تلفن</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <label htmlFor="">USER_ID</label>
                    <input type="text" value={user_id} onChange={(e) => setUser_id(e.target.value)} className="bg-[#D0DBEC] border-[#D0DBEC]mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[0.3px]" />
                    <div className="flex justify-end my-5">
                        <button className="p-3 w-[120px] bg-[#4866CF] rounded-[4px] text-white">تایید</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateOrganization;
