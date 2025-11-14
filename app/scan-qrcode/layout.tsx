"use client";

import Logo from "@/components/Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <main className="flex-1 relative flex flex-col gap-6">
      <header className="w-full absolute top-0 inset-x-0  py-4 px-6">
        <Link href={"/"} className="flex w-fit items-center">
          <ChevronLeft className="size-7 text-green-900" />
          <span>Back</span>
        </Link>
      </header>
      <section className="flex flex-1 mx-auto w-full max-w-xl">
        {isMobile ? (
          children
        ) : (
          <div className="relative flex items-center justify-center w-full min-h-full gap-3  flex-col">
            <FaMobileAlt className="size-56 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-[0.075]" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Use a Mobile Device
            </h2>
            <p className="text-center max-w-[20ch]">
              Please use a mobile device to scan the QR code.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Layout;
