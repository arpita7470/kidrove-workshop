import { details } from "../data/workshop";

const icons = {
  users: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  ),
  calendar: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
  ),
  laptop: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15.75 3 16.5h18l.75-.75M3.75 4.5h16.5a.75.75 0 0 1 .75.75v9.75H3V5.25a.75.75 0 0 1 .75-.75ZM9.75 19.5h4.5"
    />
  ),
  tag: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z M6 6h.008v.008H6V6Z"
    />
  ),
  rocket: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.49m5.96 5.88a14.98 14.98 0 0 1-5.96 6.16M9.63 8.49a14.98 14.98 0 0 1-9.49 12.12A14.98 14.98 0 0 0 9.63 8.49m0 0L8.97 14.37a6 6 0 0 0 1.06.92"
    />
  ),
};

export default function WorkshopDetails() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink text-center">
          Workshop at a glance
        </h2>
        <p className="text-slate text-center mt-3 max-w-xl mx-auto">
          Everything you need to know before signing up.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {details.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-ink/5 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="mx-auto w-11 h-11 rounded-xl bg-circuit/10 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-circuit"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {icons[item.icon]}
                </svg>
              </div>
              <p className="text-xs uppercase tracking-wide text-slate font-semibold">
                {item.label}
              </p>
              <p className="font-display font-bold text-ink mt-1 text-sm md:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
