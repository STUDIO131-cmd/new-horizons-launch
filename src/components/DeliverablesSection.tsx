import { Calendar, BookOpen, Wine, Camera } from "lucide-react";

const deliverables = [
  { icon: Calendar, title: "Acesso aos dois dias de evento" },
  { icon: BookOpen, title: "Apostila com exercícios guiados" },
  { icon: Wine, title: "Happy Hour incluso" },
  { icon: Camera, title: "Retrato com Igor Gagliardi" },
];

const DeliverablesSection = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="card-dark p-6 text-center"
            >
              <item.icon 
                size={32} 
                className="mx-auto mb-3"
                style={{ color: '#E8956A' }}
              />
              <p className="font-ui text-white text-sm font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
