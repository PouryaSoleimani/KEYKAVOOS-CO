import Footer from "@/components/home-components/Footer/Footer";
import Nav from "@/components/home-components/nav";
import React from "react";

function SiteTypeLayput({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#EAEFF6]">
      <Nav />
      <div className="w-[80%] mx-auto my-[3%]" dir="rtl">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default SiteTypeLayput;
