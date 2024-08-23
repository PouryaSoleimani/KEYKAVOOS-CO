import React from "react";
import PanelFields from "../../components/panel-fileds";
import Image from "next/image";
import malegender from "../../../../public/Panel/malegender.svg";
import Link from "next/link";
type LegalProps = {
  PhoneNumber: string;
  token: string;
  name_of_Organization: string;
  shenase_melli: string;
  registration_Number: string;
  path?: string;
};
function Legal({
  PhoneNumber,
  name_of_Organization,
  shenase_melli,
  registration_Number,
  path,
}: LegalProps) {
  return (
    <div className="flex flex-col gap-5 py-8 lg:py-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[5%]">
        <div className="flex flex-col justify-between gap-3">
          <PanelFields
            label="نام سازمان:"
            value={name_of_Organization}
            name="name_of_Organization"
            disable={true}
          />
          <PanelFields
            label="شماره موبایل:"
            value={PhoneNumber}
            disable={true}
          />
          <PanelFields
            label="شناسه ملی:"
            value={shenase_melli[0] ? shenase_melli[0] : "-"}
            name="National_ID"
            disable={true}
          />
        </div>
        <div className="flex lg:flex-col lg:gap-0 gap-5 flex-col-reverse justify-between">
          <div className="self-center">
            <Image
              src={path ? `http://localhost:8000/storage/${path}` : malegender}
              alt="profile"
              width={250}
              height={250}
            />
          </div>
          <PanelFields
            label="شماره ثبت:"
            value={registration_Number}
            name="registration_Number"
            disable={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Legal;
