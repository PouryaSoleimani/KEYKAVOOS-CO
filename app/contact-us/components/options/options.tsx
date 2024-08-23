import React from "react";
import OptionsCard from "./options-card";

const Options = () => {
  return (
    <div className="mx-auto grid grid-cols-1 w-[80%] justify-center items-center gap-14 lg:grid lg:grid-cols-3 lg:justify-between 2xl:px-0 ">
      <div className="order-3 lg:order-1">
        <OptionsCard
          src="/contactus/addresslogo.svg"
          head={"آدرس:"}
          info={
            "تهران،خیابان قائم مقام فراهانی،کوچه ماگنولیا، پلاک 30 ،واحد 12"
          }
        />
      </div>
      <div className="order-2 lg:order-2">
        <OptionsCard
          src="/contactus/maillogo.svg"
          head={"ایمیل:"}
          info={"admin@keykavoos.co HR@keykavoos.co"}
        />
      </div>
      <div className="order-1 lg:order-3">
        <OptionsCard
          src="/contactus/phonelogo.svg"
          head={"تماس با پشتیبانی:"}
          info={"021-91691650 09193762985"}
        />
      </div>
    </div>
  );
};

export default Options;
