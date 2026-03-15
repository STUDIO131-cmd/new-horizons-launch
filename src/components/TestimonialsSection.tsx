import { useState } from "react";
import { Play } from "lucide-react";

const testimonialVideos = [
  "https://www.studio131.com.br/wp-content/uploads/2026/01/Depoimento-1.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/Depoimento-2_1.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/9.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/10.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/13.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/7.mp4",
];

const TestimonialsSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-12">
          O que diz quem viveu a experiência?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonialVideos.map((video, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden bg-zinc-900 aspect-[9/16]">
              {playingIndex !== index ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setPlayingIndex(index)}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              ) : (
                <video
                  src={video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
