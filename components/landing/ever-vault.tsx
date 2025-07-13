"use client";
import { useMotionValue } from "motion/react";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({ text, className } : any) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");
  
  function onMouseMove({ currentTarget, clientX, clientY } : any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  return (
    <div
      className={cn(
        "bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}>
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-md w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex items-center justify-center">
          <div
            className="relative h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full flex items-center justify-center text-white">
            <div
              className="absolute w-full h-full bg-white/80 dark:bg-black/80 blur-sm rounded-full" />
            <span className="dark:text-white text-[100px] text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString } : any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };
  
  return (
    <div className="pointer-events-none">
      <div
        className="absolute inset-0 rounded-md bg-[#F0F7FF] [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-md bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style} />
      <motion.div
        className="absolute inset-0 rounded-md opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}>
        <p
          className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}


export const Icon = ({
  className,
  ...rest
} : any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

