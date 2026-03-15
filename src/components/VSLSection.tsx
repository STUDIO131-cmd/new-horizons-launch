import { useState } from "react";
import { Play } from "lucide-react";

const VSLSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos = [
    {
      thumbnail: "https://www.studio131.com.br/wp-content/uploads/2026/01/Aperte-o-PLAY-e-saiba-mais-sobre-a-Imersao.jpg",
      video: "https://www.studio131.com.br/wp-content/uploads/2026/01/Carta-de-Vendas-JDA-21-e-22-de-Janeiro-Horizontal-1.mp4",
      orientation: "horizontal"
    },
    {
      thumbnail: "https://www.studio131.com.br/wp-content/uploads/2026/01/Aperte-o-PLAY-e-saiba-mais-sobre-a-Imersao-1080-x-1920-px-1.jpg",
      video: "https://www.studio131.com.br/wp-content/uploads/2026/01/Carta-de-Vendas-JDA-21-e-22-de-Janeiro-Vertical-Versao-2.mp4",
      orientation: "vertical"
    }
  ];

  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((item, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden ${item.orientation === 'vertical' ? 'max-w-[300px] mx-auto' : ''}`}
            >
              {playingVideo !== item.video ? (
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => setPlayingVideo(item.video)}
                >
                  <img
                    src={item.thumbnail}
                    alt="Vídeo VSL"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-black ml-1" fill="black" />
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  src={item.video}
                  controls
                  autoPlay
                  className="w-full h-auto"
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#lista" className="btn-journey text-lg">
            QUERO GARANTIR A MINHA VAGA
          </a>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
