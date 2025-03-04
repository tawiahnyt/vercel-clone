/** @format */

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { navItems } from "../constant/NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-32 border border-b-[#CCCCCC]/20 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 max-w-[90rem] px-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white flex items-center">
              <img src="/vercel-dark.png" alt="vercel logo" className="h-5 w-24 cursor-pointer" />
              {/* <svg
                width="60"
                height="50"
                viewBox="0 0 76 65"
                className="h-5 w-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#FFFFFF" />
              </svg> */}
            </div>
            <div className="hidden lg:flex">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="relative group flex">
                  {navItems.map((item, index) => (
                    <div
                      key={typeof item === "string" ? item : item.navTitle}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdownIndex(index)}
                      onMouseLeave={() => setOpenDropdownIndex(null)}
                    >
                      <a
                        href="#_"
                        className="gap-1 mx-1 px-4 py-1 rounded-md text-sm flex items-center justify-center leading-6 text-neutral-500 whitespace-no-wrap hover:rounded-full hover:bg-neutral-500/40 hover:text-white/80 focus:outline-none focus:shadow-none"
                      >
                        {typeof item === "string" ? item : item.navTitle}
                        <div className="flex items-center">
                          {typeof item === "object" && item.navTitle ? (
                            <div className="relative group flex flex-col items-center justify-center px-2">
                              <ChevronDown
                                className={`h-3 w-4 absolute transition-opacity duration-200 ${
                                  openDropdownIndex === index
                                    ? "opacity-0"
                                    : "opacity-100"
                                }`}
                              />
                              <ChevronUp
                                className={`h-3 w-4 absolute transition-opacity duration-200 ${
                                  openDropdownIndex === index
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </a>
                      {typeof item === "object" &&
                        item.navTitle &&
                        openDropdownIndex === index && (
                          <div className="absolute left-0 mt-2">
                            <Dropdown content={item.navContents} />
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              <Button className="px-3 py-2 rounded-md" text="Log In" />
              <Button className="px-3 py-2 rounded-md" text="Contact" />
              <Button white className="px-3 py-2 rounded-md" text="Sign Up" />
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-vercel-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="w-full flex flex-col space-y-3">
              <Button className="px-3 py-2 rounded-md text-center flex" text="Log In" />
              <Button
                white
                className="px-3 py-2 rounded-md flex text-center"
                text="Sign Up"
              />
            </div>
            <a
              href="#_"
              className="text-white block px-3 py-2 rounded-md hover:bg-[#1F1F1F]"
            >
              Features
            </a>
            <a
              href="#_"
              className="text-white block px-3 py-2 rounded-md hover:bg-[#1F1F1F]"
            >
              Templates
            </a>
            <a
              href="#_"
              className="text-white block px-3 py-2 rounded-md hover:bg-[#1F1F1F]"
            >
              Enterprise
            </a>
            <a
              href="#_"
              className="text-white block px-3 py-2 rounded-md hover:bg-[#1F1F1F]"
            >
              Pricing
            </a>
            <a
              href="#_"
              className="text-white block px-3 py-2 rounded-md hover:bg-[#1F1F1F]"
            >
              Resources
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
