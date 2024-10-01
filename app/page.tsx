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
import WordPressSpecial from "@/components/home-components/WebDesignPlans/WordPressSpecial";
import CodingWebDevelopment from "@/components/home-components/WebDesignPlans/CodingWebDevelopment";
import 'animate.css';
import { browser } from "process";


//^ COMPONENT
export default function Home() {
  const [mainLoading, setMainLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setMainLoading(false); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // AOS
  useEffect(() => { AOS.init(); AOS.refresh(); }, []);

  if (mainLoading) {
    return <Loading />;
  } else {
    //^ RETURN
    return (
      <div className="bg-[#eaeff5] web-container overflow-x-hidden">
        <Script src="/navachat.js" async />
        <Nav />
        <main className="flex flex-col mx-auto mt-10 w-full">
          <Intro />
          <OurServices />
          <div className="relative px-[4vw] space-y-10">
            <h2 className="relative -top-16 text-center font-black py-1 bg-gradient-to-tr from-blue-500 via-[#4866CF] to-blue-800 bg-clip-text text-transparent text-5xl tracking-tighter animate__animated animate__fadeInUp animate__slow animate__delay-2s">
              {" "}طراحی و اجرای وبسایت{" "}
            </h2>
            <WordPress />
            <WordPressSpecial />
            <CodingWebDevelopment />
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
