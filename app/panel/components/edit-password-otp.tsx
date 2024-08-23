import SubmissionBtn from "@/app/auth/components/submission-btn";
import React, { FormEvent } from "react";
import { useSelector } from "react-redux";

type EditPasswordOTPProps = {
  confirmOTP: (OTP: string, PhoneNumber: string) => Promise<void>;
  getNewOTP: (PhoneNumber: string) => Promise<void>;
  OTP: string;
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  validOTPMsg: string;
  validOTP: boolean;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>
};
const EditPasswordOTP = ({
  getNewOTP,
  confirmOTP,
  OTP,
  setOTP,
  validOTPMsg,
  validOTP,
  counter,
  setCounter
}: EditPasswordOTPProps) => {
  const { userProfile } = useSelector((state: any) => state.userRole);
  const handleOTPSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await confirmOTP(OTP, userProfile.PhoneNumber);
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleOTPSubmission(e)}
        className="flex flex-col gap-2"
      >
        <label>به {userProfile.PhoneNumber} یک کد تایید ارسال شد.</label>
        <input
          maxLength={4}
          value={OTP}
          onChange={(e) => setOTP(e.target.value)}
          className="bg-[#EDF0FB] rounded-lg w-[30%] p-1"
          disabled={validOTP}
        />
        {validOTP !== true && status === "failed" && (
          <span
            className={`flex w-[30%] ${
              validOTPMsg
                ? "bg-black text-[0.75rem] p-[0.25rem] text-white relative -bottom-[10px] rounded-lg mb-2"
                : "absolute -left-[9999px]"
            }`}
          >
            {validOTPMsg}
          </span>
        )}
        <div className="flex w-[30%] items-center">
          <span
            className="text-[#4866CF] cursor-pointer whitespace-nowrap"
            onClick={async () =>
              counter === 0 &&
              (await getNewOTP(userProfile.PhoneNumber), setCounter(90))
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
  );
};

export default EditPasswordOTP;
