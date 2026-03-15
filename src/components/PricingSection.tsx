const PricingSection = () => {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Sua vaga na Jornada Imersão
        </h2>
        
        <div className="card-dark p-8 mt-8">
          <p className="font-ui text-white/60 mb-2">INVESTIMENTO:</p>
          <p className="font-ui text-white/60 line-through mb-2">De R$1.500,00</p>
          
          <p className="font-display text-4xl md:text-5xl text-white mb-2">
            12x de <strong style={{ color: '#E8956A' }}>R$90,06</strong>
          </p>
          
          <p className="font-ui text-white/70 mb-8">
            ou <strong className="text-white">R$897,00</strong> à vista
          </p>

          <a href="#lista" className="btn-journey text-lg">
            GARANTIR ACESSO
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
