import Image from "next/image";

const PHONE = "626-833-9514";
const PHONE_HREF = "tel:6268339514";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-black">
        {/* Hero background image - replace with actual job photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 text-center lg:text-left">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            Serving Azusa, CA & Surrounding Areas
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 uppercase">
            Your Local
            <span className="text-brand-red block">Plumbing</span>
            Experts
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-2xl font-light">
            Drain rooter & hydro-jetting, water heaters, and all plumbing
            services. Fast, reliable, and done right the first time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <a
              href={PHONE_HREF}
              className="group flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xl px-8 py-5 rounded transition-all duration-200 phone-pulse"
            >
              <svg
                className="w-6 h-6 group-hover:rotate-12 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PHONE}
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-brand-red text-white font-semibold text-lg px-8 py-5 rounded transition-all duration-200 hover:bg-brand-red/10"
            >
              View Services
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-red"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-red"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Fast Response
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-red"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Residential & Commercial
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-red"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Free Estimates
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
        <span className="uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}
