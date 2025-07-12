"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../ui/MotionVariants";

const VideoComponent = () => {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="w-full h-full  rounded-md pb-[130px] mx-auto max-w-[1366px] px-[60px] relative"
    >
      <div className=" relative">
        <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
          {/* Multiple shadow layers for depth */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform translate-y-4 opacity-20"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform translate-y-2 opacity-40"></div>

          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
            <div className="p-8">
              <video
                src="/videos/hero-video.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoComponent;
