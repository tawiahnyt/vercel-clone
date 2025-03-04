/** @format */

import { GitMerge, Globe, MessageCircle, Terminal } from "lucide-react";
import Button from "./Button";

const Layout = () => {
  return (
    <>
      <div className="pt-40 flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4">
        <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 w-full mx-auto relative h-[45rem]">
          <Icon className="absolute h-10 w-10 -top-5 -left-5 text-white/40" />
          <Icon className="absolute h-10 w-10 -bottom-5 -right-5 text-white/40" />

          <div className=" text-center">
            <h1 className="text-4xl font-bold text-white/90">
              Your complete platform for the web.
            </h1>
            <p className="pt-7 text-xl leading-10 text-[#CCCCCC]">
              Vercel provides the developer tools and cloud infrastructure{" "}
              <br /> to build, scale, and secure a faster, more personalized
              web.
            </p>
            <div className="mt-10 space-x-4">
              <Button
                white
                text="Start Deploying"
                className="rounded-full px-10 py-4"
              />
              <Button
                text="Get a Demo"
                className="rounded-full px-12 py-4 font-medium"
              />
            </div>

            <img
              src="/vercel-icon-light.png"
              alt=""
              className="mt-15 h-40 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4 bottom-10">
        <div className="border-l border-r border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 relative w-full mx-auto h-[20rem]">
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-3xl font-medium text-white/90">
                Develop with your favorite tools
              </h1>
              <Terminal size={40} className="text-white mt-2" />
            </div>
            <h1 className="text-3xl font-medium text-white/90 mt-2 flex items-center justify-center gap-2">
              Launch globally, <Globe size={30} className="text-white" />{" "}
              instantly Keep pushing{" "}
              <GitMerge size={30} className="text-white" />
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4 bottom-10">
        <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 relative w-full mx-auto h-[1rem]">
          {/* <h1 className="text-3xl font-medium text-white/90 text-center">
            Develop with your favorite tools
            <br /> Launch globally, instantly Keep pushing
          </h1> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4 bottom-10">
        <div className="border-l border-r border-b border-black/[0.2] group/canvas-card items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 relative w-full mx-auto h-[35rem] grid grid-cols-2">
          <div className="border-r border-black/[0.2] dark:border-white/[0.2] h-full">
            <div className="px-15 py-10">
              <h1 className="text-[#CCCCCC] text-lg flex gap-1">
                <Terminal className=" mb-2" />
                Git-connected Deploys
              </h1>
              <h1 className="text-white text-2xl font-bold">
                From localhost to https, in seconds.
              </h1>
              <h1 className="text-[#CCCCCC] text-2xl">
                Deploy from Git or your CLI.
              </h1>
            </div>
            <img src="/shipping.png" alt="" className="mx-auto select-none" />
          </div>
          <div className="border-black/[0.2] dark:border-white/[0.2] h-full">
            <div className="px-15 py-10">
              <h1 className="text-[#CCCCCC] text-lg flex gap-1">
                <MessageCircle className=" mb-2" />
                Collaborative pre-production
              </h1>
              <h1 className="text-white text-2xl font-bold">
                Every deploy is remarkable.{" "}
                <span className="text-[#CCCCCC] font-normal">
                  Chat with your team on real, production-grade UI, not just
                  designs.
                </span>
              </h1>
            </div>
            <img src="/message.png" alt="" className="mx-auto select-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4 bottom-10">
        <div className="border border-t-0 border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 w-full relative mx-auto h-[20rem]">
          <Icon className="absolute h-10 w-10 -bottom-5 -left-5 text-white/40" />
          <Icon className="absolute h-10 w-10 -top-5 -right-5 text-white/40" />
          {/* <h1 className="text-3xl font-medium text-white/90 text-center">
            Develop with your favorite tools
            <br /> Launch globally, instantly Keep pushing
          </h1> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4 bottom-10">
        <div className="border-l border-r border-b border-black/[0.2] group/canvas-card items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 relative w-full mx-auto h-[35rem] grid grid-cols-2">
          <h1 className="text-3xl font-medium text-white/90 text-center border-r border-white/[0.2]">
            Develop with your favorite tools
            <br /> Launch globally, instantly Keep pushing
          </h1>
          <h1 className="text-3xl font-medium text-white/90 text-center">
            Develop with your favorite tools
            <br /> Launch globally, instantly Keep pushing
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4 bottom-10">
        <div className="border-l border-r border-b border-black/[0.2] group/canvas-card items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 relative w-full mx-auto h-[10rem]"></div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4 bottom-10">
        <div className="border-l border-r border-b border-black/[0.2] group/canvas-card items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 relative w-full mx-auto h-[1rem]"></div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-4 bottom-10">
        <div className="border-l border-r border-b border-black/[0.2] group/canvas-card items-center justify-center dark:border-white/[0.2] xl:max-w-7/12 relative w-full mx-auto h-[15rem] grid grid-cols-3">
          <Icon className="absolute h-10 w-10 -top-5 -left-5 text-white/40" />
          <Icon className="absolute h-10 w-10 -bottom-5 -right-5 text-white/40" />
        </div>
      </div>
    </>
  );
}

export default Layout;

import { SVGProps } from "react";

export const Icon = ({ className, ...rest }: { className?: string } & SVGProps<SVGSVGElement>) => {
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
