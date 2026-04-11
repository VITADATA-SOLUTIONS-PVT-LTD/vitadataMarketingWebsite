"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import GlassButton from "./GlassButton";
import { ArrowRight, ArrowDownToLine } from "lucide-react";

export default function HeroCopy() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll(".reveal").forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      setTimeout(() => {
        child.style.transition =
          "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)";
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      }, 80 + i * 140);
    });
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-6 px-7 py-14 md:px-18 md:py-20"
    >
      

      {/* Heading */}
      <h1
        className="reveal max-w-2xl text-5xl  leading-[1.05] font-bolder md:text-6xl lg:text-6xl"
        style={{ color: "#1a0f08", letterSpacing: "-0.03em" }}
      >
        Redefining<br />
        Excellence In<br />
        Healthcare
        Delivery
      </h1>

      {/* Subtext */}
      <p
        className="reveal max-w-sm text-sm font-light leading-relaxed md:text-base"
        style={{ color: "#5c4030" }}
      >
        Get along the trusted management of VitaData for your medical needs.
        Your health is now in safe hands.
      </p>

      {/* Buttons */}
      <div className="reveal flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {/* Get Started */}
        <GlassButton>
          Get Started
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 group-hover:bg-black/[0.06]"
            style={{ borderColor: "rgba(60,35,12,0.22)" }}
          >
            <ArrowRight size={13} strokeWidth={2} />
          </span>
        </GlassButton>

        {/* Download app */}
        <GlassButton
         
        >
          Download app
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 group-hover:bg-black/[0.06]"
            style={{ borderColor: "rgba(60,35,12,0.22)" }}
          >
            <ArrowDownToLine size={13} strokeWidth={2} />
          </span>
        </GlassButton>
      </div>
    </div>
  );
}