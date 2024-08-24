import Image from "next/image";
import { MacbookScroll } from "../components/macbook";
import { Compare } from "../components/compare";
import { Button } from "../components/animatedButton";
export default function Home() {
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
