"use client";

import GlassButton from "@/app/Components/GlassButton";

const cards = [
  {
    label: "Admin Team",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    alt: "Admin team reviewing medical records",
    align: "left",
  },
  {
    label: "Laboratory",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    alt: "Laboratory scientists working",
    align: "center",
    featured: true,
  },
  {
    label: "Receptionalist",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
    alt: "Receptionist helping a patient",
    align: "right",
  },
];

export default function VitadataSolutionsSection() {
  return (
    <section
      className="w-full py-14 px-4 sm:px-10 md:px-16 bg-white"
      
    >
      {/* Scoped styles: 3D tilt only on md+ */}
      <style>{`
        @media (min-width: 768px) {
          .vita-card-left  { transform: perspective(900px) rotateY(10deg) rotate(-1.5deg); }
          .vita-card-right { transform: perspective(900px) rotateY(-10deg) rotate(1.5deg); }

          .vita-card-left:hover  { transform: perspective(900px) rotateY(3deg) rotate(-0.5deg) scale(1.02); }
          .vita-card-right:hover { transform: perspective(900px) rotateY(-3deg) rotate(0.5deg) scale(1.02); }
          .vita-card-center:hover { transform: scale(1.02); }
        }
      `}</style>

      {/* Title */}
      <p
        className="text-center text-md font-bold  uppercase mb-10"
        style={{ color: "var(--foreground)" }}
      >
        VitaData Solutions
      </p>

      {/* Mobile: stacked | md+: row with 3D tilt */}
      <div className="flex flex-col md:flex-row md:items-end justify-center gap-5 md:gap-6">

        {cards.map(({ label, image, alt, align, featured }) => {
          const tiltClass =
            align === "left"
              ? "vita-card-left"
              : align === "right"
              ? "vita-card-right"
              : "vita-card-center";

          return (
            <div
              key={label}
              className={[
                "group relative overflow-hidden rounded-2xl cursor-pointer",
                "transition-all duration-500 ease-out",
                // mobile: full width, fixed height
                "w-full h-64 sm:h-72",
                // desktop: percentage widths & taller
                featured
                  ? "md:w-[36%] md:h-96 shadow-xl"
                  : "md:w-[28%] md:h-80 shadow-md",
                tiltClass,
              ].join(" ")}
            >
              {/* Background image */}
              <img
                src={image}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Glass button centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <GlassButton>{label}</GlassButton>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}