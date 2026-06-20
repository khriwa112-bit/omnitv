import { Check, Phone, Star } from "lucide-react";
import SiteShell from "../components/SiteShell";
import { fireWhatsAppConversion } from "../utils/gtag";

const PLANS = [
  {
    id: "3_months",
    label: "3 Maanden",
    price: "11,99",
    perMonth: "11,99",
    total: "35,97",
    badge: null,
    features: [
      "80.000+ Live Kanalen",
      "200.000+ Films & Series (VOD)",
      "4K/UHD Beeldkwaliteit",
      "Stabiele Servers (99,9% uptime)",
      "24/7 WhatsApp Support",
      "M3U & Xtream Codes",
    ],
    waText: "Hoi%2C%20ik%20wil%20het%203%20maanden%20abonnement%20van%20omnitv%20bestellen",
  },
  {
    id: "6_months",
    label: "6 Maanden",
    price: "9,99",
    perMonth: "9,99",
    total: "59,94",
    badge: "POPULAIR",
    features: [
      "80.000+ Live Kanalen",
      "200.000+ Films & Series (VOD)",
      "4K/UHD Beeldkwaliteit",
      "Stabiele Servers (99,9% uptime)",
      "24/7 WhatsApp Support",
      "M3U & Xtream Codes",
      "Gratis EPG (TV-Gids)",
    ],
    waText: "Hoi%2C%20ik%20wil%20het%206%20maanden%20abonnement%20van%20omnitv%20bestellen",
  },
  {
    id: "12_months",
    label: "12 + 3 Maanden",
    price: "5,20",
    perMonth: "5,20",
    total: "78,00",
    badge: "BESTE DEAL",
    features: [
      "15 MAANDEN TOTAAL (3 gratis)",
      "80.000+ Live Kanalen",
      "200.000+ Films & Series (VOD)",
      "4K/UHD Beeldkwaliteit",
      "Stabiele Servers (99,9% uptime)",
      "24/7 WhatsApp Support",
      "M3U & Xtream Codes",
      "Gratis EPG (TV-Gids)",
      "Full Catch-up & Live Pause",
    ],
    waText: "Hoi%2C%20ik%20wil%20het%2012%2B3%20maanden%20abonnement%20van%20omnitv%20bestellen",
  },
];

const TRUST = [
  "Direct actief na betaling",
  "Geen contract — stop wanneer je wilt",
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
            Kies jouw abonnement en kijk vandaag nog 80.000+ kanalen, films &amp; series in 4K.{" "}
            <strong className="text-white">Vanaf slechts €5 per maand</strong> — direct actief.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {TRUST.map((item) => (
              <span key={item} className="flex items-center gap-1.5 bg-zinc-800/60 border border-zinc-700 text-zinc-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-red-400 shrink-0" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Plans grid */}
      <section className="bg-zinc-950 py-16 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {PLANS.map((plan) => {
              const isBest = plan.id === "12_months";
              const mobileOrder: Record<string, string> = {
                "12_months": "order-1 sm:order-3",
                "3_months":  "order-2 sm:order-1",
                "6_months":  "order-3 sm:order-2",
              };
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl border p-6 ${mobileOrder[plan.id] ?? ""} ${
                    isBest
                      ? "bg-red-950/40 border-red-600 shadow-xl shadow-red-950/30"
                      : "bg-zinc-900 border-zinc-800"
                  }`}
                >
                  {plan.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap ${
                      isBest ? "bg-red-600 text-white" : "bg-zinc-700 text-zinc-200"
                    }`}>
                      {plan.badge}
                    </span>
                  )}

                  <h2 className="text-base font-extrabold text-white mb-4">{plan.label}</h2>

                  <div className="mb-5">
                    <span className="text-4xl font-black text-white">€{plan.price}</span>
                    <span className="text-zinc-400 text-sm ml-1">/maand</span>
                    {plan.id !== "1_month" && (
                      <p className="text-zinc-500 text-xs mt-1">Totaal €{plan.total}</p>
                    )}
                  </div>

                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/447449708976?text=${plan.waText}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={fireWhatsAppConversion}
                    className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ${
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
        <p className="text-zinc-400 text-sm mb-4">Nog vragen? Ons team staat klaar via WhatsApp.</p>
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
