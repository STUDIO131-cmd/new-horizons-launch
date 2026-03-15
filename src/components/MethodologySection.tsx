const methodology = [
  {
    title: "Posicionamento de Marca",
    description: "Você vai construir a base do seu posicionamento: entender o seu público (autoimagem e percepção externa), definir a identidade da marca (personalidade, universo e narrativa), cristalizar a promessa e transformar isso em uma oferta coerente para sair com uma marca clara, reconhecível e com direção."
  },
  {
    title: "Conteúdo",
    description: "Traduzir seu posicionamento em comunicação intencional e consistente: escolher formatos que reforçam percepção e autoridade, e construir uma narrativa que organiza o que você diz (e repete com intenção) até virar referência — gerando conteúdo que não só atrai, mas sustenta presença, cria reconhecimento e prepara o caminho para a venda."
  },
  {
    title: "Vendas",
    description: "Estruturar vendas para gerar lucro com previsibilidade: definir o que medir e como decidir com dados, desenhar uma arquitetura de receita (funil, fontes de lucro e fluxo de conversão), escolher poucos canais que façam sentido para o seu contexto e operar um ciclo contínuo de análise e ajustes para crescer de forma mensurável, sustentável e sob seu comando."
  }
];

const MethodologySection = () => {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <p className="font-ui text-white/60 text-center mb-2">O que você vai levar</p>
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">
          Estrutura da Metodologia
        </h2>
        <p className="font-ui text-white/70 text-center mb-12">
          Entregáveis práticos para sair da Imersão com direção — <strong className="text-white">e não com mais anotações.</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methodology.map((item, index) => (
            <div 
              key={index} 
              className="card-dark p-6"
            >
              <h3 
                className="font-body text-xl font-semibold mb-4"
                style={{ color: '#E8956A' }}
              >
                {item.title}
              </h3>
              <p className="font-ui text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
