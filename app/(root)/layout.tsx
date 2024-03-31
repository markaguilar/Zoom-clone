import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default RootLayout;
