import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import { PiArrowsOutDuotone, PiStarFourDuotone } from "react-icons/pi";
import DemocracySection from "./_components/DemocracySection";
import AimdaoMarquee from "./_components/AimdaoMarquee";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <FeaturesSection />
        <DemocracySection />
        <div className="m-auto grid max-w-6xl gap-8 px-4 py-20 lg:grid-cols-2">
          <div className="rounded border border-neutral-200 p-4">
            <PiArrowsOutDuotone className="m-auto my-4 text-4xl" />
            <p className="indent-8 leading-8">
              AIMDAO represents a significant evolution in decentralized governance, addressing the critical limitations of traditional DAO structures while preserving the core values of decentralization, transparency, and community sovereignty. By enabling AI-managed constitutional governance, the platform offers a path toward more consistent, principled, and scalable decentralized organizations.
            </p>
          </div>
          <div className="rounded border border-neutral-200 p-4">
            <PiStarFourDuotone className="m-auto my-4 text-4xl" />
            <p className="indent-8 leading-8">
            The marriage of artificial intelligence and blockchain technology in service of community-defined values opens new possibilities not just for organizational governance but potentially for rethinking fundamental aspects of social coordination. AIMDAO provides a framework that aligns technological capabilities with human values and aspirations.
            </p>
          </div>
        </div>
        <AimdaoMarquee />
      </main>
    </div>
  );
}
