import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { StreamVideoProvider } from "@/providers/StreamClientProvider";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
