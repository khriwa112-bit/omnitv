import { Check, Phone } from "lucide-react";
import SiteShell from "../components/SiteShell";
import PricingCalculator from "../components/PricingCalculator";

const TRUST = [
  "Direct actief na betaling",
  "Geen contract, stopzetten wanneer je wilt",
  "4K/UHD kwaliteit op elk apparaat",
  "24/7 WhatsApp support",
];

export default function Abonnementen() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-black via-zinc-950 to-red-950 border-b-2 border-zinc-800 text-white pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #ef0000 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Beste IPTV pakketten
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight mb-5 leading-tight">
            Onze <span className="text-red-500">Abonnementen</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Kies jouw abonnement en kijk vandaag nog 80.000+ kanalen, films &amp; series in 4K. <strong className="text-white">Vanaf slechts €5 per maand</strong> — direct actief.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {TRUST.map((item) => (
              <span key={item} className="flex items-center gap-1.5 bg-zinc-800/60 border border-zinc-700 text-zinc-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-red-400 shrink-0" /> {item}
              </span>
            ))}
          </div>
          <a
            href="https://wa.me/447449708976?text=Hoi%2C%20ik%20wil%20graag%20een%20omnitv%20abonnement%20bestellen"
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
        <p className="text-zinc-400 text-sm mb-4">Nog vragen? Ons team staat klaar via WhatsApp.</p>
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
