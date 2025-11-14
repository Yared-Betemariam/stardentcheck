import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  black?: boolean;
  logo?: boolean;
  className?: string;
}

const Logo = ({ className, logo }: Props) => {
  return (
    <a href="/" className={cn("flex items-center gap-4", className)}>
      <Image
        src={"/logo.png"}
        alt="logo"
        // className={logo ? `w-[2rem]` : `w-[14rem] md:w-[16rem]`}
        className="size-12 rounded-lg"
        width={280}
        height={280}
      />
      {!logo && (
        <div className="text-white hidden sm:flex flex-col">
          <span className="text-2xl font-semibold">
            Stardent.<span className="font-light">Check</span>
          </span>
          <span className="opacity-50">Medical Supplies & Equipment</span>
        </div>
      )}
    </a>
  );
};
export default Logo;
