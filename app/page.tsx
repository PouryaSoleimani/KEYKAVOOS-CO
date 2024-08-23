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
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [mainLoading, setMainLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMainLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  if (mainLoading) {
    return <Loading />;
  } else {
    return (
      <div className="bg-[#EAEFF6]">
        <Script src="/navachat.js" async />
        <Nav />
        <main className="flex flex-col w-[80%] mx-auto my-[3%]">
          <Intro />
          {/* <IntroStatistics /> */}
          <Plans />
          <Technology />
          <Reason />
          {/* <Order /> */}
          {/* <News /> */}
        </main>
        <Footer />
      </div>
    );
  }
}
