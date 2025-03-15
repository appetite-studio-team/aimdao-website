import FeatureCard from "./FeatureCard";
import {
  PiFileLock,
  PiStamp,
  PiStrategy,
} from "react-icons/pi";

export default function FeaturesSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={
              <PiFileLock className="p-3 text-5xl" />
            }
            title="Experience Unmatched Efficiency and Transparency in DAO Operations"
            description="Enhance decision-making processes by leveraging AI for swift, accurate outcomes."
          />
          <FeatureCard
            icon={
              <PiStamp className="p-3 text-5xl" />
            }
            title="Build Trust with Transparent Processes and Clear Governance Structures"
            description="Ensure that every decision is traceable and aligned with your values."
          />
          <FeatureCard
            icon={
              <PiStrategy className="p-3 text-5xl" />
            }
            title="Empower Your Community with AI-Driven Decision-Making and Robust Governance"
            description="Foster a collaborative environment where every voice matters."
          />
        </div>
      </div>
    </section>
  );
}
