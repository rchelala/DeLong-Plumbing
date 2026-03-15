const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Drain Rooter",
    description:
      "Clogged drains are no match for our professional rooter service. We clear blockages fast in sinks, tubs, showers, and main lines.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Hydro-Jetting",
    description:
      "High-pressure water jetting blasts away grease, scale, tree roots, and buildup that ordinary snaking can't remove.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Water Heaters",
    description:
      "Installation, repair, and replacement of traditional tank and tankless water heaters. Hot water when you need it.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Pipe Repair & Replacement",
    description:
      "From minor leaks to full repipes, we handle all types of pipe work including copper, PVC, and ABS piping.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "Fixture Installation",
    description:
      "Toilets, faucets, sinks, disposals, and more. We install and replace all plumbing fixtures quickly and cleanly.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial Plumbing",
    description:
      "Restaurants, offices, and commercial properties — we handle high-demand plumbing systems for businesses of all sizes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-4 uppercase">
            Our Services
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From emergency drain clearing to full water heater replacements, we
            handle every plumbing need in Azusa, CA and the surrounding San
            Gabriel Valley.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card-hover bg-brand-black border border-white/10 hover:border-brand-red/40 rounded-xl p-8 group"
            >
              <div className="text-brand-red mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* All services note */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-lg mb-6">
            Don&apos;t see your issue listed? We handle{" "}
            <span className="text-white font-semibold">all plumbing services.</span>
          </p>
          <a
            href="tel:6268339514"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call 626-833-9514 for a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
