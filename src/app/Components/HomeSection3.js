"use client";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    alt: "Doctor using tablet",
    label: "Mobile Application",
  },
  {
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    alt: "Doctor with digital health interface",
    label: "Web Portal",
  },
  {
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    alt: "Doctor with cloud security interface",
    label: "Cloud Storage",
  },
  {
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    alt: "AI medical analytics display",
    label: "AI/ML Analytics Module",
  },
];

export default function TechnologiesSection() {
  return (
    <section
      className="w-full py-16 px-6 sm:px-12 md:px-16 lg:px-24"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-6">

        {/* ── Left: decorative SVG stethoscope squiggle ── */}
        <div className="hidden md:flex flex-shrink-0 w-56 lg:w-80 ">
          <svg width="474" height="611" viewBox="0 0 474 611" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M188.819 220.782C188.819 220.782 152.841 358.242 160.619 446.671C166.258 510.791 187.6 589.728 249.452 576.343C280.684 569.584 312.914 524.954 312.914 524.954M312.914 524.954C312.914 524.954 369.026 550.705 395.666 531.881M312.914 524.954C312.914 524.954 292.096 458.459 319.9 435.845M395.666 531.881C435.955 503.413 358.122 404.757 319.9 435.845M395.666 531.881C395.666 531.881 359.67 514.723 344.377 495.842C328.403 476.119 319.9 435.845 319.9 435.845" stroke="#60321C" strokeWidth="7"/>
<path d="M328.057 195.936C328.057 195.936 189.051 2.48988 149.04 76.4168C121.064 128.106 132.205 209.407 189.762 221.303C247.783 233.294 279.125 161.082 283.476 101.995C290.802 2.48536 37.5066 171.129 37.5066 171.129" stroke="#60321C" strokeWidth="7"/>
</svg>

        </div>

        {/* ── Right: title + 2×2 image grid ── */}
        <div className="flex-1 flex flex-col gap-6 pt-20 ">

          {/* Title */}
          <div>
            <h2
              className="text-lg font-extrabold tracking-[0.18em] uppercase"
              style={{ color: "var(--chart-3)" }}
            >
              Technologies
            </h2>
            <div
              className="mt-1 w-4 h-0.5 rounded"
              style={{ background: "var(--chart-3)" }}
            />
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-centr ">
            {cards.map(({ image, alt, label }, index) => (
              <div
                key={label}
                className="group relative overflow-hidden w-full md:w-[75%] rounded-2xl cursor-pointer bg-red-300"
                style={{ aspectRatio: "5/3" }}
              >
                {/* Image */}
                <img
                  src={image}
                  alt={alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(47,23,11,0.75) 0%, rgba(47,23,11,0.2) 60%, transparent 100%)",
                  }}
                >
                  <span
                    className="text-base font-bold leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ color: "#ffffff" }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}