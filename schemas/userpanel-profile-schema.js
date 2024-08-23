import * as yup from "yup";

const PasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const PhoneNumberRegex = /^(09)\d{9}$/;

export const UserRegistrationPersonalSchema = yup.object().shape({
  FirstName: yup
    .string("")
    .min(3, "نام حداقل سه حرفی باشد.")
    .required("لطفا نام خود را وارد کنید."),
  LastName: yup
    .string("")
    .min(3, "نام خانوادگی حداقل سه حرفی باشد.")
    .required("لطفا نام خانوادگی خود را وارد کنید."),
  Password: yup
    .string("")
    .matches(
      PasswordRegex,
      "رمز عبور باید حداقل 8 کاراکتر شامل یک حرف بزرگ، یک حرف کوچک باشد."
    )
    .required("رمز عبور را وارد کنید."),
  type: yup.string("").required(""),
  ncode: yup
    .string()
    .min(10, "کدملی صحیح نمی باشد.")
    .max(10, "کدملی صحیح نمی باشد.")
    .required("کدملی خود را وارد کنید."),
});

export const HoghooghiUserRegistrationSechema = yup.object().shape({
  org_name: yup.string("").required("نام سازمان را وارد کنید.").min(3, ""),
  org_registration_number: yup
    .string("")
    .required("شماره ثبت سازمان را وارد کنید.")
    .max(11, "شماره ثبت صحیح نمی باشد.")
    .min(11, "شماره ثبت صحیح نمی باشد."),
  org_address: yup.string("").required("آدرس سازمان را وارد کنید.").min(3, ""),
  org_phone: yup
    .string("")
    .required("شماره تلفن سازمان را وارد کنید.")
    .max(11, "شماره تلفن صحیح نمی باشد.")
    .min(11, "شماره تلفن صحیح نمی باشد."),
  shenase_melli: yup
    .string("")
    .required("شناسه ملی سازمان را وارد کنید.")
    .max(11, "شناسه ملی صحیح نمی باشد.")
    .min(11, "شناسه ملی صحیح نمی باشد."),
});
export const LoginSchema = yup.object().shape({
  PhoneNumber: yup.string().required("").max(11).matches(PhoneNumberRegex, " "),
});
