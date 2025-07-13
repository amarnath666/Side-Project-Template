import { EvervaultCard } from "./ever-vault";
import { MovingBorder } from "../ui/MovingBorder";

const HowitWork = () => {
  const steps = [
    { text: "1", title: " One:", subText: "Explore Courses" },
    { text: "2", title: " Two:", subText: "Compare Colleges" },
    { text: "3", title: " Three:", subText: "Talk to an Expert" },
    { text: "4", title: " Four:", subText: "Apply to Colleges" },
    { text: "5", title: " Five:", subText: "Start Learning" },
  ];

  return (
    <div className="pt-[50px] w-full max-w-[1440px] mx-auto px-[16px] sm:px-[30px] lg:px-[70px]">
      <p className="text-center text-[22px] font-medium  sm:text-[38px] md:text-[36px] leading-none text-black">
        How Does It Work?
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[25px] pt-[50px]">
        {steps.map((step, index) => (
          <div key={index} className="relative p-[1px] rounded-[5px] overflow-hidden">
            <div className="absolute inset-0" style={{ borderRadius: "calc(5px * 0.96)" }}>
              <MovingBorder duration={3000 + index * 500} rx="5px" ry="5px">
                <div className="h-20 w-20 bg-gradient-to-r from-custom-blue-1 to-custom-blue-2 opacity-[0.8]" />
              </MovingBorder>
            </div>
            <div className="relative flex flex-col items-center p-[15px] bg-white border border-gray-200" style={{ borderRadius: "calc(5px * 0.96)" }}>
              <div className="w-full aspect-square ">
                <EvervaultCard text={step.text} />
              </div>
              <p className="pt-[15px] text-[14px] text-black1 text-center"><span className="text-black">{step.title}</span>{step.subText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowitWork;