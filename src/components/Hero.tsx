/** @format */

import { SVGProps } from "react";

const Hero = () => {
  return (
    <div className="pt-40 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
      {/* <div className="border border-black/[0.2] group/canvas-card items-center justify-center dark:border-white/[0.2]  max-w-6xl w-full mx-auto p-4 relative h-[40rem]">
        <Icon className="absolute h-10 w-10 -top-5 -left-5 text-white/40" />
        <Icon className="absolute h-10 w-10 -bottom-5 -left-5 text-white/40" />
        <Icon className="absolute h-10 w-10 -top-5 -right-5 text-white/40" />
        <Icon className="absolute h-10 w-10 -bottom-5 -right-5 text-white/40" />
      </div> */}
    </div>
  );
};

export default Hero;

export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
