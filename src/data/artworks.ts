export interface Artwork {
  title: string;
  year: string;
  medium: string;
  size: string;
  image: string;
}

// To add a piece, copy one entry. image is a file in the public folder (leave "" for a placeholder).
export const artworks: Artwork[] = [
  { title: 'I Have No Idea', year: 'October 2026', medium: 'Oil on canvas', size: '11 x 14 in', image: 'artwork-01.jpg' },
  { title: 'Untitled No. 4', year: '2024', medium: 'Mixed media', size: '30 x 40 in', image: 'images/20131123_165619.jpg' },
  { title: 'Untitled No. 7', year: '2014', medium: 'Acrylic on canvas', size: '18 x 24 in', image: 'images/20140309_224318.jpg' },
  { title: 'Untitled No. 8', year: '2025', medium: 'Oil on canvas', size: '12 x 36 in', image: 'images/IMG_0052.jpg' },
  { title: 'Untitled No. 9', year: '2025', medium: 'Acrylic on canvas', size: '24 x 30 in', image: 'images/IMG_0712.jpg' },
  { title: 'Untitled No. 10', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', image: 'images/IMG_4532.jpg' },
  { title: 'Untitled No. 11', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', image: 'images/IMG_5246.jpg' },
  { title: 'Untitled No. 12', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', image: 'images/IMG_5247.jpg' },
  { title: 'Untitled No. 13', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', image: 'images/IMG_5248.jpg' },
  { title: 'Untitled No. 14', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', image: 'images/IMG_5249.jpg' },
];
