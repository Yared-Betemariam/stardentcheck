/* eslint-disable react/no-unescaped-entities */
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ContactButton = ({
  className,
  simple,
}: {
  simple?: boolean;
  className?: string;
}) => {
  return (
    <a href={"#contact"} className={className}>
      <Button
        size={"lg"}
        variant={"secondary"}
        className={cn(
          "group/buttonmain font-semibold text-xl text-white duration-500 ease-in-out px-1 transition-all gap-4  relative rounded rounded-tl-xl rounded-br-xl",
          simple
            ? "px-6 border-[1.5px] border-primary bg-transparent text-primary  h-12 text-base hover:bg-primary/5"
            : "bg-primary hover:bg-primary/80 md:text-2xl text-secondary-foreground pl-8 h-14 md:pl-10 md:h-16"
        )}
      >
        {!simple && (
          <div className="flex justify-end absolute inset-1 group-hover/buttonmain:inset-0 rounded-xl">
            <div className=" group-hover/buttonmain:bg-zinc-50/40 rounded-tl-xl rounded-br-xl h-full flex items-center gap-4 w-12 group-hover/buttonmain:w-full duration-200 bg-zinc-50/20" />
          </div>
        )}
        <span className="z-10">{simple ? "Contact" : "Let's work"}</span>
        {!simple && (
          <div className="h-12 w-12 rounded-full flex items-center justify-center z-10 ">
            <ArrowRight className="" />
          </div>
        )}
      </Button>
    </a>
  );
};
export default ContactButton;
