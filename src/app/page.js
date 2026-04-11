"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import HeroCopy from "./Components/Hero";
import VitadataSolutionsSection from "./Components/VitadataSolutions";
import TechnologiesSection from "./Components/HomeSection3";

export default function HeroSection() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".reveal");
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(28px)";
      setTimeout(() => {
        child.style.transition =
          "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      }, 80 + i * 150);
    });
  }, []);

  return (
    <>
      
      <section className=" bg-card p-4 pt-20 md:px-10 lg:px-10 md:p-8 md:bg-white ">
        <section className="   h-[70vh] grid grid-cols-1 lg:grid-cols-2 md:bg-[#DDC8BE] lg:rounded-2xl">
        


        {/* Copy */}
      
        <HeroCopy />
    
        
        {/* DNA image — desktop only */}
        <div className="vd-dna-wrap hidden overflow-hidden lg:block">
          <div className="vd-dna-inner scale-125">
            <img
              src="/hero.png"
              alt="Golden DNA double helix"
              
              
              className="vd-dna-img  h-[70vh] border border-amber-500 -scale-x-100 object-contain rotate-8 "
            />
            {/* <div className="vd-dna-fade" />
            <div className="vd-dna-fade-tb" /> */}
          </div>
        </div>
      </section>
      </section>
      <VitadataSolutionsSection />
      <TechnologiesSection />
    </>
  );
}