import PanelFields from "../../components/panel-fileds";
import Image from "next/image";
import USER__DEFAULT from "/USER__DEFAULT.png"
import Link from "next/link";
type GenuineProps = { userProfile: { name: string; email: string; mobile: string; pic_path: string; surname: string; }; };


//^ COMPONENT 
function Genuine({ userProfile }: GenuineProps) {
  return (
    <div className="flex flex-col gap-2 py-8 lg:py-0 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5%]">
        <div className="flex flex-col justify-between lg:gap-0 gap-3">
          <PanelFields label="نام و نام خانوادگی:" value={userProfile.name + " " + userProfile.surname} name="FullName" disable={true} readonly={true} placeholder="" />
          <PanelFields label="شماره موبایل:" value={userProfile.mobile} disable={true} readonly={true} placeholder="" />
          <PanelFields label="ایمیل:" value={userProfile.email ? userProfile.email : "-"} name="email" disable={true} readonly={true} placeholder="" />
        </div>
        <div className="flex flex-col gap-10 mt-10">
          <div className="self-center">
            <Image src={userProfile.pic_path ? `https://back.keykavoos.co/storage/${userProfile.pic_path}` : `/USER__DEFAULT.png`} alt="profile_pic" width={162} height={152} className="flex items-center justify-center text-zinc-500 rounded-full" />
          </div>
          <div className="flex justify-center">
            <Link href={"/panel/user/settings"} className="bg-[#4866CF] text-white text-center px-2 py-3 rounded-lg w-[160px] tracking-tight text-[14px] hover:bg-blue-800 duration-300"  >
              ویرایش حساب کاربری
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Genuine;
