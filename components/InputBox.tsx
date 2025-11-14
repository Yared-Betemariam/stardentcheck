"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface Props {
  isLoading: boolean;
  onEnter: (code: string) => void;
  input: string;
  code: string;
  setInput: (input: string) => void;
}

const InputBox = ({ input, setInput, code, isLoading, onEnter }: Props) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryCode = searchParams.get("code");
    if (!code && queryCode) {
      onEnter(queryCode);
    }
  }, [searchParams]);

  return (
    <div className="flex w-full">
      <Input
        id="code_input"
        disabled={isLoading}
        placeholder="eg. STPP-2819-28198"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnter(input);
          }
        }}
        className="bg-white/10 flex-1 min-w-[13rem] md:min-w-[16rem] placeholder:text-white/25 border-white/0 rounded-r-none"
      />
      <Button
        disabled={isLoading}
        onClick={() => {
          onEnter(input);
        }}
        className="bg-primary gap-1 rounded-l-none hover:bg-primary/75"
      >
        <Search className="size-5" />{" "}
        <span>{isLoading ? "Searching..." : "Search"}</span>
      </Button>
    </div>
  );
};
export default InputBox;
