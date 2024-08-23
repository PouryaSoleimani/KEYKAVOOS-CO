"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../authorization/components/logo";
import { useFormik } from "formik";
import { LoginSchema } from "@/schemas/userpanel-profile-schema";
import Modal from "@/components/modal";
import { AuthContext } from "./context/AuthContext";
import { useCaptcha } from "@/hooks/useCaptcha";
import styles from "./styles/login.module.css";
import OtpLoginMain from "./components/OtpLoginMain";
import { useStoreNumInLocal } from "@/hooks/useStoreNumInLocal";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../contact-us/components/form/form-inputs";
import {
  fetchUserInLoginWithPassword,
  openModal,
  updateStatus,
} from "@/redux/features/user/userSlice";
import { sendOTPCodeMain } from "@/utils/utils";
import { useDebounce } from "use-debounce";

type LoginProps = {
  setLoginApproach: React.Dispatch<React.SetStateAction<number>>;
  loginApproach: number;
  isLoggingIn: boolean;
  setIsLoggingIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({
  setLoginApproach,
  loginApproach,
  isLoggingIn,
  setIsLoggingIn,
}: LoginProps) => {
  const { setAuthSteps } = useContext(AuthContext);
  const {
    showModal,
    isLoggedIn,
    errorMessage,
    successMessage,
    errorOnProfileHandler,
    status,
    token,
  } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  const [logwithOTP, setLogwithOTP] = useState(false);
  const [loginwithPass, setLoginwithPass] = useState(false);

  const handleSubmission = async () => {
    setIsLoggingIn(true);
    dispatch(openModal(true));
  };

  const { values, errors, handleSubmit, handleChange, isValid } = useFormik({
    initialValues: {
      PhoneNumber: "",
      Password: "",
    },
    onSubmit: handleSubmission,
    validationSchema: LoginSchema,
    validateOnMount: true,
  });

  const { result, setAnswer, answer, mathProblem, wrongAnswerMessage } =
    useCaptcha(values.PhoneNumber, setLoginwithPass);
  useStoreNumInLocal(values.PhoneNumber);
  const [debouncedAnswer] = useDebounce(answer, 700);

  useEffect(() => {
    if (result && loginApproach === 0 && logwithOTP && !token) {
      sendOTPCodeMain(values.PhoneNumber, setAuthSteps);
    }
    return;
  }, [
    loginApproach,
    logwithOTP,
    result,
    setAuthSteps,
    values.PhoneNumber,
    dispatch,
    token,
  ]);

  useEffect(() => {
    if (result && loginApproach === 1 && loginwithPass && !token) {
      // console.log("first");
      dispatch<any>(
        fetchUserInLoginWithPassword({
          mobile: values.PhoneNumber,
          password: values.Password,
        })
      );
      setAnswer("");
    }
  }, [loginApproach, loginwithPass, token, dispatch, result, answer, status]);

  useEffect(() => {
    if (status === "failed" && loginApproach === 1 && loginwithPass && result) {
      // console.log("second");
      dispatch<any>(
        fetchUserInLoginWithPassword({
          mobile: values.PhoneNumber,
          password: values.Password,
        })
      );
    }
  }, [status]);

  return (
    <React.Fragment>
      <div
        className="mx-auto grid grid-cols-1 font-YekanBakh rounded-3xl overflow-hidden shadow-2xl shadow-[13px_0_61px_-24px_rgba(0, 0, 0, 0.15)]"
        dir="rtl"
      >
        <div className="py-[5%] w-full relative px-[5%]">
          {errorMessage === "" && successMessage === "" && (
            <Modal
              showModal={showModal}
              data={values.PhoneNumber ? values.PhoneNumber : ""}
              text={
                values.PhoneNumber
                  ? "شماره تماس زیر مورد تایید است؟"
                  : "شماره همراه خود را وارد کنید."
              }
              setSteps={setAuthSteps}
              isLoggingIn={isLoggingIn}
              isLoggedIn={isLoggedIn}
              showOnErrorOrSuccess={false}
              setLogWithOTP={setLogwithOTP}
              setLoginWithPass={setLoginwithPass}
            />
          )}
          {errorMessage !== "" && !errorOnProfileHandler && (
            <Modal
              showModal={showModal}
              data=" "
              text={errorMessage}
              mainButtonText="متوجه شدم"
              showOnErrorOrSuccess={true}
            />
          )}
          {successMessage !== "" && !errorOnProfileHandler && (
            <Modal
              showModal={showModal}
              data=""
              text={successMessage}
              mainButtonText="متوجه شدم"
              showOnErrorOrSuccess={true}
              isLoggedIn={isLoggedIn}
            />
          )}
          <Logo />
          <div className="flex flex-row justify-between items-center mb-8">
            <span
              onClick={() => setLoginApproach(0)}
              className={
                loginApproach === 0
                  ? `${styles.approach} cursor-default`
                  : "border-none cursor-pointer"
              }
            >
              ورود با کد تایید
            </span>
            <span
              onClick={() => setLoginApproach(1)}
              className={
                loginApproach === 1
                  ? `${styles.approach} cursor-default`
                  : "border-none cursor-pointer"
              }
            >
              ورود با رمز عبور
            </span>
          </div>

          {loginApproach === 0 ? (
            <OtpLoginMain
              PhoneNumber={values.PhoneNumber}
              onChangeHandler={handleChange}
              phoneNumberError={errors.PhoneNumber}
              isValid={isValid}
              onSubmitHandler={handleSubmit}
              answer={answer}
              mathProblem={mathProblem}
              setAnswer={setAnswer}
              wrongAnswerMessage={wrongAnswerMessage}
              result={result}
              isLoggingIn={isLoggingIn}
              setIsLoggingIn={setIsLoggingIn}
            />
          ) : (
            <OtpLoginMain
              PhoneNumber={values.PhoneNumber}
              onChangeHandler={handleChange}
              phoneNumberError={errors.PhoneNumber}
              isValid={isValid}
              onSubmitHandler={handleSubmit}
              answer={answer}
              mathProblem={mathProblem}
              setAnswer={setAnswer}
              wrongAnswerMessage={wrongAnswerMessage}
              result={result}
              isLoggingIn={isLoggingIn}
              setIsLoggingIn={setIsLoggingIn}
            >
              <FormInput
                onChange={handleChange}
                value={values.Password}
                label="رمز عبور"
                type="password"
                name="Password"
                error={errors.Password}
                autoFocus={false}
              />
            </OtpLoginMain>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
