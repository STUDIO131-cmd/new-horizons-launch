const HeadlineSection = () => {
  const pillars = ["Posicionamento", "Conteúdo", "Vendas"];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-4xl text-white leading-relaxed mb-8">
          Pare de carregar seu negócio na cabeça: saia da Imersão com um{" "}
          <strong style={{ color: '#E8956A' }}>mapa de crescimento</strong>{" "}
          que sua rotina consegue sustentar.
        </h2>

        <p className="font-ui text-lg text-white/70 mb-10">
          Para pequenos e médios empresários da região que querem fazer da marca pessoal o{" "}
          <strong className="text-white">motor do crescimento.</strong>
        </p>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="px-6 py-3 rounded-full border-2"
              style={{ borderColor: '#E8956A' }}
            >
              <span className="font-ui text-white font-medium">{pillar}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeadlineSection;
