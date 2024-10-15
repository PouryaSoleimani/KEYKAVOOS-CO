import React from "react";

function LegalUserHeader() {
  return (
    <div className="grid md:grid-cols-6 grid-cols-12 justify-between text-center">
      <p className="col-span-1">ردیف</p>
      <p className="col-span-1">نام سازمان</p>
      <p className="col-span-3 md:col-span-1">شماره ملی</p>
      <p className="col-span-3 md:col-span-1">شماره موبایل </p>
      <p className="col-span-3 md:col-span-1">شماره ثبت</p>
      <p className="col-span-1">عملیات</p>
    </div>
  );
}

export default LegalUserHeader;
