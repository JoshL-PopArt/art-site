import type { Artwork } from '@/data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  onOpen: (artwork: Artwork) => void;
  onInquire: (artwork: Artwork) => void;
}

export default function ArtworkCard({ artwork, onOpen, onInquire }: ArtworkCardProps) {
  const { title, year, medium, size, available, image } = artwork;

  return (
    <figure className="group">
      <button
        type="button"
        onClick={() => onOpen(artwork)}
        disabled={!image}
        aria-label={`View ${title} larger`}
        className="block w-full cursor-zoom-in overflow-hidden bg-white p-[clamp(14px,2.2vw,28px)] shadow-[0_1px_0_#d9d9d5,0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-1 disabled:cursor-default disabled:group-hover:translate-y-0"
      >
        {image ? (
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={`${title}, ${medium} by Josh Lichtblau`}
            loading="lazy"
            className="block aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <span className="grid aspect-[4/5] w-full place-items-center border border-dashed border-line bg-[linear-gradient(135deg,#d9d9d5,transparent)] text-[15px] text-soft">
            Artwork coming soon
          </span>
        )}
      </button>
      <figcaption className="mt-[18px] grid grid-cols-[1fr_auto] gap-x-4 gap-y-0.5 text-[15px]">
        <h3 className="col-span-2 text-lg font-medium">
          {title}, {year}
        </h3>
        <span className="col-span-2 text-soft">
          {medium}
          <br />
          {size}
        </span>
        <span className="col-span-2 mt-2 flex items-center gap-2 text-sm text-soft">
          <span
            aria-hidden="true"
            className={`h-2 w-2 rounded-full ${available ? 'bg-[#2e7d4f]' : 'bg-[#b5b5b0]'}`}
          />
          {available ? 'Available' : 'Not available'}
        </span>
        {available && (
          <a
            href="#contact"
            onClick={() => onInquire(artwork)}
            className="col-span-2 mt-1.5 text-soft no-underline transition-colors hover:text-ink"
          >
            Inquire about this piece
          </a>
        )}
      </figcaption>
    </figure>
  );
}
