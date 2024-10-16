import ShowPassword from "@/components/show-password";
import { FocusEventHandler, useEffect, useRef } from "react";
import ShowPassStrength from "./showpass-strength";

type InfoFieldProps = {
  title: string;
  info: string;
  disable?: boolean;
  onChange?: any;
  type: string;
  color?: boolean;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  required?: boolean;
  min?: number;
  passwordStrength?: any;
  setStrength?: any;
  validOTP?: boolean;
  show?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  strength?: 0 | 1 | 2 | 3;
};
const InfoFields = ({
  title,
  info,
  disable,
  onChange,
  type,
  color,
  name,
  onBlur,
  required,
  min,
  onFocus,
  passwordStrength,
  setStrength,
  validOTP,
  show,
  setShow,
  strength,
}: InfoFieldProps) => {
  useEffect(() => {
    if (name === "newPassword") {
      setStrength(passwordStrength(info).id);
    }
  }, [info]);

  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (validOTP) {
      ref.current?.focus();
    }
  }, [validOTP]);
  return (
    <div
      className={`grid grid-cols-4 items-center gap-5 4xl:grid-cols-3 ${
        disable && "text-gray-500"
      }`}
    >
      <label className="whitespace-nowrap col-span-1 4xl:col-span-1 relative">
        {title}
        {required && (
          <span
            className={`text-[#4866CF] absolute -top-[50%] ${
              disable && "text-gray-500"
            }`}
          >
            *
          </span>
        )}
        :
      </label>
      <div className="relative w-full">
        <input
          className={`${typeof show !== "undefined" && "px-[40%]"} ${
            color ? "bg-[#9DACDF]" : "bg-[#EDF0FB]"
          } rounded-lg p-[2%] col-span-3 4xl:col-span-2 ${
            disable && "bg-gray-100"
          }`}
          disabled={disable}
          onChange={onChange}
          type={type}
          value={info}
          name={name}
          onBlur={onBlur}
          minLength={min}
          onFocus={onFocus}
          required={required}
          ref={ref}
        />
        {typeof show !== "undefined" && typeof setShow !== "undefined" && (
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2">
            <ShowPassword show={show} setShow={setShow} />
          </div>
        )}
        {/* <div className="">
          {strength && <ShowPassStrength strength={strength} />}
        </div> */}
      </div>
    </div>
  );
};
export default InfoFields;
