"use client";

import Image from "next/image";
import { MacbookScroll } from "../components/macbook";
import { Compare } from "../components/compare";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/animatedButton";
import { motion } from "framer-motion";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <main>
      <div className="flex items-center justify-center h-[80vh]">
        <div className="flex flex-col items-center w-3/4 pb-2">
          <p className="pb-2 text-6xl black">A Chrome Extension for finding</p>
          <p className="pb-3 text-7xl black">AI/Plagerism </p>
          <p className="w-3/5 pb-2 text-lg text-center black text-wrap">
            See status like the number of edits made or the time spent on the
            google doc. Also be able to replay the students wiritng process
            while also seeing ANY text copied from an external source
          </p>
          <div className="flex items-center justify-center py-40">
            <Modal>
              <ModalTrigger className="flex justify-center text-white bg-black dark:bg-white dark:text-black group/modal-btn">
                <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
                  Book your flight
                </span>
                <div className="absolute inset-0 z-20 flex items-center justify-center text-white transition duration-500 -translate-x-40 group-hover/modal-btn:translate-x-0">
                  ✈️
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="mb-8 text-lg font-bold text-center md:text-2xl text-neutral-600 dark:text-neutral-100">
                    Book your trip to{" "}
                    <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                      Bali
                    </span>{" "}
                    now! ✈️
                  </h4>
                  <div className="flex items-center justify-center">
                    {images.map((image, idx) => (
                      <motion.div
                        key={"images" + idx}
                        style={{
                          rotate: Math.random() * 20 - 10,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        whileTap={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        className="flex-shrink-0 p-1 mt-4 -mr-4 overflow-hidden bg-white border rounded-xl dark:bg-neutral-800 dark:border-neutral-700 border-neutral-100"
                      >
                        <Image
                          src={image}
                          alt="bali images"
                          width="500"
                          height="500"
                          className="flex-shrink-0 object-cover w-20 h-20 rounded-lg md:h-40 md:w-40"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-start justify-start max-w-sm py-10 mx-auto gap-x-4 gap-y-6">
                    <div className="flex items-center justify-center">
                      <PlaneIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        5 connecting flights
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ElevatorIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        12 hotels
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <VacationIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        69 visiting spots
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <FoodIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Good food everyday
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MicIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Open Mic
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ParachuteIcon className="w-4 h-4 mr-1 text-neutral-700 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Paragliding
                      </span>
                    </div>
                  </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                  <button className="px-2 py-1 text-sm text-black bg-gray-200 border border-gray-300 rounded-md dark:bg-black dark:border-black dark:text-white w-28">
                    Cancel
                  </button>
                  <button className="px-2 py-1 text-sm text-white bg-black border border-black rounded-md dark:bg-white dark:text-black w-28">
                    Book Now
                  </button>
                </ModalFooter>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 px-4">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[40vw] w-[60vw] md:h-[45vw] md:w-[80vw]"
          slideMode="hover"
          initialSliderPercentage={25}
        />
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
