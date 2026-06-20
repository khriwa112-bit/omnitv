import { useState } from "react";
import { FAQ_DATA } from "../data";
import { HelpCircle, ChevronRight, MessageCircle } from "lucide-react";
import { fireWhatsAppConversion } from "../utils/gtag";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="bg-zinc-950 text-white py-16 border-b-2 border-zinc-800" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-sans text-red-400 font-bold tracking-widest bg-red-950 border border-red-900 px-3 py-1 rounded-full mb-3 inline-block">VEELGESTELDE VRAGEN</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">Veelgestelde vragen & antwoorden</h2>
          <p className="text-zinc-400 text-sm sm:text-base">Staat je vraag er niet tussen? Stel hem via WhatsApp!</p>
        </div>
        <div className="flex flex-col gap-3 text-left">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.id} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "bg-zinc-900 border-red-800 shadow-sm" : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"}`}>
                <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer text-left">
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? "text-red-500" : "text-zinc-500"}`} />
                    <span className={isOpen ? "text-white" : "text-zinc-300"}>{faq.question}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90 text-red-500" : "text-zinc-500"}`} />
                </button>
                {isOpen && <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800"><p>{faq.answer}</p></div>}
              </div>
            );
          })}
        </div>
        <div className="mt-10 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 inline-flex items-center gap-4 flex-col sm:flex-row justify-between w-full">
          <div className="flex items-center gap-3 text-left">
            <MessageCircle className="w-5 h-5 text-red-400 shrink-0" />
            <p className="text-xs text-zinc-400">Heb je een specifieke vraag? Stuur ons direct een WhatsApp-bericht.</p>
          </div>
          <a href="https://wa.me/447449708976" target="_blank" rel="noreferrer" onClick={fireWhatsAppConversion}
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide whitespace-nowrap text-center transition-colors">
            Stel via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
