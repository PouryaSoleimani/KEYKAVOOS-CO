import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src='/logo.svg' width={190} height={190} alt="logo" priority className="w-auto h-auto" />
      </Link>
    </div>
  );
};
export default Logo;
