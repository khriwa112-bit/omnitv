import { Check, Phone, Gift, Star, Zap, Shield } from "lucide-react";
import SiteShell from "../components/SiteShell";
import { fireWhatsAppConversion } from "../utils/gtag";

const INCLUDED = [
  "15 maanden totaal (12 kopen, 3 gratis)",
  "80.000+ Live Kanalen (NL, BE, Sport, Internationaal)",
  "200.000+ Films & Series (VOD) in 4K/8K",
  "Stabiele servers — 99,9% uptime gegarandeerd",
  "Gratis EPG (TV-Gids) inbegrepen",
  "Full Catch-up & Live Pause",
  "M3U playlist & Xtream Codes ondersteund",
  "Werkt op Smart TV, Firestick, telefoon, tablet, PC",
  "24/7 WhatsApp Premium Support",
  "Geen contract — stopzetten wanneer je wilt",
];

const STEPS = [
  { n: "1", title: "Kies je pakket", text: "Stuur ons een WhatsApp-bericht. Wij helpen je direct het juiste pakket te kiezen." },
  { n: "2", title: "Betaal veilig", text: "Betaal via iDEAL, Bancontact, PayPal of creditcard. Altijd 100% veilig." },
  { n: "3", title: "Direct actief", text: "Binnen 5 minuten ontvang je je inloggegevens per e-mail. Direct kijken!" },
];

export default function Cadeau() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-black via-zinc-950 to-red-950 border-b-2 border-zinc-800 text-white pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 60% 40%, #ef0000 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Gift className="w-3.5 h-3.5" />
            Tijdelijke actie
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight mb-5 leading-tight">
            3 Maanden <span className="text-red-500">Cadeau</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            Bestel vandaag en ontvang <strong className="text-white">3 maanden gratis</strong> bij aanmelding.
            Direct actief na bestelling — geen wachttijd.
          </p>

          <div className="inline-flex items-center gap-3 bg-red-600/20 border border-red-500/30 rounded-2xl px-6 py-4 mb-8">
            <Gift className="w-7 h-7 text-red-400 shrink-0" />
            <div className="text-left">
              <p className="text-white font-extrabold text-lg leading-tight">12 betalen → 15 maanden kijken</p>
              <p className="text-red-300 text-xs font-semibold mt-0.5">3 maanden gratis bij aanmelding</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/447449708976?text=Hoi%2C%20ik%20wil%20de%203%20maanden%20cadeau%20actie%20van%20omnitv%20gebruiken%21"
              target="_blank"
              rel="noreferrer"
              onClick={fireWhatsAppConversion}
              className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="w-5 h-5" /> Claim cadeau via WhatsApp
            </a>
            <span className="text-zinc-500 text-xs">Direct actief · Geen verplichtingen</span>
          </div>
        </div>
      </section>

      {/* Price highlight */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-zinc-400 text-sm uppercase tracking-widest font-bold mb-6">Slechts</p>
          <div className="flex items-end justify-center gap-3 mb-3">
            <span className="text-7xl font-black text-white leading-none">€5,20</span>
            <span className="text-zinc-400 text-lg mb-2">/maand</span>
          </div>
          <p className="text-zinc-500 text-sm mb-2">Eenmalig €78,— voor 12 maanden — <strong className="text-red-400">3 maanden gratis erbij</strong></p>
          <p className="text-zinc-600 text-xs">Normaal €14,99/maand — jij bespaart meer dan €100</p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-zinc-950 py-16 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white text-center mb-10">
            Alles inbegrepen in jouw cadeau pakket
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5">
                <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/447449708976?text=Hoi%2C%20ik%20wil%20de%203%20maanden%20cadeau%20actie%20van%20omnitv%20gebruiken%21"
              target="_blank"
              rel="noreferrer"
              onClick={fireWhatsAppConversion}
              className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-sm shadow-xl hover:scale-[1.02] transition-all"
            >
              <Phone className="w-4 h-4" /> Bestel nu en ontvang 3 maanden gratis
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-black py-16 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold font-display text-white text-center mb-10">Hoe werkt het?</h2>
          <div className="flex flex-col gap-4">
            {STEPS.map((s) => (
              <div key={s.n} className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-red-950 border border-red-900 text-red-300 flex items-center justify-center font-black text-sm shrink-0">{s.n}</div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{s.title}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-zinc-950 border-b border-zinc-800 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-xs text-zinc-400 font-semibold">
          {[
            { icon: Zap, text: "Direct actief na betaling" },
            { icon: Shield, text: "Geen contract of automatische verlenging" },
            { icon: Star, text: "23.000+ tevreden klanten" },
            { icon: Phone, text: "24/7 WhatsApp Support" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5 text-red-500" /> {text}
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
