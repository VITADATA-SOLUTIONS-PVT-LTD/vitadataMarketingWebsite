"use client";

import { Smartphone, TabletSmartphone, Layers, Palette, Wrench } from "lucide-react";

const specializations = [
  {
    icon: Smartphone,
    title: "iOS Development",
    description:
      "Swift-powered native applications that leverage the full potential of the Apple ecosystem.",
    iconBg: "#FDE8DF",
    iconColor: "#EC8E60",
  },
  {
    icon: TabletSmartphone,
    title: "Android Development",
    description:
      "Robust Kotlin solutions optimized for a diverse range of devices and form factors.",
    iconBg: "#FDE8DF",
    iconColor: "#EC8E60",
  },
  {
    icon: Layers,
    title: "Cross-Platform",
    description:
      "Unified codebases using Flutter and React Native for efficient, multi-platform deployment.",
    iconBg: "#FDE8DF",
    iconColor: "#EC8E60",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Editorial-grade interfaces that prioritize user intuition and visual elegance through every interaction.",
    iconBg: "#DFFAF0",
    iconColor: "#2EAE78",
  },
  {
    icon: Wrench,
    title: "App Maintenance",
    description:
      "Continuous optimization, security patches, and performance tuning to ensure your product never ages.",
    iconBg: "#FDE8DF",
    iconColor: "#EC8E60",
  },
];

function SpecCard({ icon: Icon, title, description, iconBg, iconColor }) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-default overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
      style={{
        boxShadow: "0 2px 12px rgba(47,23,11,0.07)",
      }}
    >
      {/* Subtle bottom accent on hover */}
      <div
        className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
        style={{ background: "var(--accent)" }}
      />

      {/* Icon pill */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: iconBg }}
      >
        <Icon size={22} strokeWidth={1.75} style={{ color: iconColor }} />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className="font-bold text-base"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SpecializationsSection() {
  const topRow = specializations.slice(0, 3);
  const bottomRow = specializations.slice(3, 5);

  return (
    <section
      className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20"
      style={{ background: "var(--secondary)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center flex flex-col gap-2">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{
              color: "var(--foreground)",
              
            }}
          >
            Our Specializations
          </h2>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--muted-foreground)" }}
          >
            Comprehensive ecosystem development for the digital-first era.
          </p>
        </div>

       <div className=" w-full">
         {/* Top row — 3 cards (1 col on mobile, 3 on md+) */}
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topRow.map((item) => (
            <SpecCard key={item.title} {...item} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered (1 col on mobile, 2 on md+) */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full  mt-4">
          {bottomRow.map((item) => (
            <SpecCard key={item.title} {...item} />
          ))}
        </div>
       </div>

      </div>
    </section>
  );
}