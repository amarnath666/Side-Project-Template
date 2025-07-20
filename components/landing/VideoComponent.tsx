"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUpVariants } from "../ui/MotionVariants";

const VideoComponent = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="w-full h-full rounded-lg mx-auto max-w-[1366px] px-4 sm:px-8 md:px-[60px] relative"
    >
      <div className="relative">
        <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
          {/* Multiple shadow layers for depth */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform translate-y-4 opacity-20"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform translate-y-2 opacity-40"></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
            <div className="p-4 sm:p-8">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                {/* Skeleton Loader */}
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                    <div className="w-full h-full bg-gray-300 rounded-xl relative overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                      
                      {/* Play button placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-400 rounded-full flex items-center justify-center animate-pulse">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-500 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Loading text */}
                      {/* <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-3 bg-gray-400 rounded animate-pulse mb-2"></div>
                        <div className="h-3 bg-gray-400 rounded animate-pulse w-3/4"></div>
                      </div> */}
                    </div>
                  </div>
                )}
                
                {/* Video Element */}
                <video
                  src="/videos/hero.mp4"
                  autoPlay
                  muted
                  loop
                  onLoadedData={handleVideoLoad}
                  onCanPlay={handleVideoLoad}
                  className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoComponent;