const galleryImages = [
  "https://www.studio131.com.br/wp-content/uploads/2026/01/i5tec016.webp",
];

const GallerySection = () => {
  return (
    <section className="py-8 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <img
          src={galleryImages[0]}
          alt="Galeria A Jornada"
          className="w-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default GallerySection;
