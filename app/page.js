import Image from "next/image";
import { Hero, About, Explore, GetStarted, WhatsNew, World, Insights, Feedback } from "@/sections";
import { Footer } from "@/components";

export default function Home() {
  return (
    <div >
      <Hero/>
      <div className="relative">
        <About/>
        <div className="gradient-03 z-0"></div>
        <Explore/>
      </div>
      <div className="relative">
        <GetStarted/>
        <div className="gradient-04 z-0"></div>
        <WhatsNew/>
      </div>
      <World/>
      <div className="relative">
        <Insights/>
        <div className="gradient-04 z-0"></div>
        <Feedback/>
      </div>
    </div>
  );
}
