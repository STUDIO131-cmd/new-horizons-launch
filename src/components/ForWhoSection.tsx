const ForWhoSection = () => {
  const painPoints = [
    "já tem capacidade, mas trava na hora de decidir o que vem primeiro;",
    "se informa muito, mas executa pouco com rotina;",
    "trabalha demais e sente que o resultado não acompanha;",
    "vende, mas sem previsibilidade (todo mês recomeça do zero);",
    "tem visão de expansão, mas não tem um mapa claro de posicionamento, conteúdo e vendas."
  ];

  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">
          Para quem?
        </h2>
        
        <h3 className="font-ui text-lg md:text-xl text-white/80 text-center mb-10 leading-relaxed">
          Para pequenos e médios empresários da região que já têm capacidade — e querem{" "}
          <strong className="text-white">direção para transformar marca pessoal em crescimento.</strong>
        </h3>

        <div className="space-y-4 mb-10">
          {painPoints.map((point, index) => (
            <p key={index} className="font-ui text-white/70 text-lg leading-relaxed">
              • {point}
            </p>
          ))}
        </div>

        <p className="font-ui text-xl text-center mb-10" style={{ color: '#E8956A' }}>
          Se você sente essa contradição silenciosa — competência alta, direção baixa — então essa Imersão é o seu lugar.
        </p>

        <div className="text-center">
          <a href="#lista" className="btn-journey text-lg">
            QUERO GARANTIR A MINHA VAGA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
