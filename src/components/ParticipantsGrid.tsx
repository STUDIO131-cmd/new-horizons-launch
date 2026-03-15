const participants = [
  "https://www.studio131.com.br/wp-content/uploads/2026/01/2.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/3.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/4.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/5.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/6.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/7.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/8.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/9.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/10.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/11.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/13.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/14.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/15.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/16.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/17.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/18.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/19.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/20.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/21.png",
];

const ParticipantsGrid = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <h2 className="font-display text-2xl md:text-3xl text-white text-center mb-8">
        Quem já participou <strong style={{ color: '#E8956A' }}>d'A Jornada Imersão?</strong>
      </h2>

      <div className="max-w-6xl mx-auto">
        <img 
          src="https://www.studio131.com.br/wp-content/uploads/2026/01/Icons-Participantes-JDA.png"
          alt="Participantes"
          className="w-full mb-8"
        />
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {participants.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Participante ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsGrid;
