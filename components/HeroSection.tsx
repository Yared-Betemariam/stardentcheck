"use client";

import { fontWrapper } from "@/lib/utils";
import { formatDate } from "date-fns";
import { Check, Loader, Scan, X } from "lucide-react";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { TfiPackage } from "react-icons/tfi";
import InputBox from "./InputBox";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState(code || "");
  const [isLoading, setIsLoading] = useState(false);
  const [ok, setOk] = useState<undefined | boolean | null>();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setInput(code);

    if (code && !isLoading) {
      fetchData(code);
    }
  }, [code]);

  const fetchData = async (code: string) => {
    setIsLoading(true);
    setOk(undefined);
    try {
      const formData = new FormData();
      formData.append("code", code);

      const url = process.env.NEXT_PUBLIC_SCRIPT_URL;
      if (!url) {
        throw new Error("API URL is not defined");
      }

      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        setOk(false);
      }

      console.log(res);
      const data = await res.json();
      console.log(data);
      console.log(res);

      if (data && Object.keys(data).length > 0) {
        setOk(true);

        setData(data);
      } else {
        setOk(false);

        setData(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setOk(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-950 py-12 text-white relative">
      <Image
        src={"/bg.png"}
        alt="bg-image"
        fill
        className="opacity-65 z-10 mask-image object-cover"
      />
      <section className="wrapper flex flex-col items-center gap-8 md:gap-20 md:flex-row pt-32 relative z-20">
        <div className="flex flex-col py-10 gap-4 w-full md:px-12">
          <span className="flex items-center gap-2 bg-gradient-to-r from-lime-200/15 to-transparent px-2.5 py-1 rounded-full shadow-sm w-fit">
            <IoShieldCheckmark className="size-5 text-blue-400" />{" "}
            <span className="text-blue-400">Verified</span> by Stardent
            Officials.
          </span>
          <h1
            className={fontWrapper(
              "text-5xl md:text-[3.5rem] leading-[.9] font-semibold tracking-tighter"
            )}
          >
            Product
            <span className="text-primary brightness-200">Check</span>
          </h1>
          <div className="flex w-full flex-col border border-white/20 gap-2 p-3 px-5 rounded-xl">
            <span className="text-sm opacity-50">
              Enter your Product Batch Number
            </span>
            <Suspense>
              <InputBox
                input={input}
                setInput={setInput}
                code={code}
                onEnter={(code) => {
                  if (!code) return;

                  setCode(code);
                  fetchData(code);
                }}
                isLoading={isLoading}
              />
            </Suspense>
          </div>
          <Link
            href={"/scan-qrcode"}
            className="flex cursor-pointer w-fit duration-300 transition-all  items-center border px-3 py-1 gap-2 hover:bg-white/25 rounded-full border-white/20"
          >
            <Scan className="size-4 text-sky-600" />
            Scan QR
          </Link>
        </div>
        <div className="border w-full p-8 rounded-xl border-white/20 bg-zinc-900/45 flex flex-col gap-1">
          <div className="flex items-center gap-4">
            <TfiPackage className="size-10 rotate-12 text-green-6 00" />
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Product Info</span>
              <span className="opacity-75 text-sm">
                Product information based on batch number.
              </span>
            </div>
          </div>
          <hr className="my-3 opacity-25" />
          <div className="flex flex-col gap-2">
            {!code && (
              <>
                <span className="opacity-50">No Batch number provided</span>
              </>
            )}
            {isLoading && (
              <>
                <Loader className="animate-spin" />
                <span className="text-sm opacity-50">Searching...</span>
              </>
            )}
            {ok === false && (
              <>
                <span className="flex items-center mb-1 gap-2">
                  <X className="border-2 size-5 rounded-full text-red-500 border-red-500" />{" "}
                  <span className="text-lg font-semibold text-red-500">
                    Product Not Verified
                  </span>
                </span>
                <span className="text-sm opacity-50">
                  No product found with this batch number '{code}'.
                </span>
              </>
            )}
            {ok === true && data && (
              <>
                <span className="flex items-center mb-1 gap-2">
                  <Check className="border-2 size-5 rounded-full text-green-500 border-green-500" />{" "}
                  <span className="text-lg font-semibold text-green-500">
                    Product Verified
                  </span>
                </span>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-y-4">
                    <div className="flex flex-col">
                      <span className="text-sm opacity-50">Batch Number</span>
                      <span className="text-lg font-semibold">
                        {data.rowData[0]}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm opacity-50">Expiry Date</span>
                      <span className="text-lg font-semibold">
                        {formatDate(new Date(data.rowData[1]), "dd/MM/yyyy")}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};
export default HeroSection;
