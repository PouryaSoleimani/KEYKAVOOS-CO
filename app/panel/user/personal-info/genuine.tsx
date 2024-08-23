import PanelFields from "../../components/panel-fileds";
import Image from "next/image";
import malegender from "@/public/Panel/malegender.svg";
import Link from "next/link";

type GenuineProps = {
  userProfile: {
    name: string;
    email: string;
    mobile: string;
    pic_path: string;
    surname: string;
  };
};
function Genuine({ userProfile }: GenuineProps) {
  return (
    <div className="flex flex-col gap-2 py-8 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5%]">
        <div className="flex flex-col justify-between lg:gap-0 gap-3">
          <PanelFields
            label="نام و نام خانوادگی:"
            value={userProfile.name + " " + userProfile.surname}
            name="FullName"
            disable={true}
            readonly={true}
          />
          <PanelFields
            label="شماره موبایل:"
            value={userProfile.mobile}
            disable={true}
            readonly={true}
          />
          <PanelFields
            label="ایمیل:"
            value={userProfile.email ? userProfile.email : "-"}
            name="email"
            disable={true}
            readonly={true}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="self-center">
            <Image
              src={
                userProfile.pic_path
                  ? `http://localhost:8000/storage/${userProfile.pic_path}`
                  : malegender
              }
              alt="profile"
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-center">
            <Link
              href={"/panel/user/settings"}
              className="bg-[#4866CF] text-white text-center px-3 py-1 rounded-lg w-[200px]"
            >
              ویرایش حساب کاربری
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Genuine;
