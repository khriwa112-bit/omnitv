import { Star, Calendar, Monitor } from "lucide-react";

export default function Advantages() {
  const cards = [
    {
      icon: <Star className="w-6 h-6 text-red-500" />,
      bg: "bg-zinc-900 border-zinc-800",
      iconBg: "bg-red-950 border-red-900",
      title: "Prime Kwaliteit",
      description: "Premium 4K streamingkwaliteit, wanneer je maar wilt op al je favoriete zenders."
    },
    {
      icon: <Calendar className="w-6 h-6 text-red-500" />,
      bg: "bg-zinc-900 border-zinc-800",
      iconBg: "bg-red-950 border-red-900",
      title: "Flexibel",
      description: "Kies 3, 6 of 12 maanden. Volledig flexibel en aanpasbaar aan jouw wensen."
    },
    {
      icon: <Monitor className="w-6 h-6 text-red-500" />,
      bg: "bg-zinc-900 border-zinc-800",
      iconBg: "bg-red-950 border-red-900",
      title: "Alle Apparaten",
      description: "Werkt op Smart TV, Fire Stick, telefoon, tablet, PC en vrijwel elke box."
    }
  ];

  return (
    <section className="bg-zinc-950 text-white py-16 border-b-2 border-zinc-800" id="advantages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${card.bg} shadow-sm flex flex-col gap-4`}>
              <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-extrabold text-white">{card.title}</h3>
              <p className="text-sm text-white leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <span className="text-xs uppercase font-sans text-red-400 font-bold tracking-widest bg-red-950 border border-red-900 px-3 py-1 rounded-full mb-6 inline-block">
            23000+ TEVREDEN KLANTEN
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
            #1 IPTV in Nederland<br />volgens onze klanten
          </h2>
        </div>

      </div>
    </section>
  );
}
