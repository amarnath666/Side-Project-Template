"use client";

import Hero from "@/components/landing/Hero";
import PricingComponent from "@/components/landing/Pricing";
import VideoComponent from "@/components/landing/VideoComponent";
import { MarqueeDemoVertical } from "@/components/ui/Reviews";
import Features from "../components/ui/BentoGrid";
import GetStarted from "@/components/ui/GetStarted";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoComponent />
      <div id="features">
      <Features />
      </div>
      <div id="pricing">
      <PricingComponent />
      </div>
      <div id="reviews">
      <MarqueeDemoVertical />
      </div>
      <GetStarted />
      <Footer />
    </div>
  );
}
