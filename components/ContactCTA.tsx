"use client";

import { useState } from "react";

const PHONE = "626-833-9514";
const PHONE_HREF = "tel:6268339514";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(`Plumbing Service Request - ${formData.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nService Needed: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:delongplumbing@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <div>
            <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-6 uppercase">
              Ready to Fix Your
              <span className="text-brand-red block">Plumbing Problem?</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Don&apos;t wait for a small issue to become a big one. Call or send a
              message and we&apos;ll get back to you fast.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-5 bg-brand-black border border-white/10 hover:border-brand-red/50 rounded-xl p-5 group transition-all card-hover"
              >
                <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/50 text-sm uppercase tracking-wider mb-0.5">Call Us</div>
                  <div className="text-white font-heading font-bold text-2xl group-hover:text-brand-red transition-colors">
                    {PHONE}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-5 bg-brand-black border border-white/10 rounded-xl p-5">
                <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/50 text-sm uppercase tracking-wider mb-0.5">Location</div>
                  <div className="text-white font-semibold text-lg">Azusa, California</div>
                  <div className="text-white/50 text-sm">Serving the San Gabriel Valley</div>
                </div>
              </div>

              <a
                href="https://www.instagram.com/delong_plumbing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-brand-black border border-white/10 hover:border-pink-500/50 rounded-xl p-5 group transition-all card-hover"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/50 text-sm uppercase tracking-wider mb-0.5">Instagram</div>
                  <div className="text-white font-semibold text-lg group-hover:text-pink-400 transition-colors">
                    @delong_plumbing
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-brand-black border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/60">We&apos;ll be in touch shortly. Or call us directly at</p>
                <a href={PHONE_HREF} className="text-brand-red font-bold text-xl mt-2 block">{PHONE}</a>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-gray-dark border border-white/20 focus:border-brand-red text-white rounded-lg px-4 py-3 outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-gray-dark border border-white/20 focus:border-brand-red text-white rounded-lg px-4 py-3 outline-none transition-colors"
                      placeholder="(626) 555-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-brand-gray-dark border border-white/20 focus:border-brand-red text-white rounded-lg px-4 py-3 outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option>Drain Rooter</option>
                      <option>Hydro-Jetting</option>
                      <option>Water Heater</option>
                      <option>Pipe Repair/Replacement</option>
                      <option>Fixture Installation</option>
                      <option>Commercial Plumbing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5">Describe the Issue</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-brand-gray-dark border border-white/20 focus:border-brand-red text-white rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                      placeholder="Tell us what's going on..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded-lg transition-colors text-lg uppercase tracking-wide"
                  >
                    Send Message
                  </button>
                  <p className="text-white/30 text-xs text-center">
                    Or call us directly at{" "}
                    <a href={PHONE_HREF} className="text-brand-red hover:underline">
                      {PHONE}
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
