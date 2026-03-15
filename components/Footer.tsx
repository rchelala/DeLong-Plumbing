import Image from "next/image";

const PHONE = "626-833-9514";
const PHONE_HREF = "tel:6268339514";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/10">
      {/* Big CTA bar */}
      <div className="bg-brand-red py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-3">
            Plumbing Problem? Call Now.
          </h3>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white text-brand-red font-bold text-2xl md:text-3xl px-10 py-5 rounded-xl hover:bg-white/90 transition-colors mt-2"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {PHONE}
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="DeLong Plumbing"
              width={150}
              height={75}
              className="object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Professional plumbing services in Azusa, CA and the San Gabriel
              Valley. Drain rooter, hydro-jetting, water heaters, and all
              plumbing services.
            </p>
            <a
              href="https://www.instagram.com/delong_plumbing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-white/50 hover:text-pink-400 transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @delong_plumbing
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {[
                "Drain Rooter",
                "Hydro-Jetting",
                "Water Heater Installation",
                "Water Heater Repair",
                "Pipe Repair & Replacement",
                "Fixture Installation",
                "Commercial Plumbing",
                "All Plumbing Services",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <span className="w-1 h-1 bg-brand-red rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-white/40 uppercase tracking-wider text-xs mb-1">Phone</div>
                <a href={PHONE_HREF} className="text-white hover:text-brand-red transition-colors font-semibold text-lg">
                  {PHONE}
                </a>
              </div>
              <div>
                <div className="text-white/40 uppercase tracking-wider text-xs mb-1">Location</div>
                <div className="text-white/70">Azusa, California</div>
                <div className="text-white/50">San Gabriel Valley</div>
              </div>
              <div>
                <div className="text-white/40 uppercase tracking-wider text-xs mb-1">Hours</div>
                <div className="text-white/70">Call for availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <span>© {currentYear} DeLong Plumbing. All rights reserved.</span>
          <span>Azusa, CA 626-833-9514</span>
        </div>
      </div>
    </footer>
  );
}
