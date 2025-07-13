import Hero from "@/components/landing/Hero";
import HowitWork from "@/components/landing/HowitWork";
import PricingComponent from "@/components/landing/Pricing";
import VideoComponent from "@/components/landing/VideoComponent";
import { MarqueeDemoVertical } from "@/components/ui/Reviews";
import { ShineBorderDemo } from "@/components/ui/ShineBorderDemo";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoComponent />
      <PricingComponent />

      <MarqueeDemoVertical />
    </div>
  );
}
