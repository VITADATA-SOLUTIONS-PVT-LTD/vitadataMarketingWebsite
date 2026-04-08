"use client";

const stack = ["Flutter", "React Native", "Kotlin", "Swift", "TypeScript", "Firebase"];

export default function StackSection() {
  return (
    <section
      className="w-full min-h-90 py-12 px-20"
      style={{ background: "#ffffff" }}
    >
      {/* Title */}
      <p
        className="text-center text-sm font-semibold  uppercase mb-8"
        style={{ color: "var(--foreground)" }}
      >
        THE STACK WE TRUST
      </p>

      {/* Pills row — centered, wraps on small screens */}
      <div className="flex flex-wrap justify-center gap-3">
        {stack.map((name) => (
          <span
            key={name}
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
            style={{
              background: "var(--secondary)",
              color: "var(--foreground)",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}