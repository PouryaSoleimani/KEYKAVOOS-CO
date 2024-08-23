"use client";
import { useGetUserRoles } from "@/hooks/useGetUserRoles";
import {
  openModal,
  updateStatus,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import { userRoleType } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type ModalProps = {
  showModal: boolean;
  data?: any;
  text?: string;
  isLoggingIn?: boolean;
  setSteps?: Dispatch<SetStateAction<number>>;
  showOnErrorOrSuccess?: boolean;
  setShowModalOnError?: React.Dispatch<React.SetStateAction<boolean>>;
  // setStartLogin: React.Dispatch<React.SetStateAction<boolean>>;
  buttonText?: string;
  mainButtonText?: string;
  executeFunction?: any;
  executeFunction2?: any;
  setCounter?: any;
  changeNumber?: boolean;
  isLoggedIn?: boolean;
  redirect?: boolean;
  setLogWithOTP?: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginWithPass?: React.Dispatch<React.SetStateAction<boolean>>;
};
function Modal({
  showModal,
  data,
  text,
  isLoggingIn,
  isLoggedIn,
  setSteps,
  showOnErrorOrSuccess,
  setShowModalOnError,
  mainButtonText,
  setLogWithOTP,
  setLoginWithPass,
  // setStartLogin,
  buttonText,
  executeFunction,
  executeFunction2,
  setCounter,
  changeNumber,
  redirect,
}: ModalProps) {
  const { token, role, status, successMessage, userType, errorMessage } =
    useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  const router = useRouter();
  
  useEffect(() => {
    dispatch(getTokenFromLocal());
  }, []);

  useEffect(() => {
    if (isLoggedIn && token !== null) {
      if (role === "Admin") router.replace("/panel/admin/view-users");
      else router.replace("/panel/user/dashboard");
    }
  }, [isLoggedIn]);

  const handleMainButtonClick = () => {
    dispatch(openModal(false));
    setShowModalOnError && setShowModalOnError(false);
    setLogWithOTP && setLogWithOTP(true);
    setLoginWithPass && setLoginWithPass(true);
    // dispatch(updateStatus())
    if (!isLoggingIn) {
      setSteps?.(3);
    }
  };

  const handlePrimaryButtonClick = () => {
    dispatch(openModal(false));
  };

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        showModal ? "block" : "hidden"
      }  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-50 flex justify-center items-center backdrop-blur-sm h-full`}
    >
      <div className="p-4 w-full">
        <div className="relative p-8 w-full max-w-2xl max-h-full">
          <div className="bg-white rounded-[25px] shadow border">
            <div className="md:p-5 text-black font-semibold">
              <p className="text-[20px] leading-relaxed max-w-sm mx-auto py-3">
                {/* متن */}
                {/* شماره همراه ؟ شماره تماس مورد تایید است : شماره همراه را وارد کنید*/}
                {text}
              </p>
              {/* شماره موبایل */}
              {/* شماره همراه ؟ شماره همراه : "" */}
              <p className="text-[32px]">{data}</p>
            </div>

            <div
              className={`${
                showOnErrorOrSuccess ? "" : "flex items-center justify-between"
              }  p-4 md:p-5 rounded-b whitespace-nowrap`}
            >
              {/* اگر شماره موبایل بود */}

              <div
                className={`${
                  showOnErrorOrSuccess ? "flex justify-center" : ""
                }`}
              >
                <button
                  onClick={() => handleMainButtonClick()}
                  type="button"
                  // check it after login
                  className={
                    isLoggedIn || data.length === 0
                      ? "hidden"
                      : "text-white bg-[#4866CF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-5 md:py-2.5 text-center"
                  }
                >
                  {showOnErrorOrSuccess ? mainButtonText : "تایید شماره همراه"}
                </button>
              </div>
              <div
                className={`${
                  data === "" && "flex justify-center w-full text-center"
                }`}
              >
                {!showOnErrorOrSuccess && (
                  <button
                    onClick={() => handlePrimaryButtonClick()}
                    type="button"
                    className={`md:py-2.5 md:px-5 ms-3 px-5 text-sm font-medium focus:outline-none rounded-lg border border-[#4866CF] ${
                      data
                        ? "self-center bg-[#4866CF] text-white"
                        : " bg-white text-[#4866CF]"
                    }`}
                  >
                    {data.length === 0 ? "تایید" : "تغییر شماره همراه"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
