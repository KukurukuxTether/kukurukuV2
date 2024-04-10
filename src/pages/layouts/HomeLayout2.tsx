/* eslint-disable */
import { MaxWidthProvider } from "@/components/layout/MaxWidthProvider";
import { Navbar } from "@/components/layout/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export function HomeLayout2({children}: Props) {
  return (
    <div className="min-h-[100vh] bg-dashBg">
      <div className="mb-[1.875rem]">
        <Navbar />
      </div>
      <main className="pb-[4rem]">
        {children}
      </main>
      <footer className="min-h-[3.563rem] border-t border-[#FFFFFF0D] fixed bottom-0 left-0 w-full z-10 bg-dashBg">
        <MaxWidthProvider className="mx-auto py-[0.938rem] text-center text-[0.625rem] max-w-[44.75rem]">
          <p className="text-[#FFFFFFB2]"><span className="text-white font-[500]">Disclaimer:</span> Kukuruku does not host any files, it merely links to 3rd party services. Legal issues should be taken up with the file hosts and providers. Kukuruku is not responsible for any media files shown by the video providers.</p>
        </MaxWidthProvider>
      </footer>
    </div>
  );
}
