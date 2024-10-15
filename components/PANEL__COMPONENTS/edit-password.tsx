"use client";
import React, { FormEvent, useEffect, useState } from "react";
import InfoFields from "./info-fields";
import axios from "axios";
import SubmissionBtn from "@/app/auth/components/submission-btn";
import ProfileDropdown from "./profile-dropdown";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./profile-button";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { deleteToken } from "@/redux/features/user/userSlice";
import ShowPassStrength from "./showpass-strength";
import { passwordStrength } from "check-password-strength";
import { getCookie, setCookie } from "cookies-next";
import { Bounce, toast } from "react-toastify";
import EditPasswordOTP from "./edit-password-otp";

type EditPasswordProps = {
  userProfile: any;
};

type passwordStrengthType = 0 | 1 | 2 | 3;

const EditPassword = ({ userProfile }: EditPasswordProps) => {
  const { localToken } = useSelector((state: any) => state.userRole);
  const [showDropdown, setShowDropdown] = useState(false);
  const [counter, setCounter] = useState(90);
  const [OTPRequest, setOTPRequest] = useState(false);
  const [Strength, setStrength] = useState<passwordStrengthType>(0);
  const [showPass, setShowPass] = useState({
    showOldPass: false,
    showNewPass: false,
    showConfirm: false,
  });
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) return prevCounter - 1;
        return 0;
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [counter]);
  const [EditPassword, setEditPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [OTP, setOTP] = useState("");
  const [validOTPMsg, setValidOTPMsg] = useState("");
  const [validOTP, setValidOTP] = useState(false);
  const [validPasswordMatch, setValidPasswordMatch] = useState(false);
  const [ConfirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [status, setStatus] = useState("");

  const handleChangingPassowrdViaOldPass = async (
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string
  ) => {
    try {
      const { data } = await axios.put(
        "https://keykavoos.liara.run/User/ChangePassword",
        {
          oldPassword,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            authorization: `Bearer ${localToken}`,
          },
        }
      );
      Swal.fire({
        title: "رمز عبور با موفقیت تغییر کرد.",
        text: "لطفا دوباره وارد شوید.",
        icon: "success",
      });
      dispatch(deleteToken());
      router.replace("/");
      console.log(data);
    } catch (error: any) {
      toast.error("تغییر رمز ناموفق بود.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
      console.log(error);
    }
  };

  const handleChangingPassowrdViaOTP = async (
    OTP: string,
    newPassword: string,
    confirmNewPassword: string
  ) => {
    try {
      const { data } = await axios.put(
        "https://keykavoos.liara.run/User/ResetPassword",
        {
          OTP,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );
      Swal.fire({
        title: "رمز با موفقیت تغییر کرد.",
        text: "لطفا دوباره وارد شوید.",
        icon: "success",
      });
      dispatch(deleteToken());
      router.replace("/");
      console.log(data);
    } catch (error: any) {
      toast.error("تغییر رمز ناموفق بود.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
      console.log(error);
    }
  };

  const getNewOTP = async (PhoneNumber: string) => {
    try {
      const { data } = await axios.post(
        "https://keykavoos.liara.run/User/getOTP",
        {
          PhoneNumber,
        }
      );
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const confirmOTP = async (OTP: string, PhoneNumber: string) => {
    try {
      const { data } = await axios.post(
        "https://keykavoos.liara.run/User/SendOTP",
        {
          OTP,
          PhoneNumber,
        }
      );
      console.log("confirm OTP token" + data.token);
      setValidOTP(true);
      setCookie("token", data.token, {
        path: "/",
        maxAge: 24 * 60 * 60,
        secure: true,
      });
      setStatus("success");
    } catch (error: any) {
      setValidOTPMsg("کد وارد شده صحیح نمی باشد.");
      setStatus("failed");
      console.log(error.response.data.message);
    }
  };

  const handleMainFormSubmission = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (OTPRequest) {
      await handleChangingPassowrdViaOTP(
        OTP,
        EditPassword.newPassword,
        EditPassword.confirmNewPassword
      );
    } else {
      await handleChangingPassowrdViaOldPass(
        EditPassword.oldPassword,
        EditPassword.newPassword,
        EditPassword.confirmNewPassword
      );
    }
  };

  useEffect(() => {
    setValidPasswordMatch(
      EditPassword.confirmNewPassword === EditPassword.newPassword
    );
  }, [EditPassword.confirmNewPassword, EditPassword.newPassword]);

  useEffect(() => {
    setStatus("");
  }, [OTP]);

  let validViaPass =
    EditPassword.newPassword.length === 0 ||
    EditPassword.oldPassword.length === 0 ||
    EditPassword.confirmNewPassword.length === 0;

  let validViaOTP =
    EditPassword.confirmNewPassword === " " ||
    EditPassword.newPassword === " " ||
    validPasswordMatch === false;

  return (
    <div className="bg-white flex flex-col rounded-3xl">
      <ProfileDropdown
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
        title="ویرایش رمز عبور"
      />

      {!showDropdown ? (
        ""
      ) : (
        <div className="grid grid-cols-1 w-full px-[3%] py-[3%] gap-y-4">
          <form
            className="grid grid-cols-1 w-full gap-4"
            onSubmit={(e) => handleMainFormSubmission(e)}
          >
            <div className="grid grid-cols-2 gap-[3%]">
              <InfoFields
                title="رمز قدیم"
                info={EditPassword.oldPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEditPassword((last) => ({
                    ...last,
                    oldPassword: e.target.value,
                  }))
                }
                type={showPass.showOldPass ? "text" : "password"}
                required={true}
                disable={OTPRequest}
                show={showPass.showOldPass}
                setShow={() =>
                  setShowPass((last) => ({
                    showConfirm: false,
                    showNewPass: false,
                    showOldPass: !last.showOldPass,
                  }))
                }
              />
              <div className="flex justify-center text-center">
                <div
                  onClick={() => (
                    setOTPRequest(true), getNewOTP(userProfile.PhoneNumber)
                  )}
                  className="bg-[#4866CF] w-[40%] text-white rounded-lg p-[2%] cursor-pointer"
                >
                  فراموشی رمز
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-[3%]">
              <div className="">
                <InfoFields
                  title="رمز جدید"
                  info={EditPassword.newPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditPassword((last) => ({
                      ...last,
                      newPassword: e.target.value,
                    }))
                  }
                  type={showPass.showNewPass ? "text" : "password"}
                  required={true}
                  name="newPassword"
                  passwordStrength={passwordStrength}
                  setStrength={setStrength}
                  validOTP={validOTP}
                  show={showPass.showNewPass}
                  setShow={() =>
                    setShowPass((last) => ({
                      showConfirm: false,
                      showOldPass: false,
                      showNewPass: !last.showNewPass,
                    }))
                  }
                  strength={Strength}
                />
                <div className="relative left-16">
                  <ShowPassStrength strength={Strength} />
                </div>
              </div>
              <div className="flex flex-col">
                <InfoFields
                  title="تکرار رمز جدید"
                  info={EditPassword.confirmNewPassword}
                  type={showPass.showNewPass ? "text" : "password"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditPassword((last) => ({
                      ...last,
                      confirmNewPassword: e.target.value,
                    }))
                  }
                  required={true}
                  aria-describedby="confirmnote"
                  onFocus={() => setConfirmPasswordFocus(true)}
                  onBlur={() => setConfirmPasswordFocus(false)}
                  show={showPass.showConfirm}
                  setShow={() =>
                    setShowPass((last) => ({
                      showConfirm: !last.showConfirm,
                      showOldPass: false,
                      showNewPass: false,
                    }))
                  }
                />
                <p
                  id="confirmnote"
                  className={
                    ConfirmPasswordFocus &&
                    EditPassword.confirmNewPassword &&
                    !validPasswordMatch
                      ? " text-red-400 text-[0.75rem] p-[0.25rem] rounded-lg relative text-center -bottom-[10px]"
                      : "absolute -left-[9999px]"
                  }
                >
                  پسووردها همخوانی ندارند.
                </p>
              </div>
            </div>
            <ProfileButton
              setShowDropdown={setShowDropdown}
              disable={OTPRequest ? validViaOTP : validViaPass}
            />
          </form>
          {OTPRequest && (
            <EditPasswordOTP
              confirmOTP={confirmOTP}
              getNewOTP={getNewOTP}
              OTP={OTP}
              setOTP={setOTP}
              validOTPMsg={validOTPMsg}
              validOTP={validOTP}
              counter={counter}
              setCounter={setCounter}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default EditPassword;
