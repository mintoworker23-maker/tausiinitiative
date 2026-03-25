const galleryImages = [
  '/gallery/IMG-20240709-WA0001.jpg',
  '/gallery/IMG-20240709-WA0003.jpg',
  '/gallery/IMG-20240709-WA0005.jpg',
  '/gallery/IMG-20240905-WA0035.jpg',
  '/gallery/IMG-20240828-WA0042.jpg',
  '/gallery/IMG-20240828-WA0079.jpg',
  '/gallery/IMG-20240828-WA0036.jpg',
  '/gallery/IMG-20240828-WA0041.jpg',
  '/gallery/IMG-20240828-WA0072.jpg',
  '/gallery/IMG-20240828-WA0038.jpg',
  '/gallery/IMG-20240828-WA0097.jpg',
  '/gallery/IMG-20240905-WA0042.jpg',
  '/gallery/IMG-20240828-WA0094.jpg',
  '/gallery/IMG-20240828-WA0100.jpg',
  '/gallery/IMG-20240828-WA0110.jpg',
];

const Gallery = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto border-[3px] border-black bg-white"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
