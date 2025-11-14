"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";

export const navLinks = [
  {
    name: "About",
    href: "#about",
  },
];

const Nav = () => {
  return (
    <header className="absolute z-50 top-0 w-full h-[8rem] md:h-[6rem]">
      <nav className="wrapper flex items-center h-full justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={cn(
                  "opacity-80 text-base font-normal transition-all duration-300 text-white cursor-pointer"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="#contact">
              <Button
                variant={"outline"}
                className="rounded bg-transparent border-white/25 w-28 text-white font-normal text-base"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
