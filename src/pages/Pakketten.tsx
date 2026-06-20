import { Check, Phone, Tv, Zap, Shield } from "lucide-react";
import SiteShell from "../components/SiteShell";
import PricingCalculator from "../components/PricingCalculator";
import { fireWhatsAppConversion } from "../utils/gtag";

const FEATURES = [
  { icon: Tv, label: "80.000+ kanalen", sub: "NL, BE, Sport & VOD" },
  { icon: Zap, label: "Direct actief", sub: "Binnen 5 minuten online" },
  { icon: Shield, label: "Geen contract", sub: "Stop wanneer je wilt" },
];

const TRUST = [
  "Kies jouw ideale pakket",
  "1, 3, 6 of 12 maanden",
  "4K/8K beeldkwaliteit",
  "Alle apparaten ondersteund",
];

export default function Pakketten() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-black via-zinc-950 to-red-950 border-b-2 border-zinc-800 text-white pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #ef0000 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Starten vanaf €5 per maand
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight mb-5 leading-tight">
            Onze IPTV <span className="text-red-500">Pakketten</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Kies jouw ideale IPTV pakket. Van 3 maanden tot een heel jaar — allemaal inclusief 80.000+ kanalen en 4K kwaliteit. <strong className="text-white">Starten vanaf €5 per maand.</strong>
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {TRUST.map((item) => (
              <span key={item} className="flex items-center gap-1.5 bg-zinc-800/60 border border-zinc-700 text-zinc-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-red-400 shrink-0" /> {item}
              </span>
            ))}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {FEATURES.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center">
                <Icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-white font-bold text-sm">{label}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          <a
            onClick={fireWhatsAppConversion}
            href="https://wa.me/447449708976?text=Hoi%2C%20ik%20wil%20graag%20een%20omnitv%20pakket%20bestellen"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Phone className="w-5 h-5" /> Bestel via WhatsApp
          </a>
        </div>
      </section>

      {/* Pricing widget */}
      <PricingCalculator />

      {/* Bottom CTA strip */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-12 text-center">
        <p className="text-zinc-400 text-sm mb-4">Nog vragen over een pakket? Wij helpen je direct via WhatsApp.</p>
        <a
          href="https://wa.me/447449708976"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition-colors text-sm"
        >
          <Phone className="w-4 h-4" /> WhatsApp 24/7 Support
        </a>
      </section>
    </SiteShell>
  );
}
