"use client";

import Hero from "@/components/landing/Hero";
import PricingComponent from "@/components/landing/Pricing";
import VideoComponent from "@/components/landing/VideoComponent";
import { MarqueeDemoVertical } from "@/components/ui/Reviews";
import Bento from "@/components/landing/Bento";
import Example from "../components/ui/BentoGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoComponent />
      <Example />
      <PricingComponent />
      <MarqueeDemoVertical />
    </div>
  );
}
