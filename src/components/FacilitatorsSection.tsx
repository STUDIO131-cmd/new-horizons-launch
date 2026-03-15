const facilitators = [
  {
    name: "Igor Gagliardi",
    bio: "Igor Gagliardi é referência por unir pensamento estratégico, criatividade e precisão na construção de marcas, posicionamento e negócios. Sua trajetória começou na fotografia e no projeto 'Como Você se Vê', onde aprofundou o olhar sobre identidade, valor e percepção. Depois, fundou o Studio 131, agência que cresceu 5x em faturamento nos últimos 4 anos. Desenvolveu a metodologia autoral Jornada de Ascensão — um sistema que organiza posicionamento, conteúdo e vendas.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/01/5D4A6083-scaled.jpg"
  },
  {
    name: "Pedro Sales",
    bio: "Fundador da Ministrare, Pedro Sales é especialista em tráfego pago e um dos nomes mais consistentes regionalmente em crescimento acelerado para negócios locais. Seus resultados vêm de campanhas que impactam diretamente o faturamento. Sua força está na prática: ele domina o que faz porque opera diariamente no campo real. Pedro une raciocínio estruturado, leitura precisa de canais e visão comercial.",
    image: null
  }
];

const FacilitatorsSection = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-12">
          Quem te acompanha n'A Jornada Imersão?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitators.map((person, index) => (
            <div key={index} className="card-dark p-6">
              {person.image && (
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              
              <h3 
                className="font-body text-2xl font-semibold mb-4"
                style={{ color: '#E8956A' }}
              >
                {person.name}
              </h3>
              
              <p className="font-ui text-white/70 leading-relaxed">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitatorsSection;
