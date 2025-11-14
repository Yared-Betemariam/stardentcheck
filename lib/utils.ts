import { type ClassValue, clsx } from "clsx";
import { DM_Sans, Nunito_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

const font = Nunito_Sans({ subsets: ["latin"] });

export const fontWrapper = (className: string) => {
  return cn(font.className, className);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
