import { outcomes } from "../data/workshop";

export default function LearningOutcomes() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              What your child will walk away with
            </h2>
            <p className="text-slate mt-3 max-w-lg">
              Real skills, built session by session — not just theory.
            </p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="flex gap-4 p-5 rounded-2xl border border-ink/8 hover:border-circuit/30 transition-colors"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-mint/15 flex items-center justify-center mt-0.5">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink">
                  {outcome.title}
                </h3>
                <p className="text-slate text-sm mt-1">{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
