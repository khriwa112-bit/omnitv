declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function fireWhatsAppConversion() {
  window.gtag?.("event", "conversion", {
    send_to: "AW-18216148215/nUaxCKvu48IcEPe5ke5D",
  });
}
