"use client";

import PrimaryButton from "../ui/PrimaryButton";
import { NavbarDemo } from "./NavbarDemo";

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Subtle Diagonal Fade Grid Background - Top Left */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(209, 213, 219, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 0% 0%, #000 40%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 0% 0%, #000 40%, transparent 80%)",
        }}
      />

      <div className="relative z-10 items-center justify-center text-center h-screen max-w-[900px] mx-auto flex flex-col pt-12">
        <div className="absolute top-6 left-0 z-10 w-full h-full">
          <NavbarDemo />
        </div>
        <p className="text-6xl font-extrabold text-neutral-900">
          Grow Faster With a <br />
          <span className="opacity-50 ">Landing Page That Converts</span>
        </p>
        <p className=" text-lg pt-6  text-neutral-900 pb-[50px]">
          Engage your audience, tell your story, and get early traction
          effortlessly, all with a stunning, responsive design that builds
          trust, captures leads, and helps your startup stand out in a crowded
          market.
        </p>
        <div className="flex flex-row gap-4">
          <PrimaryButton
            name="Try for free"
            onClick={() => console.log("clicked")}
          />

          <PrimaryButton
            variant="secondary"
            name="Login"
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
}
