const stats = [
  { value: "Same Day", label: "Service Available" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "Res & Com", label: "Residential & Commercial" },
  { value: "SGV", label: "San Gabriel Valley" },
];

const reasons = [
  {
    title: "Local & Trusted",
    description:
      "We're your neighbors in Azusa, CA. We know the local plumbing systems, water conditions, and building codes inside and out.",
  },
  {
    title: "Honest Pricing",
    description:
      "No hidden fees, no surprise charges. We give you an upfront estimate before any work begins so you know exactly what to expect.",
  },
  {
    title: "Professional Equipment",
    description:
      "From industrial hydro-jetters to camera inspection tools, we use professional-grade equipment to get the job done right.",
  },
  {
    title: "Clean & Respectful",
    description:
      "We treat your home or business with respect. We clean up after ourselves and leave your property better than we found it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-brand-black">
      {/* Stats bar */}
      <div className="bg-brand-red py-8 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-heading font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div>
            <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">
              Why DeLong Plumbing
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-6 uppercase">
              The Right Choice
              <span className="text-brand-red block">Every Time</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              When you call DeLong Plumbing, you get a skilled plumber who takes
              pride in their work. We serve Azusa, Covina, West Covina, Glendora,
              Duarte, Monrovia, and surrounding areas across the San Gabriel Valley.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mt-0.5">
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
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-lg uppercase mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: service area card */}
          <div className="bg-brand-gray-dark border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white uppercase mb-6">
              Service Area
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Based in <span className="text-white font-semibold">Azusa, CA</span>,
              we proudly serve the entire San Gabriel Valley including:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Azusa",
                "Covina",
                "West Covina",
                "Glendora",
                "Duarte",
                "Monrovia",
                "Arcadia",
                "Temple City",
                "El Monte",
                "Baldwin Park",
                "Irwindale",
                "San Dimas",
              ].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                  {city}
                </div>
              ))}
            </div>
            <a
              href="tel:6268339514"
              className="block w-full text-center bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded transition-colors text-lg"
            >
              Not on the list? Call us!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
