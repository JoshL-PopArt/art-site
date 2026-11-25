import { useState } from 'react';
import Header from '@/components/Header';
import ArtworkCard from '@/components/ArtworkCard';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Lightbox from '@/components/Lightbox';
import { artworks, type Artwork } from '@/data/artworks';

export default function App() {
  const [lightboxArtwork, setLightboxArtwork] = useState<Artwork | null>(null);
  const [inquiryPrefill, setInquiryPrefill] = useState<{ title: string } | null>(null);

  return (
    <div className="min-h-screen bg-wall font-light text-ink">
      <Header />

      <main id="top">
        <div className="px-[clamp(20px,5vw,64px)] pb-[clamp(40px,7vw,90px)] pt-[clamp(70px,14vw,170px)]">
          <h1 className="max-w-[12ch] text-[clamp(48px,11vw,170px)] font-light leading-[0.95] tracking-[-0.03em]">
            Selected works
          </h1>
          <p className="mt-7 max-w-[34ch] text-soft">
            Original pieces by Josh Lichtblau. Every work is available to inquire about.
          </p>
        </div>

        <div
          id="work"
          className="grid scroll-mt-24 grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] items-end gap-x-[clamp(24px,4vw,56px)] gap-y-[clamp(40px,6vw,88px)] px-[clamp(20px,5vw,64px)] pb-[110px] pt-10"
        >
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.title}
              artwork={artwork}
              onOpen={setLightboxArtwork}
              onInquire={(piece) => setInquiryPrefill({ title: piece.title })}
            />
          ))}
        </div>

        <AboutSection />
        <ContactSection prefill={inquiryPrefill} />
      </main>

      <footer className="border-t border-line px-[clamp(20px,5vw,64px)] py-[30px] text-sm text-soft">
        &copy; {new Date().getFullYear()} Josh Lichtblau. All artwork is copyrighted and may not be reproduced without
        permission.
      </footer>

      <Lightbox artwork={lightboxArtwork} onClose={() => setLightboxArtwork(null)} />
    </div>
  );
}
