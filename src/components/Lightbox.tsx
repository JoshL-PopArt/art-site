import { useEffect, useRef } from 'react';
import type { Artwork } from '@/data/artworks';

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function Lightbox({ artwork, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (artwork && !dialog.open) dialog.showModal();
    if (!artwork && dialog.open) dialog.close();
  }, [artwork]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) dialogRef.current?.close();
      }}
      className="m-auto max-h-[92vh] max-w-[min(92vw,900px)] border-0 bg-transparent p-0 backdrop:bg-black/90"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => dialogRef.current?.close()}
        className="fixed right-5 top-4 text-4xl leading-none text-white"
      >
        &times;
      </button>
      {artwork && (
        <>
          <img
            src={`${import.meta.env.BASE_URL}${artwork.image}`}
            alt={artwork.title}
            className="mx-auto block max-h-[82vh] max-w-full"
          />
          <p className="mt-3 text-center text-base text-neutral-200">
            {`${artwork.title}, ${artwork.year}. ${artwork.medium}, ${artwork.size}`}
          </p>
        </>
      )}
    </dialog>
  );
}
