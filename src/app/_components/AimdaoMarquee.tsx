import Marquee from "@/components/Marquee";
import { PiOctagonThin } from "react-icons/pi";

export default function AimdaoMarquee() {
  return (
    <div>
      <Marquee className="bg-neutral-950 text-white uppercase">
        <span className="px-8 text-2xl lg:text-3xl">AIMDAO</span>
        <PiOctagonThin />
        <span className="px-8 text-2xl lg:text-3xl">AIMDAO</span>
        <PiOctagonThin />
        <span className="px-8 text-2xl lg:text-3xl">AIMDAO</span>
        <PiOctagonThin />
        <span className="px-8 text-2xl lg:text-3xl">AIMDAO</span>
        <PiOctagonThin />
        <span className="px-8 text-2xl lg:text-3xl">AIMDAO</span>
        <PiOctagonThin />
      </Marquee>
    </div>
  );
}
