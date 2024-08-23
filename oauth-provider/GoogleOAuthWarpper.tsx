"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

const GoogleOAuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleOAuthProvider
      clientId="344661236987-8h5p5t4phnrlstt7udrbvbubdn46dhg2.apps.googleusercontent.com"
    >
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleOAuthWrapper;
