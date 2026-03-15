const testimonials = [
  {
    name: "Maria G.",
    location: "Azusa, CA",
    stars: 5,
    text: "DeLong Plumbing came out the same day I called. They cleared my kitchen drain quickly and the price was very fair. Will definitely use them again!",
  },
  {
    name: "James T.",
    location: "Covina, CA",
    stars: 5,
    text: "Had a water heater go out on a Sunday. They came out, diagnosed the issue, and had it replaced by afternoon. Professional and efficient. Highly recommend!",
  },
  {
    name: "Rosa M.",
    location: "Duarte, CA",
    stars: 5,
    text: "Hydro-jetting service was amazing. My slow drains are completely clear now. The technician was knowledgeable and took the time to explain everything.",
  },
  {
    name: "David L.",
    location: "Glendora, CA",
    stars: 5,
    text: "Used DeLong for our restaurant's grease trap cleaning and drain service. Very professional, showed up on time, and got the job done without disrupting our business.",
  },
  {
    name: "Sandra K.",
    location: "Monrovia, CA",
    stars: 5,
    text: "They repaired a broken pipe under our house quickly and at a reasonable price. I appreciated their honesty and the quality of their work.",
  },
  {
    name: "Carlos R.",
    location: "Baldwin Park, CA",
    stars: 5,
    text: "Called for an emergency toilet overflow. They responded fast and fixed the issue professionally. Great local plumber — will refer to everyone I know.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-4 uppercase">
            What Our Customers Say
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <div className="flex items-center justify-center gap-2 text-white/70">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-white">5.0</span>
            <span>— Trusted by families & businesses across the SGV</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card-hover bg-brand-gray-dark border border-white/10 hover:border-brand-red/30 rounded-xl p-6"
            >
              <StarRating count={t.stars} />
              <p className="text-white/70 mt-4 mb-6 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red font-bold font-heading text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
