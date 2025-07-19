/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.I've never seen anything like this before. It's amazing. I love it",
    img: "/images/1.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I've never seen anything like this before. It's amazing. I love it.I've never seen anything like this before. It's amazing. I love it",
    img: "/images/2.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I've never seen anything like this before. It's amazing. I love it.I've never seen anything like this before. It's amazing. I love it",
    img: "/images/3.svg",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/4.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I've never seen anything like this before. It's amazing. I love it.I've never seen anything like this before. It's amazing. I love it",
    img: "/images/5.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I've never seen anything like this before. It's amazing. I love it.I've never seen anything like this before. It's amazing. I love it",
    img: "/images/6.svg",
  },
];

const third = Math.ceil(reviews.length / 3);
const firstRow = reviews.slice(0, third);
const secondRow = reviews.slice(third, third * 2);
const thirdRow = reviews.slice(third * 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full md:max-w-[480px]  cursor-pointer overflow-hidden rounded-4xl  shadow-sm outline outline-black/5 p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col ">
          <figcaption className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-base">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="max-w-[1366px] px-4 md:px-6 lg:px-15 mx-auto w-full py-12 md:py-24 ">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4 text-center">
          What People Are Saying
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center">
          Hear from makers, founders, and creatives who’ve tried it unfiltered
          and honest.
        </p>
      </div>

      {/* Responsive layout */}
      <div className="relative grid h-[500px] w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
        {/* Column 1 - Always visible */}
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Column 2 - Hidden below sm */}
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="hidden sm:flex [--duration:20s]"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Column 3 - Hidden below md */}
        <Marquee
          pauseOnHover
          vertical
          className="hidden md:flex [--duration:20s]"
        >
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
}
