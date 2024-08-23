"use client";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import FormSlider from "./components/form-slider";
import { useSelector } from "react-redux";
import axios from "axios";
import SubmissionBtn from "./components/submission-btn";
import Logo from "./components/logo";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import { setCookie } from "cookies-next";
type ReauthProps = {
  setSteps: Dispatch<SetStateAction<number>>;
};
const Reauthenticate = ({ setSteps }: ReauthProps) => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [validOTP, setValidOTP] = useState(false);
  const [validOTPMsg, setValidOTPMsg] = useState("");
  const [counter, setCounter] = useState(90);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) return prevCounter - 1;
        return 0;
      });
    }, 1000); // 1 second

    return () => clearTimeout(timeout);
  }, [counter]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const PhoneNumber = window.localStorage.getItem("PhoneNumber");
      if (PhoneNumber !== null) {
        setPhoneNumber(PhoneNumber);
      } else {
        setPhoneNumber("");
      }
    }
  }, []);

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
        "https://keykavoos.liara.run/User/Signup4",
        {
          OTP,
          PhoneNumber,
        }
      );
      console.log(data);
      setCookie("token", data.token, {
        path: "/",
        maxAge: 24 * 60 * 60,
        secure: true,
      });
      toast.success("خوش آمدید.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        rtl: true,
        transition: Bounce,
      });
      if (data.token.length > 0) {
        router.push("/panel");
      }
    } catch (error: any) {
      setValidOTPMsg("کد وارد شده صحیح نمی باشد.");
      console.log(error);
    }
  };

  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await confirmOTP(OTP, PhoneNumber);
  };
  return (
    <div className="w-[80%] mx-auto">
      <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 font-YekanBakh rounded-3xl overflow-hidden my-[3%] shadow-2xl shadow-[13px_0_61px_-24px_rgba(0, 0, 0, 0.15)]">
        <div className="py-[8%] lg:py-0">
          <div className="p-[5%]">
            <Logo />
          </div>
          <form
            onSubmit={(e) => handleSubmission(e)}
            className="flex flex-col justify-start gap-[3%] px-[5%] h-full"
          >
            <div>
              <p className="lg:w-[90%]">
                به {PhoneNumber} یک کد تایید ارسال شد.
              </p>
              <p
                className="text-[#4866CF] text-sm cursor-pointer"
                onClick={() => setSteps(3)}
              >
                ویرایش شماره
              </p>
            </div>
            <input
              type="text"
              placeholder="کد تایید"
              className="border w-full p-[3%] rounded-md"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              maxLength={4}
              autoFocus
            />
            {validOTP !== true && (
              <p
                className={`w-[100%] ${
                  validOTPMsg && status === "failed"
                    ? "bg-black text-[0.75rem] p-[0.25rem] text-white relative -bottom-[10px] rounded-lg"
                    : "absolute -left-[9999px]"
                }`}
              >
                {validOTPMsg}
              </p>
            )}
            <div className="flex justify-between items-center">
              <span
                className="text-[#4866CF] cursor-pointer whitespace-nowrap"
                onClick={async () =>
                  counter === 0 &&
                  (await getNewOTP(PhoneNumber), setCounter(90))
                }
              >
                {counter === 0
                  ? "ارسال مجدد"
                  : `${counter} ثانیه تا ارسال مجدد.
                `}
              </span>
              <div className="w-full text-left">
                <SubmissionBtn text="تایید کد تایید" validation={true} />
              </div>
            </div>
          </form>
        </div>
        <div className="lg:block hidden">
          <FormSlider />
        </div>
      </div>
    </div>
  );
};
export default Reauthenticate;
