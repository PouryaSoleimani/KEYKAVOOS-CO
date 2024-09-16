import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Providers from "../redux/Providers";
import "react-loading-skeleton/dist/skeleton.css";
import ToastProvider from "../toastify/ToastProvider";
import "react-toastify/dist/ReactToastify.css";
import { WebVitals } from "../webvital/webvital";
import Metrics from "./metrics";
export const metadata: Metadata = {
  title: "Keykavoos Zaman International Co.",
  description: "Generated by create next app",
};
import { GoogleAnalytics } from "@next/third-parties/google";
import ShowNavachat from "@/navachat/ShowNavachat";
import NextAuthProviderWrapper from "@/next-auth-provider/NextAuthProviderWrapper";
import GoogleOAuthWrapper from "@/oauth-provider/GoogleOAuthWarpper";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className="4xl:w-[60%] 4xxl:w-[55%] 4xxxl:max-5xl:w-[55%] 5xl:w-[50%] 6xl:w-[50%] 3xl:w-[70%] mx-auto 7xl:w-[45%] 8xl:w-[25%] font-YekanBakh bg-[#eaeff5]">
        {/* <GoogleOAuthWrapper> */}
        {/* <NextAuthProviderWrapper> */}
        <ToastProvider>
          <Providers>
            <ShowNavachat />
            <div>{children}</div>
            <WebVitals />
            <Metrics />
            <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
          </Providers>
        </ToastProvider>
        {/* </NextAuthProviderWrapper> */}
        {/* </GoogleOAuthWrapper> */}
      </body>
    </html >
  );
}
