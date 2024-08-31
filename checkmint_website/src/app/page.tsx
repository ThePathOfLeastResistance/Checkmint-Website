"use client";

import Image from "next/image";
import { MacbookScroll } from "../components/macbook";
import { Compare } from "../components/compare";
import React from "react";
import { HoverEffect } from "../components/card-hover";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/animatedButton";
import { motion } from "framer-motion";

// todo make a better hero than compare, too confusing

export default function Home() {
  return (
    <main className="bg-[#F1F6F9] ">
      <div className="flex items-center justify-center h-[80vh] w-screen overflow-x-hidden">
        <div className=" w-[10vw] h-[45vh] bg-black rounded-full absolute z-1 top-0 left-0 -rotate-[75deg] translate-y-[-40%] translate-x-[-40%] blur-[110px]"></div>
        <div className=" w-[10vw] h-[10vh] bg-black rounded-full absolute z-1 top-0 left-[40%] -rotate-[5deg] translate-x-[10%] blur-[100px]"></div>
        <div className=" w-[10vw] h-[15vh] bg-black rounded-full absolute z-1 top-0 left-[60%] rotate-45 translate-x-[80%] blur-[110px]"></div>
        <div className=" w-[15vw] h-[10vh] bg-black rounded-full absolute z-1 top-0 left-[90%] translate-x-[10%] blur-[110px]"></div>
        <div className=" w-[10vw] h-[10vh] bg-black rounded-full absolute z-1 top-[60%] left-[90%]  translate-y-[40%] -rotate-45 translate-x-[10%] blur-[110px]"></div>
        <div className=" w-[10vw] h-[30vh] bg-black rounded-full absolute z-1 top-[60%] left-0 translate-y-[-20%] -rotate-[75deg] blur-[120px]"></div>
        <div className=" w-[20vw] h-[20vh] bg-black rounded-full absolute z-1 top-[80%] left-[80%]  translate-y-[40%] -rotate-45 translate-x-[10%] blur-[110px]"></div>

        <div className="flex flex-col items-center w-3/4 pb-2 mt-20">
          <p className="pb-4 text-6xl black">A Chrome Extension for finding</p>
          <p className="pb-6 text-7xl black">AI/Plagerism </p>
          <p className="w-3/5 pb-4 text-base text-center black text-wrap">
            See status like the number of edits made or the time spent on the
            google doc. Also be able to replay the students wiritng process
            while also seeing ANY text copied from an external source
          </p>
          <div className="flex items-center justify-center">
            <Modal>
              <ModalTrigger className="flex justify-center text-white bg-black dark:bg-white dark:text-black group/modal-btn">
                <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
                  Download
                </span>
                <div className="absolute inset-0 z-20 flex items-center justify-center text-white transition duration-500 -translate-x-40 group-hover/modal-btn:translate-x-0">
                  ✈️
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="mb-8 text-lg font-bold text-center md:text-2xl text-neutral-600 dark:text-neutral-100">
                    Download Checkmint on the
                    <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                      Google Chrome Store
                    </span>{" "}
                  </h4>
                  <div className="flex items-center justify-center">
                    {/* todo add images here */}
                  </div>
                  <div className="flex flex-wrap items-start justify-start max-w-sm py-10 mx-auto gap-x-4 gap-y-6">
                    <div className="flex items-center justify-center">
                      {/* <PlaneIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" /> */}
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        500+ downloads
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      {/* <ElevatorIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" /> */}
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        4.5 stars
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <VacationIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Secure and Safe
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      {/* <FoodIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" /> */}
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        24 hours support
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      {/* <MicIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" /> */}
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Accurate
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      {/* <ParachuteIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" /> */}
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Customizable
                      </span>
                    </div>
                  </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                  <button className="px-2 py-1 text-sm text-black bg-gray-200 border border-gray-300 rounded-md dark:bg-black dark:border-black dark:text-white w-28">
                    Cancel
                  </button>
                  <button className="px-2 py-1 text-sm text-white bg-black border border-black rounded-md dark:bg-white dark:text-black w-28">
                    Download
                  </button>
                </ModalFooter>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 px-4">
        <Compare
          firstImage="/checkminthero.png"
          secondImage="/googledochero.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[40vw] w-[60vw] md:h-[45vw] md:w-[80vw]"
          slideMode="hover"
          initialSliderPercentage={25}
        />
      </div>
      <div className="overflow-y-scroll bg-[#F1F6F9] mt-11 no-scrollbar ">
        <h1 className="text-4xl">How to use it</h1>
      </div>
    </main>
  );
}

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};
