"use client";
import {
  deleteBrand,
  getAllBrands,
  restoreBrand,
  updateBrand,
} from "@/utils/utils";
import React, { useEffect, useState } from "react";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import NotFound from "../../components/NotFound";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NewInfoOnEachPageBtn from "@/app/panel/user/components/NewInfoOnEachPageBtn";

export type BrandType = {
  brand: {
    title: string;
    description: string;
    id: number;
    deleted_at: string;
  };
};
function Brands() {
  const [brands, setBrands] = useState<BrandType[]>([]);
  const { token } = useSelector((state: any) => state.userData);
  const [brandIsDeleted, setBrandIsDeleted] = useState(false);
  const [brandStatus, setBrandStatus] = useState({
    loading: false,
    error: "",
  });
  useEffect(() => {
    getAllBrands(setBrands, setBrandStatus);
  }, []);

  const [editField, setEditField] = useState({
    showEditField: false,
    editTitle: "",
    editDesc: "",
  });

  const handleBrandEdit = async (id: number) => {
    const selectedBrand = brands.find(
      (item: BrandType) => item.brand.id === id
    );

    if (selectedBrand) {
      setBrands((last) =>
        last.map((item: BrandType) =>
          item.brand.id === id
            ? {
                ...item,
                brand: {
                  ...item.brand,
                  title:
                    editField.editTitle !== ""
                      ? editField.editTitle
                      : item.brand.title,
                  description:
                    editField.editDesc !== ""
                      ? editField.editDesc
                      : item.brand.description,
                },
              }
            : item
        )
      );
    }
    console.log("brands", brands);
    await updateBrand(token, id, editField.editTitle, editField.editDesc);
  };
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex">
        <NewInfoOnEachPageBtn
          btnText="ایجاد برند"
          src="/panel/admin/org_management/brands/create-brand"
        />
      </div>
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center grid grid-cols-1 gap-5">
        <div className="grid lg:grid-cols-4 grid-cols-9">
          <div className="col-span-1">ردیف</div>
          <div className="col-span-2 lg:col-span-1">نام برند</div>
          <div className="col-span-3 lg:col-span-1">توضیحات</div>
          <div className="lg:grid-cols-1 grid-cols-3">عملیات</div>
        </div>
        {brandStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : brandStatus.error ? (
          <NotFound text={`${brandStatus.error}`} />
        ) : (
          <div>
            {brands.map(
              (
                item: {
                  brand: {
                    title: string;
                    description: string;
                    id: number;
                    deleted_at: string;
                  };
                },
                index
              ) => (
                <div
                  className={`${
                    item.brand.deleted_at
                      ? "bg-red-300"
                      : "bg-[#EAEFF6]"
                  } grid lg:grid-cols-4 grid-cols-9 gap-x-5 text-center py-1 rounded-[4px] cursor-pointer items-center`}
                  key={index}
                >
                  <p className="col-span-1">{index + 1}</p>
                  <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center outline-none col-span-2 lg:col-span-1">{item.brand.title}</p>
                  <p className="bg-[#EAEFF6] caret-transparent cursor-default text-center outline-none col-span-3 lg:col-span-1">
                    {item.brand.description ? item.brand.description : "-"}
                  </p>
                  <div className="flex flex-row items-center justify-center gap-3 lg:grid-cols-1 grid-cols-3">
                    <Link
                      href={`/panel/admin/org_management/brands/brand-detail?id=${item.brand.id}`}
                      className="flex justify-center"
                    >
                      <Image
                        src={vieweye}
                        alt="مشاهده"
                        width={20}
                        height={20}
                      />
                    </Link>
                    <span
                      onClick={() =>
                        deleteBrand(item.brand.id, token, setBrandIsDeleted)
                      }
                      className="flex justify-center"
                    >
                      <RxCross1 className="text-red-600 text-lg" />
                    </span>
                    <span
                      onClick={() =>
                        restoreBrand(item.brand.id, token, setBrandIsDeleted)
                      }
                    >
                      <MdOutlineSettingsBackupRestore className="text-yellow-600 text-lg" />
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Brands;
