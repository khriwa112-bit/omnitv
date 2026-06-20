import SiteShell from "../components/SiteShell";
import Hero from "../components/Hero";
import ChannelSearch from "../components/ChannelSearch";
import SportCategories from "../components/SportCategories";
import SportsAndEntertainment from "../components/SportsAndEntertainment";
import PricingCalculator from "../components/PricingCalculator";
import Advantages from "../components/Advantages";
import WhatsAppReviews from "../components/WhatsAppReviews";
import SetupWizard from "../components/SetupWizard";
import FAQ from "../components/FAQ";

const scrollTo = (selector: string) => {
  const element = document.getElementById(selector.substring(1));
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  return (
    <SiteShell>
      <Hero onScrollTo={scrollTo} />
      <ChannelSearch />
      <SportCategories />
      <SportsAndEntertainment />
      <PricingCalculator />
      <Advantages />
      <WhatsAppReviews />
      <SetupWizard />
      <FAQ />
    </SiteShell>
  );
}
