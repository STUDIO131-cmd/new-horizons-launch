const tickerItems = [
  "Próxima turma: 21 e 22/02",
  "13h às 18h",
  "Catanduva (SP) - Hotel Ibis",
];

const Ticker = () => {
  const duplicated = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="py-3 overflow-hidden" style={{ backgroundColor: '#E8956A' }}>
      <div className="flex animate-scroll-left">
        {duplicated.map((item, index) => (
          <span 
            key={index} 
            className="font-ui text-white text-sm font-medium px-8 whitespace-nowrap"
          >
            {item} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
