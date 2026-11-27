export interface Artwork {
  title: string;
  year: string;
  medium: string;
  size: string;
  available: boolean; // true = shows "Available" and an inquire link; false = shows "Not available", no inquire link
  image: string;
}

// To add a piece, copy one entry. image is a file in the public folder (leave "" for a placeholder).
export const artworks: Artwork[] = [
  { title: 'Sun over reddish field', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/20131123-165619.jpg' },
  { title: 'Best neighbors next door (left)', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/20140309-224318.jpg' },
  { title: 'Getting the message through', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: false, image: 'images/img-0052.jpg' },
  { title: 'Is red taking over?', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-0211.jpg' },
  { title: 'Best neighbors next door (right)', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-0712.jpg' },
  { title: 'Everything is a jumble', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/img-4532.jpg' },
  { title: 'Four angry staring televisions', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/img-5246.jpg' },
  { title: 'Is that my hat?', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/img-5247.jpg' },
  { title: 'Boxed in a mall', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5248.jpg' },
  { title: 'Boxed in after dark', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5249.jpg' },
  { title: 'Fly a colorful flag', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: false, image: 'images/img-5252.jpg' },
  { title: 'Houses near the ski slope', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: false, image: 'images/img-5253.jpg' },
  { title: 'At my high rise?', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5255.jpg' },
  { title: 'Flowers blooming over mountains', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5256.jpg' },
  { title: 'River winding through fields', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5257.jpg' },
  { title: 'Several stages of flight', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/img-5259.jpg' },
  { title: 'View through the fences', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/img-5261.jpg' },
  { title: 'Pollinators buzzing all around', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/img-5262.jpg' },
  { title: 'Racing through the city', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/img-5265.jpg' },
  { title: 'What is holding this together?', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: true, image: 'images/img-5274.jpg' },
  { title: 'She is feeling stressed', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5322.jpg' },
  { title: 'There is a camera here', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5323.jpg' },
  { title: 'Pond dominates the area', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5336.jpg' },
  { title: 'Sunrise over blue hills', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5339.jpg' },
  { title: 'Racing to the finish', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5340.jpg' },
  { title: 'Ninety is the new seventy', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-5341.jpg' },
  { title: 'Climbing to the stars', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: true, image: 'images/img-5366.jpg' },
  { title: 'Will the center hold?', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: true, image: 'images/img-6677.jpg' },
  { title: 'Reeds billowing the pond', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: false, image: 'images/img-7160.jpg' },
  { title: 'The city is getting tired', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-7242.jpg' },
  { title: 'I have no idea', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: false, image: 'images/img-7249.jpg' },
  { title: 'Basque in the summer', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: false, image: 'images/img-7254.jpg' },
  { title: 'Is this my face?', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-7284.jpg' },
  { title: 'Lost in the prism', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-7304.jpg' },
  { title: 'Cracked up and down', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: true, image: 'images/img-7365.jpg' },
  { title: 'Tangled mostly in blue', year: 'Recent', medium: 'Oil on canvas', size: 'Size on request', available: false, image: 'images/img-7308.jpg' },
  { title: 'Through the stained glass', year: 'Recent', medium: 'Acrylic on canvas', size: 'Size on request', available: false, image: 'images/img-7974.jpg' },
];
