"use client";

import HeroButton from "../ui/HeroButton";
import PrimaryButton from "../ui/PrimaryButton";
import { NavbarDemo } from "./NavbarDemo";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUpVariants,
  gridVariants,
} from "../ui/MotionVariants";

export default function Hero() {
  return (
    <div className=" w-full relative bg-white overflow-hidden">
      {/* Animated Subtle Diagonal Fade Grid Background */}
      <motion.div
        className="absolute inset-0 "
        variants={gridVariants}
        initial="hidden"
        animate="visible"
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

      {/* Main Content Container */}
      <motion.div
        className="relative  items-center justify-center text-center pt-[150px] pb-[60px] flex flex-col w-full max-w-[1366px] mx-auto px-[60px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Navbar - Slides in from top */}
        <motion.div className="absolute pt-6 left-0  w-full h-full">
          <div>
            <NavbarDemo />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="max-w-[900px]">
          {/* Hero Button - Animated entry */}
          <motion.div variants={fadeInUpVariants}>
            <HeroButton name="Get started with your SaaS in minutes" />
          </motion.div>

          {/* Main Heading - Staggered word animation */}
          <motion.div variants={fadeInUpVariants}>
            <motion.p
              className="text-6xl font-extrabold pt-7 text-neutral-900"
              initial="hidden"
              animate="visible"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Grow Faster With a Landing
              </motion.span>
              <br />
              <motion.span
                className="opacity-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Page That Converts 
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Description - Fade in with slight delay */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 py-7 "
            variants={fadeInUpVariants}
          >
           
            Engage your audience, tell your story, and get early traction
            effortlessly, all with a stunning, responsive design that builds
            trust, captures leads, and helps your startup stand out in a crowded
            market.
          </motion.p>
        </div>

        {/* Action Buttons - Animated with hover effects */}
        <motion.div className="flex flex-row gap-6" variants={fadeInUpVariants}>
          <motion.div>
            <PrimaryButton
              name="Try for free"
              onClick={() => console.log("clicked")}
            />
          </motion.div>

          <motion.div>
            <PrimaryButton
              variant="secondary"
              name="Login"
              onClick={() => console.log("clicked")}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
