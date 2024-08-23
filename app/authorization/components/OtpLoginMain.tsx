import FormInput from "@/app/contact-us/components/form/form-inputs";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import MathProblemComponent from "./math-problem-component";
import SubmissionBtn from "./submission-btn";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/redux/features/user/userSlice";

type OtpLoginMainProps = {
  PhoneNumber: string;
  onSubmitHandler: (e?: React.FormEvent<HTMLFormElement>) => void;
  onChangeHandler: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  phoneNumberError: string | undefined;
  isValid: boolean;
  setAnswer: Dispatch<SetStateAction<string>>;
  answer: string;
  mathProblem: string;
  wrongAnswerMessage: string;
  result: boolean;
  children?: React.ReactNode;
  isLoggingIn: boolean;
  setIsLoggingIn: React.Dispatch<React.SetStateAction<boolean>>;
};

function OtpLoginMain({
  PhoneNumber,
  onSubmitHandler,
  onChangeHandler,
  phoneNumberError,
  isValid,
  setAnswer,
  answer,
  mathProblem,
  wrongAnswerMessage,
  result,
  children,
  isLoggingIn,
  setIsLoggingIn,
}: OtpLoginMainProps) {
  const { showModal } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 gap-6">
      <form className="flex flex-col gap-5" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col justify-end">
            <FormInput
              onChange={onChangeHandler}
              value={PhoneNumber}
              label="شماره تماس"
              type="tel"
              name="PhoneNumber"
              error={phoneNumberError}
              autoFocus={true}
            />
            <div className="relative">
              {phoneNumberError && (
                <p className="text-red-500 absolute left-1/2 -translate-x-1/2 w-full z-20">{`${phoneNumberError}`}</p>
              )}
            </div>
          </div>
          <div>{children}</div>
        </div>
        <div className="grid grid-cols-2 md:gap-[8%] gap-[5%]">
          <FormInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAnswer(e.target.value)
            }
            value={answer}
            label="جواب سوال"
            name="answer"
          />
          <MathProblemComponent
            mathProblem={mathProblem}
            wrongAnswerMessage={wrongAnswerMessage}
          />
        </div>
        <SubmissionBtn
          text="ورود"
          validation={isValid && result}
          type={showModal ? "button" : "submit"}
        />
      </form>
      {/* <LoginVia /> */}
      <div className="text-[16px] flex flex-row gap-1 justify-center items-center">
        <p>حساب کاربری ندارید؟</p>
        <span>
          <span
            onClick={() => dispatch(openModal(true), setIsLoggingIn(false))}
            className="text-[#4866CF] cursor-pointer"
          >
            ثبت نام
          </span>{" "}
          کنید.
        </span>
      </div>
    </div>
  );
}

export default OtpLoginMain;
