const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black text-center">
      <img
        src="https://www.studio131.com.br/wp-content/uploads/2026/01/THE-JOURNEY-BRANCO-1.png"
        alt="The Journey"
        className="h-16 mx-auto mb-6 opacity-80"
      />

      <p className="font-ui text-sm text-white/50">
        Copyright © 2026 Todos os direitos reservados.
      </p>

      <div className="mt-6 pt-6 border-t border-white/10">
        <nav className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://redo-with-charm.lovable.app" 
            className="font-ui text-sm text-white/50 hover:text-white transition-colors"
          >
            Studio 131
          </a>
          <a 
            href="https://wa.me/5517992595117" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-sm text-white/50 hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
