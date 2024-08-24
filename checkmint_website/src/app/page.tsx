import Image from "next/image";
import { MacbookScroll } from "../components/macbook";
import { Compare } from "../components/compare";
export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center w-3/4">
          <p className="text-6xl black">A Chrome Extension for finding</p>
          <p className="text-7xl black">AI/Plagerism </p>
          <p className="w-3/5 text-lg text-center black text-wrap">
            See status like the number of edits made or the time spent on the
            google doc. Also be able to replay the students wiritng process
            while also seeing ANY text copied from an external source
          </p>
        </div>
      </div>
      <Compare />
    </main>
  );
}
