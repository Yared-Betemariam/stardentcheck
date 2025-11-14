"use client";

import type React from "react";

import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download } from "lucide-react";
import { fontWrapper } from "@/lib/utils";
import Logo from "@/components/Logo";

export default function QRCodeGenerator() {
  const [batchCode, setBatchCode] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

  const generateLink = (code: string) => {
    if (!code) return "";

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    if (!BASE_URL) {
      console.error("Base URL is not defined");
      return "";
    }

    return `${BASE_URL}/?code=${encodeURIComponent(code)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateLink(batchCode);
    setGeneratedLink(link);
  };

  const downloadQRCode = () => {
    if (!qrRef.current) return;

    const qrCodeElement = qrRef.current.querySelector("svg");
    if (!qrCodeElement) return;

    const svgData = new XMLSerializer().serializeToString(qrCodeElement);
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      // Create a canvas with extra space for border, padding, and text
      const padding = 40; // Padding around the QR code
      const borderWidth = 2; // Border width
      const textHeight = 40; // Height for the text area
      const totalWidth = img.width + padding * 2 + borderWidth * 2;
      const totalHeight =
        img.height + padding * 2 + textHeight + borderWidth * 2;

      const canvas = document.createElement("canvas");
      canvas.width = totalWidth;
      canvas.height = totalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Fill with white background
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, totalWidth, totalHeight);

      // Draw border
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = borderWidth;
      ctx.strokeRect(
        borderWidth / 2,
        borderWidth / 2,
        totalWidth - borderWidth,
        totalHeight - borderWidth
      );

      // Draw QR code with padding
      ctx.drawImage(
        img,
        borderWidth + padding,
        borderWidth + padding,
        img.width,
        img.height
      );

      // Add text at the bottom
      ctx.fillStyle = "#000000";
      ctx.font = "bold 16px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        batchCode,
        totalWidth / 2,
        borderWidth + padding + img.height + textHeight / 2
      );

      // Create download link
      const downloadLink = document.createElement("a");
      downloadLink.download = `qrcode-${batchCode}.png`;
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-zinc-900 py-4 flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex items-center gap-12 justify-center flex-1 px-12 flex-col md:flex-row py-12">
        <div className="flex flex-col">
          <h1 className={fontWrapper("text-2xl font-semibold")}>
            Product QR Code Generator
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-0.5">
              <Label htmlFor="batchCode" className="font-normal">
                Product Batch Code
              </Label>
              <Input
                id="batchCode"
                placeholder="e.g. STPP-281-3818"
                value={batchCode}
                onChange={(e) => setBatchCode(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Generate QR Code
            </Button>
          </form>
        </div>
        {generatedLink && (
          <div className="flex flex-col">
            <div className="mt-6 space-y-4">
              <div className="rounded-md bg-muted p-2 text-sm break-all">
                <p>{generatedLink}</p>
              </div>

              <div
                ref={qrRef}
                className="flex flex-col items-center text-sm font-semibold justify-center p-4  w-fit  mx-auto border-2 rounded-xl bg-white"
              >
                <QRCode value={generatedLink} size={200} level="H" />
                <span>{batchCode}</span>
              </div>
            </div>
            <Button
              onClick={downloadQRCode}
              className="w-full border-black/50 mt-4"
              variant="outline"
            >
              <Download className="mr-2 h-4 w-4" />
              Download QR Code
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
