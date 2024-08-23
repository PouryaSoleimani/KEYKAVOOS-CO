"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function ShowNavachat() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      window.NAVACHAT_TOKEN = "01HHYAC9AS8483G16T443H8ZGD";
      const script = document.createElement("script");
      script.src = "https://cdn.navatel.ir/webchat/widget.js";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [pathname]);

  return null;
}

export default ShowNavachat;
