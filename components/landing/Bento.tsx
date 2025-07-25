import { Bot } from "lucide-react";

import BarChart from "../ui/BarChart";
import AvatarList from "../ui/AvatarList";
import Report from "../ui/Report";
import WideCard from "../ui/SkeletonReview";
import Counter from "../ui/Counter";
import Ticker from "../ui/Ticker";
import TypingText from "../ui/TypingText";
import { cn } from "@/lib/utils";

// #region placeholder
function BoldCopy({
  text = "animata",
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4",
        className
      )}
    >
      <div
        className={cn(
          "text-4xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl",
          backgroundTextClassName
        )}
      >
        {text}
      </div>
      <div
        className={cn(
          "text-md absolute font-black uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl",
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
}

function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function FeatureOne() {
  return (
    <BentoCard className="flex flex-col bg-yellow-300">
      <div className="font-bold text-yellow-700">Highly rated</div>
      <div className="mt-auto flex justify-end">
        <div className="text-4xl font-black text-black/60 md:text-7xl">
          <Ticker value="4.8" />
        </div>{" "}
        <sup className="text-xl text-yellow-700">★</sup>
      </div>
    </BentoCard>
  );
}

export function FeatureTwo() {
  return (
    <BentoCard className="relative flex flex-col overflow-visible bg-violet-500 sm:col-span-2">
      <strong className="text-2xl font-semibold text-white">
        <Counter
          targetValue={179}
          format={(v) => +Math.ceil(v) + "k+ students"}
        />
      </strong>
      <div className="ml-4 mt-auto">
        <AvatarList size="sm" className="py-0" />
      </div>
    </BentoCard>
  );
}

export function FeatureThree() {
  return (
    <BentoCard className="flex flex-col bg-orange-300">
      <Bot className="size-8 md:size-12" />
      <strong className="mt-1 inline-block text-sm">Integrated AI</strong>

      <div className="mt-auto">
        <div className="text-sm font-medium">What is 4 times 4?</div>
        <div className="font-semibold">
          <TypingText
            text="4 times 4 is 16"
            waitTime={2000}
            alwaysVisibleCount={0}
          />
        </div>
      </div>
    </BentoCard>
  );
}

export function FeatureFour() {
  return (
    <BentoCard className="flex items-center gap-4 bg-lime-300 sm:col-span-2 md:flex-row-reverse">
      <div className="text-2xl font-black text-lime-800">
        Generate progress report
      </div>
      <div className="relative max-h-32 flex-shrink-0 overflow-hidden">
        <Report className="w-40 overflow-hidden border-none shadow-none hover:shadow-none" />
      </div>
    </BentoCard>
  );
}

export function FeatureFive() {
  return (
    <BentoCard className="flex flex-col items-center justify-center bg-zinc-300 sm:col-span-2">
      <BoldCopy
        text="EDU"
        className="bg-transparent"
        textClassName="text-zinc-800"
      />
    </BentoCard>
  );
}

export function FeatureSix() {
  return (
    <BentoCard className="flex justify-end">
      <BarChart
        items={[
          
          { progress: 70, label: "S", className: "rounded-xl bg-[#6b64e9]" },
          { progress: 60, label: "M", className: "rounded-xl bg-[#6b64e9]" },
          { progress: 90, label: "T", className: "rounded-xl bg-[#6b64e9]" },
          { progress: 40, label: "W", className: "rounded-xl bg-[#6b64e9]" },
          { progress: 20, label: "Th", className: "rounded-xl bg-[#6b64e9]" },
          { progress: 30, label: "F", className: "rounded-xl bg-[#6b64e9]" },
          { progress: 90, label: "Sa", className: "rounded-xl bg-[#6b64e9]" },
        ]}
        height={400}
      />
      {/* <div className="mt-2 text-center font-bold">Weekly review</div> */}
    </BentoCard>
  );
}

export function FeatureSeven() {
  return (
    <BentoCard className="flex flex-col gap-2 ">
      <div className="w-full -rotate-1 rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white md:-rotate-3">
        Javascript
      </div>
      <div className="w-full rotate-1 rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white md:rotate-3">
        ReactJS
      </div>
      <div className="w-full rounded-full border-rose-400 bg-rose-400 py-2 text-center font-semibold text-white">
        NextJS
      </div>
      
    </BentoCard>
  );
}

export function FeatureEight() {
  return (
    <BentoCard className="relative flex flex-col bg-blue-200 sm:col-span-2">
      <WideCard />
      <div className="mt-4">
        <div className="text-lg font-black text-blue-800">Daily reminders</div>
        <p className="text-sm">
          Our daily reminder helps you keep focused on your goals.
        </p>
      </div>
    </BentoCard>
  );
}

// #endregion

export default function Bento() {
  return (
    <div className="storybook-fix w-full py-[100px] px-[60px] max-w-[1366px] mx-auto">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-3">
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
        <FeatureFive />
        <FeatureSix />
        <FeatureSeven />
        <FeatureEight />
      </div>
    </div>
  );
}
