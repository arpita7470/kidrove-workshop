import { workshop } from "../data/workshop";

function CircuitArt() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full max-w-sm mx-auto"
      role="img"
      aria-label="Illustration of connected circuit nodes forming a robot face"
    >
      {/* connecting lines */}
      <g stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.55">
        <line x1="200" y1="80" x2="200" y2="140" className="animate-draw-line" />
        <line x1="120" y1="180" x2="200" y2="140" className="animate-draw-line" />
        <line x1="280" y1="180" x2="200" y2="140" className="animate-draw-line" />
        <line x1="120" y1="180" x2="120" y2="260" className="animate-draw-line" />
        <line x1="280" y1="180" x2="280" y2="260" className="animate-draw-line" />
        <line x1="120" y1="260" x2="200" y2="300" className="animate-draw-line" />
        <line x1="280" y1="260" x2="200" y2="300" className="animate-draw-line" />
      </g>

      {/* robot face frame */}
      <rect x="110" y="160" width="180" height="120" rx="20" fill="#1E1B4B" />
      <circle cx="160" cy="210" r="14" fill="#FFF9F0" />
      <circle cx="160" cy="210" r="6" fill="#FF6B5B" />
      <circle cx="240" cy="210" r="14" fill="#FFF9F0" />
      <circle cx="240" cy="210" r="6" fill="#FF6B5B" />
      <rect x="160" y="245" width="80" height="10" rx="5" fill="#2DD4BF" />

      {/* antenna */}
      <line x1="200" y1="160" x2="200" y2="120" stroke="#1E1B4B" strokeWidth="4" />
      <circle cx="200" cy="100" r="14" fill="#FF6B5B" className="animate-node-pulse" />

      {/* outer nodes */}
      <circle cx="120" cy="180" r="9" fill="#3B82F6" className="animate-node-pulse" style={{ animationDelay: "0.2s" }} />
      <circle cx="280" cy="180" r="9" fill="#3B82F6" className="animate-node-pulse" style={{ animationDelay: "0.4s" }} />
      <circle cx="120" cy="260" r="9" fill="#2DD4BF" className="animate-node-pulse" style={{ animationDelay: "0.6s" }} />
      <circle cx="280" cy="260" r="9" fill="#2DD4BF" className="animate-node-pulse" style={{ animationDelay: "0.8s" }} />
      <circle cx="200" cy="300" r="9" fill="#FF6B5B" className="animate-node-pulse" style={{ animationDelay: "1s" }} />
    </svg>
  );
}

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("enroll-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-spark/15 text-spark font-display font-semibold text-sm px-4 py-1.5 rounded-full border border-spark/30">
            Enrolling now for July batch
          </span>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mt-6">
            {workshop.title}
          </h1>

          <p className="mt-5 text-lg text-cream/80 max-w-md">
            {workshop.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToForm}
              className="bg-spark hover:bg-spark/90 text-white font-display font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-spark/30 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink focus:ring-spark"
            >
              Enroll Now
            </button>
            <span className="text-cream/60 text-sm">
              Starts {workshop.startDate} &middot; {workshop.fee}
            </span>
          </div>
        </div>

        <div>
          <CircuitArt />
        </div>
      </div>
    </section>
  );
}
