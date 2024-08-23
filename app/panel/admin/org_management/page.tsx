"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NotFound from "../components/NotFound";
import {
  deleteOrgan,
  getOrganizations,
  restoreOrganization,
} from "@/utils/utils";
import { useSelector } from "react-redux";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import Image from "next/image";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import { RxCross1 } from "react-icons/rx";

function OrgManagement() {
  const { token } = useSelector((state: any) => state.userData);
  const [organizations, setOrganizations] = useState([]);
  const [organIsDeleted, setOrganIsDeleted] = useState(false);
  const [organizationsStatus, setOrganizationsStatus] = useState({
    loading: false,
    error: "",
  });

  useEffect(() => {
    getOrganizations(token, setOrganizations, setOrganizationsStatus);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex gap-5">
        <Link
          href={`/panel/admin/org_management/brands`}
          className="text-white bg-[#4866CF] p-2 rounded-[5px]"
        >
          برندها
        </Link>
        <Link
          href={`/panel/admin/org_management/departments`}
          className="text-white bg-[#4866CF] p-2 rounded-[5px]"
        >
          دپارتمان ها
        </Link>
      </div>
      <div className="bg-white shadow mx-auto rounded-2xl w-full p-[3%] text-center space-y-3">
        <div className="grid lg:grid-cols-5 grid-cols-12">
          <div className="col-span-1">ردیف</div>
          <div className="col-span-2 lg:col-span-1">نام سازمان</div>
          <div className="col-span-3 lg:col-span-1">شماره تلفن سازمان</div>
          <div className="col-span-3 lg:col-span-1">آدرس سازمان</div>
          <div className="col-span-3 lg:col-span-1">عملیات</div>
        </div>

        <div>
          {organizationsStatus.loading ? (
            <SkeletonTheme>
              <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
            </SkeletonTheme>
          ) : organizationsStatus.error ? (
            <NotFound text={`${organizationsStatus.error}`} />
          ) : (
            <div>
              {organizations?.map(
                (
                  item: {
                    name: string;
                    phone: number;
                    address: string;
                    id: number;
                  },
                  index
                ) => (
                  <div
                    className="grid lg:grid-cols-5 grid-cols-12 bg-[#EAEFF6] caret-transparent cursor-default text-center gap-x-5 py-1 rounded-[4px]"
                    key={item.id}
                  >
                    <p className="col-span-1">{index + 1}</p>
                    <p className="col-span-2 lg:col-span-1">{item.name}</p>
                    <p className="col-span-3 lg:col-span-1">{item.phone}</p>
                    <p className="col-span-3 lg:col-span-1">{item.address}</p>
                    <div className="flex flex-row items-center justify-center lg:gap-3 col-span-3 gap-1 lg:col-span-1">
                      <Link
                        href={`/panel/admin/org_management/org-detail?id=${item.id}`}
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
                          deleteOrgan(item.id, token, setOrganIsDeleted)
                        }
                        className="flex justify-center cursor-pointer"
                      >
                        <RxCross1 className="text-red-600 text-lg" />
                      </span>
                      <span
                        onClick={() =>
                          restoreOrganization(item.id, token, setOrganIsDeleted)
                        }
                      >
                        <MdOutlineSettingsBackupRestore className="text-yellow-600 text-lg cursor-pointer" />
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrgManagement;
