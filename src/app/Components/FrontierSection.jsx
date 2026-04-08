"use client";

import { CheckCircle, Smartphone, Monitor } from "lucide-react";

function FeatureItem({ title, description }) {
  return (
    <li className="flex items-start gap-4">
      <span
        className="mt-0.5 flex-shrink-0"
        style={{ color: "var(--accent)" }}
      >
        <CheckCircle size={20} strokeWidth={1.75} />
      </span>
      <div>
        <p
          className="font-semibold text-sm"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </p>
        <p
          className="text-sm mt-0.5 leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          {description}
        </p>
      </div>
    </li>
  );
}

export default function MobileFrontierSection() {
  return (
    <section
      className="w-full py-12 px-4 sm:px-8 md:py-16 md:px-12 lg:px-20"
      style={{ background: "var(--background)" }}
    >
      {/* md: row (horizontal), sm/xs: column */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-center">

        {/* ── Left: bento grid ── */}
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3 h-80 sm:h-96 md:h-[28rem] flex-shrink-0">

          {/* Top-left: peach icon tile */}
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{ background: "var(--secondary)" }}
          >
            <Smartphone
              size={40}
              strokeWidth={1.25}
              style={{ color: "var(--muted-foreground)" }}
            />
          </div>

          {/* Top-right: collaboration photo */}
          <div className="rounded-2xl overflow-hidden aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Team collaborating on wireframes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-left: hand holding phone */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
              alt="Hand holding smartphone"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-right: dark icon tile */}
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{ background: "var(--primary)" }}
          >
            <Monitor
              size={40}
              strokeWidth={1.25}
              style={{ color: "var(--primary-foreground)", opacity: 0.75 }}
            />
          </div>
        </div>

        {/* ── Right: text content ── */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
            style={{
              color: "var(--foreground)",
             
            }}
          >
            The Mobile Frontier
          </h2>

          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Whether it&rsquo;s native development for iOS and Android, or highly
            performant{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              cross-platform
            </span>{" "}
            solutions, we craft digital tools that feel like physical extensions
            of the user&rsquo;s intent.
          </p>

          <ul className="flex flex-col gap-4 mt-1">
            <FeatureItem
              title="Precision Engineering"
              description="Architecture designed for longevity and infinite scale."
            />
            <FeatureItem
              title="Human-Centric Design"
              description="Every tap and swipe is prototyped for maximum delight."
            />
          </ul>
        </div>

      </div>
    </section>
  );
}