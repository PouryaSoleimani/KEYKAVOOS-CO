import React from "react";

function GenuineUserHeader() {
  return (
    <div className="grid md:grid-cols-5 grid-cols-9 justify-between text-center">
      <p className="col-span-1 md:col-span-1">ردیف</p>
      <p className="col-span-2 md:col-span-1">شماره موبایل</p>
      <p className="col-span-2 md:col-span-1">نام و نام خانوادگی</p>
      <p className="col-span-3 md:col-span-1">ایمیل</p>
      <p className="col-span-1 md:col-span-1">عملیات</p>
    </div>
  );
}

export default GenuineUserHeader;
