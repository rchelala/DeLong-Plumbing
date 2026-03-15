"use client";

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY COMPONENT
//
// HOW TO ADD YOUR INSTAGRAM PHOTOS:
// 1. Go to https://www.instagram.com/delong_plumbing/
// 2. Open each post, right-click the image, and "Save image as..."
// 3. Save the photos to: public/images/gallery/
//    Name them: gallery-1.jpg, gallery-2.jpg, gallery-3.jpg, etc.
// 4. Update the `galleryImages` array below with the correct filenames and captions.
//
// For videos from Instagram:
// - Download using a tool like SnapInsta (https://snapinsta.app/)
// - Save as .mp4 to public/images/gallery/
// - Use the <video> tag in a custom card (example shown below)
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";

const galleryImages = [
  // Replace these placeholder entries with your actual photos:
  { src: "/images/gallery/gallery-1.jpg", caption: "Drain rooter service" },
  { src: "/images/gallery/gallery-2.jpg", caption: "Hydro-jetting in action" },
  { src: "/images/gallery/gallery-3.jpg", caption: "Water heater installation" },
  { src: "/images/gallery/gallery-4.jpg", caption: "Pipe repair" },
  { src: "/images/gallery/gallery-5.jpg", caption: "Commercial plumbing" },
  { src: "/images/gallery/gallery-6.jpg", caption: "Fixture installation" },
  { src: "/images/gallery/gallery-7.jpg", caption: "Drain cleaning" },
  { src: "/images/gallery/gallery-8.jpg", caption: "Emergency repair" },
  { src: "/images/gallery/gallery-9.jpg", caption: "Sewer line work" },
];

function GalleryCard({ src, caption }: { src: string; caption: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl aspect-square bg-brand-black border border-white/10 group">
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <svg
            className="w-12 h-12 text-white/20 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-white/30 text-xs text-center">Add photo here</p>
          <p className="text-white/20 text-xs text-center mt-1">{caption}</p>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setError(true)}
        />
      )}
      {!error && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-medium">{caption}</span>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-red uppercase tracking-widest text-sm font-semibold">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-4 uppercase">
            Recent Jobs
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Real jobs. Real results. See some of our recent plumbing work across
            Azusa and the San Gabriel Valley.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, idx) => (
            <GalleryCard key={idx} src={img.src} caption={img.caption} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/50 mb-4">Follow us for more job photos & updates</p>
          <a
            href="https://www.instagram.com/delong_plumbing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @delong_plumbing on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
