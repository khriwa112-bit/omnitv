import { Check, Phone, Tv, Zap, Shield, Star, Users } from "lucide-react";
import SiteShell from "../components/SiteShell";
import ChannelSearch from "../components/ChannelSearch";
import SportsAndEntertainment from "../components/SportsAndEntertainment";
import { fireWhatsAppConversion } from "../utils/gtag";

const PACKAGES = [
  {
    id: "basis",
    label: "Basis Pakket",
    sub: "Perfect om te starten",
    price: "9,99",
    period: "3 maanden",
    total: "29,97",
    badge: null,
    features: [
      "80.000+ Live Kanalen",
      "200.000+ Films & Series",
      "4K/UHD Beeldkwaliteit",
      "1 Scherm tegelijk",
      "24/7 WhatsApp Support",
      "M3U & Xtream Codes",
    ],
    waText: "Hoi%2C%20ik%20wil%20het%20Basis%20pakket%20van%20omnitv%20bestellen%20(3%20maanden)",
  },
  {
    id: "populair",
    label: "Populair Pakket",
    sub: "Meest gekozen door klanten",
    price: "7,50",
    period: "12 maanden",
    total: "90,00",
    badge: "POPULAIR",
    features: [
      "80.000+ Live Kanalen",
      "200.000+ Films & Series",
      "4K/8K Beeldkwaliteit",
      "1 Scherm tegelijk",
      "24/7 WhatsApp Support",
      "M3U & Xtream Codes",
      "Gratis EPG (TV-Gids)",
      "Catch-up (Uitzending Gemist)",
    ],
    waText: "Hoi%2C%20ik%20wil%20het%20Populaire%20pakket%20van%20omnitv%20bestellen%20(12%20maanden)",
  },
  {
    id: "gezin",
    label: "Gezins Pakket",
    sub: "Meerdere schermen thuis",
    price: "5,20",
    period: "12 + 3 maanden gratis",
    total: "78,00",
    badge: "BESTE DEAL",
    features: [
      "15 MAANDEN TOTAAL",
      "80.000+ Live Kanalen",
      "200.000+ Films & Series",
      "4K/8K Beeldkwaliteit",
      "Tot 4 schermen tegelijk",
      "24/7 WhatsApp Support",
      "M3U & Xtream Codes",
      "Gratis EPG (TV-Gids)",
      "Full Catch-up & Live Pause",
    ],
    waText: "Hoi%2C%20ik%20wil%20het%20Gezins%20pakket%20van%20omnitv%20bestellen%20(12%2B3%20maanden)",
  },
];

const FEATURES = [
  { icon: Tv, label: "80.000+ kanalen", sub: "NL, BE, Sport & VOD" },
  { icon: Zap, label: "Direct actief", sub: "Binnen 5 minuten online" },
  { icon: Shield, label: "Geen contract", sub: "Stop wanneer je wilt" },
  { icon: Users, label: "Tot 4 schermen", sub: "Heel het gezin" },
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
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Kies jouw ideale IPTV pakket. Inclusief 80.000+ kanalen en 4K kwaliteit.{" "}
            <strong className="text-white">Starten vanaf €5 per maand.</strong>
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {FEATURES.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center">
                <Icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-white font-bold text-xs">{label}</p>
                <p className="text-zinc-500 text-[10px] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChannelSearch />
      <SportsAndEntertainment />

      {/* Packages grid */}
      <section className="bg-zinc-950 py-16 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => {
              const isBest = pkg.id === "gezin";
              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col rounded-2xl border p-7 ${
                    isBest
                      ? "bg-red-950/40 border-red-600 shadow-xl shadow-red-950/30"
                      : "bg-zinc-900 border-zinc-800"
                  }`}
                >
                  {pkg.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap ${
                      isBest ? "bg-red-600 text-white" : "bg-zinc-700 text-zinc-200"
                    }`}>
                      {pkg.badge}
                    </span>
                  )}

                  <h2 className="text-lg font-extrabold text-white">{pkg.label}</h2>
                  <p className="text-zinc-500 text-xs mb-5 mt-1">{pkg.sub}</p>

                  <div className="mb-1">
                    <span className="text-4xl font-black text-white">€{pkg.price}</span>
                    <span className="text-zinc-400 text-sm ml-1">/maand</span>
                  </div>
                  <p className="text-zinc-500 text-xs mb-6">{pkg.period} · Totaal €{pkg.total}</p>

                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isBest ? "text-red-400" : "text-red-400"}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/447449708976?text=${pkg.waText}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={fireWhatsAppConversion}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ${
                      isBest
                        ? "bg-red-600 hover:bg-red-700 text-white shadow-lg"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
                    }`}
                  >
                    <Phone className="w-4 h-4" /> Bestel via WhatsApp
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-black border-b border-zinc-800 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-xs text-zinc-400 font-semibold">
          {["23.000+ tevreden klanten", "Direct actief na betaling", "Geen verborgen kosten", "iDEAL · Bancontact · PayPal · VISA"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-red-500 fill-red-500" /> {item}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-zinc-950 py-12 text-center">
        <p className="text-zinc-400 text-sm mb-4">Nog vragen over een pakket? Wij helpen je direct via WhatsApp.</p>
        <a
          href="https://wa.me/447449708976"
          target="_blank"
          rel="noreferrer"
          onClick={fireWhatsAppConversion}
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition-colors text-sm"
        >
          <Phone className="w-4 h-4" /> WhatsApp 24/7 Support
        </a>
      </section>
    </SiteShell>
  );
}
