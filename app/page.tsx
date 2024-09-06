"use client";
import Footer from "@/home-components/Footer/Footer";
import Nav from "@/home-components/nav";
import Intro from "@/home-components/intro";
import IntroStatistics from "@/home-components/intro-statistics";
import News from "@/home-components/news";
import Order from "@/home-components/order";
import Plans from "@/home-components/plans";
import Reason from "@/home-components/reason";
import Script from "next/script";
import Technology from "@/home-components/technology";
import styled from "styled-components";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./loading";
import WordPress from "@/components/home-components/WebDesignPlans/WordPress";
import OurServices from "@/components/home-components/OurServices";

//^ COMPONENT
export default function Home() {
  const [mainLoading, setMainLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setMainLoading(false); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  if (mainLoading) {
    return <Loading />;
  } else {
    //^ RETURN
    return (
      <div className="bg-[#EAEFF6]">
        <Script src="/navachat.js" async />
        <Nav />
        <main className="flex flex-col mx-auto my-[3%] w-[80%]">
          <Intro />
          {/* <IntroStatistics /> */}
          {/* <Plans /> */}
          <OurServices />
          <div className="relative px-6 web-container">
            <h2 className='mb-10 relative -top-16 text-center font-[1000] py-1 bg-gradient-to-tr from-[#4866CF] via-blue-500 to-slate-700 bg-clip-text text-transparent text-4xl tracking-tighter animate__animated animate__fadeInUp animate__slow animate__delay-2s'> طراحی و اجرای سایت </h2>
            <WordPress />
            <WordPress />
            <WordPress />
          </div>
          <Technology />
          <Reason />
          <Order />
          <News />
        </main>
        <Footer />
      </div>
    );
  }
}
