"use client";

import Image from "next/image";
import { MacbookScroll } from "../components/macbook";
import { Compare } from "../components/compare";
import React from "react";
import { HoverEffect } from "../components/card-hover";
import Link from "next/link";
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

      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <MacbookScroll
          title={
            <span>
              This Macbook is built with Tailwindcss. <br /> No kidding.
            </span>
          }
          badge={
            <Link href="https://peerlist.io/manuarora">
              <Badge className="w-10 h-10 transform -rotate-12" />
            </Link>
          }
          src={`/linear.webp`}
          showGradient={false}
        />
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

const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};
