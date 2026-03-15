import { useState } from "react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    whatsapp: "",
    faixaEtaria: "",
    perfil: "",
    area: "",
    tempoMercado: "",
    realidade: "",
    disponibilidade: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Inscrição enviada com sucesso!");
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white font-ui text-base focus:outline-none focus:ring-2 focus:ring-orange-400";
  const labelClass = "block font-ui text-sm font-medium text-white/80 mb-2";
  const selectClass = "w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white font-ui text-base focus:outline-none focus:ring-2 focus:ring-orange-400";

  return (
    <section id="lista" className="py-16 px-4 bg-zinc-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">
          Inscrição na Lista de Espera (21 e 22/02)
        </h2>
        
        <p className="font-ui text-white/70 text-center mb-10 leading-relaxed">
          Ao preencher o formulário, você registra seu interesse em participar da próxima turma presencial.
          Este é um processo de seleção: entrar na lista de espera não garante a vaga.{" "}
          <strong className="text-white">Os selecionados serão contatados pessoalmente.</strong>
        </p>

        <form onSubmit={handleSubmit} className="card-dark p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Nome *</label>
              <input type="text" name="nome" required className={inputClass} value={formData.nome} onChange={handleChange} />
            </div>
            <div>
              <label className={labelClass}>Sobrenome *</label>
              <input type="text" name="sobrenome" required className={inputClass} value={formData.sobrenome} onChange={handleChange} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Contato (Whatsapp: DDD+Número) *</label>
            <input type="tel" name="whatsapp" required className={inputClass} value={formData.whatsapp} onChange={handleChange} />
          </div>

          <div>
            <label className={labelClass}>Faixa etária *</label>
            <select name="faixaEtaria" required className={selectClass} value={formData.faixaEtaria} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="ate24">Até 24 anos</option>
              <option value="25a33">25 a 33 anos</option>
              <option value="34a42">34 a 42 anos</option>
              <option value="43a51">43 a 51 anos</option>
              <option value="52mais">52 anos ou mais</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Hoje, você se define mais como: *</label>
            <select name="perfil" required className={selectClass} value={formData.perfil} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="liberal">Profissional liberal</option>
              <option value="empreendedor">Empreendedor(a)</option>
              <option value="gestor">Gestor(a) / Líder</option>
              <option value="transicao">Em transição de carreira</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Você atua em qual área? *</label>
            <input 
              type="text" 
              name="area" 
              required 
              placeholder="Descreva com o que você trabalha" 
              className={inputClass} 
              value={formData.area} 
              onChange={handleChange} 
            />
          </div>

          <div>
            <label className={labelClass}>Há quanto tempo você atua no mercado? *</label>
            <select name="tempoMercado" required className={selectClass} value={formData.tempoMercado} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="menos2">Menos de 2 anos</option>
              <option value="2a5">2 a 5 anos</option>
              <option value="5a10">5 a 10 anos</option>
              <option value="10mais">10+ anos</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Qual frase mais se aproxima da sua realidade hoje? *</label>
            <select name="realidade" required className={selectClass} value={formData.realidade} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="esforco">Trabalho muito, mas meu esforço não se converte em resultado proporcional</option>
              <option value="clareza">Tenho resultado, mas falta clareza de posicionamento</option>
              <option value="depende">Minha marca funciona, mas depende demais de mim</option>
              <option value="direcao">Sinto que estou pronto para crescer, mas sem direção clara</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Se selecionado, você teria disponibilidade real para participar? *</label>
            <div className="space-y-2">
              {["Sim", "Depende da data", "Quero entender se é pra mim"].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="disponibilidade" 
                    value={option} 
                    required 
                    className="w-4 h-4" 
                    checked={formData.disponibilidade === option} 
                    onChange={handleChange} 
                  />
                  <span className="font-ui text-white/80">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full btn-journey text-lg py-4">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
