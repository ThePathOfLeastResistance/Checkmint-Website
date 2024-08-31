"use client";

import Image from "next/image";
import { MacbookScroll } from "../components/macbook";
import { Compare } from "../components/compare";
import { StickyScroll } from "../components/scroll-reveal";
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

const statsContent = [
  {
    title: "Download the extension from the chrome store",
    description:
      "The google chrome extension works with google Docs to allow you to see the number of edits the student made to see if it matchs with the diffculty of the assigment. Futher more, you can also see the time spent, the number of words copied from a exteral source and so much more.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(#F1F6F9),var(#394867))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "When you Click on the extension button, it will redirect you to a new page to get a more detailed look into the students writing process. You can see what the student copied and pasted, and determine if the student used Ai or not.",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="object-cover w-full h-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Customizable",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Secure and Safe",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Intergrated with cutting Edge Ai detection model",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
const content = [
  {
    title: "Download the extension from the chrome store",
    contentClassName: "py-[30vh]",
    description:
      "Head over to the google chrome store or click here to install the chrome extension",
    content: (
      <Image
        src="/linear.webp"
        width={300}
        height={300}
        className="object-cover w-full h-full"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Open Google Docs",
    contentClassName: "py-[30vh]",
    description:
      "Open the google docs that you want to check making sure you have edit access, there should be a insertion on the top right of the google docs that shows you the stats",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="object-cover w-full h-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Detailed Insepection",
    description: "To get a real time replay of all ",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="object-cover w-full h-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Customizable",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="object-cover w-full h-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function Home() {
  return (
    <main className="bg-[#F1F6F9]">
      <div className="flex items-center justify-center h-[80vh]">
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
                      <PlaneIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        500+ downloads
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ElevatorIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
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
                      <FoodIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        24 hours support
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MicIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Accurate
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ParachuteIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
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
        <div className="p-10">
          <StickyScroll content={content} />
        </div>
        <div className="max-w-5xl px-8 mx-auto">
          <HoverEffect items={projects} />
        </div>
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

const ElevatorIcon = ({ className }: { className?: string }) => {
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
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
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
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
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
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
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
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};

const PlaneIcon = ({ className }: { className?: string }) => {
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
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
