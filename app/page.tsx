import { Hero } from "@/components/Hero";
import { FinancialSection } from "@/components/FinancialSection";
import { BureaucracySection } from "@/components/BureaucracySection";
import { StudiesSection } from "@/components/StudiesSection";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FinancialSection />
      <BureaucracySection />
      <StudiesSection />
      <Timeline />
      <Footer />
    </main>
  );
}
