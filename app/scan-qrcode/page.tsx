"use client";

import { Html5QrcodeScanner } from "html5-qrcode";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const Scanner = () => {
  const router = useRouter();

  useEffect(() => {
    const readerElement = document.getElementById("reader");
    if (readerElement) {
      readerElement.innerHTML = "";
    }

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: { width: 300, height: 300 },
        fps: 5,
      },
      false
    );

    scanner.render(success, error);

    function success(text: string) {
      toast.success("Scanned successfully");
      scanner.clear();

      if (text.includes("/")) {
        router.push(text);
        return;
      }
    }
    function error(error: string) {
      console.log(error);
    }

    return () => {
      scanner.clear();
    };
  }, []);

  return <div id="reader" />;
};
export default Scanner;
