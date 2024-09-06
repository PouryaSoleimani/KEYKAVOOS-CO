/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import vieweye from "@/public/ViewUsers/vieweye.svg";
import {
  deleteNewsLetter,
  getAllNewsletters,
  restoreBrand,
  restoreNewsletter,
} from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";


import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import NotFound from "../components/NotFound";
import NewInfoOnEachPageBtn from "../../user/components/NewInfoOnEachPageBtn";
import { IoReloadCircle } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";

function NewsLetter() {
  const [newsLetters, setNewsLetters] = useState([]);
  const { token } = useSelector((state: any) => state.userData);
  const [newsletterIsDeleted, setNewsLetterIsDeleted] = useState(false);
  const [newLetterStatus, setNewsLetterStatus] = useState({ loading: false, erorr: "", });

  useEffect(() => { getAllNewsletters(token, setNewsLetters, setNewsLetterStatus); }, []);

  const [editField, setEditField] = useState({ showEditField: false, editTitle: "", editDesc: "", });

  return (
    <div className="gap-5 grid grid-cols-1">
      <div className="flex">
        <NewInfoOnEachPageBtn
          btnText="ایجاد خبرنامه جدید"
          src="/panel/admin/newsletter/create-newsletter"
        />
      </div>
      <div className="space-y-3 bg-white shadow mx-auto p-[3%] rounded-2xl w-full text-center">
        <div className="grid grid-cols-4">
          <div>ردیف</div>
          <div>عنوان خبرنامه</div>
          <div>توضیحات</div>
          <div>عملیات</div>
        </div>

        {newLetterStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : newLetterStatus.erorr ? (
          <NotFound text={`${newLetterStatus.erorr}`} />
        ) : (
          newsLetters.map((item: any, index) => (
            <div
              className={`${item.deleted_at ? "bg-red-100" : "bg-[#EAEFF6]"
                } grid grid-cols-4 gap-x-5 text-center py-4 rounded-[4px]`}
              key={index}
            >
              <p>{index + 1}</p>
              <input
                value={item.title}
                readOnly={true}
                className={`${item.deleted_at
                  ? "bg-transparent caret-transparent cursor-default text-center"
                  : "bg-[#EAEFF6] caret-transparent cursor-default text-center"
                  } outline-none`}
              />
              <input
                value={item.description}
                readOnly={true}
                className={`${item.deleted_at
                  ? "bg-transparent caret-transparent cursor-default text-center"
                  : "bg-[#EAEFF6] caret-transparent cursor-default text-center"
                  } outline-none`}
              />
              <div className="flex flex-row justify-center items-center gap-5">
                <span onClick={() => deleteNewsLetter(token, item.id, setNewsLetterIsDeleted, setNewsLetters)} className="flex justify-center"  >
                  <RiDeleteBin7Fill className="text-red-600 text-xl hover:scale-125 duration-300 cursor-pointer" />
                </span>
                <span onClick={() => restoreNewsletter(token, item.id, setNewsLetterIsDeleted, setNewsLetters)}>
                  <IoReloadCircle className={`${item.deleted_at ? "text-green-600" : "text-yellow-600 "} text-2xl hover:scale-125 duration-300 cursor-pointer`} />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NewsLetter;
