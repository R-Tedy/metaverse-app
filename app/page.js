import Image from "next/image";
import { Hero, About, Explore, GetStarted, WhatsNew, World, Insights, Feedback } from "@/sections";
import { Footer } from "@/components";

export default function Home() {
  return (
    <div >
      <Hero/>
      <About/>
      <Explore/>
      <GetStarted/>
      <WhatsNew/>
      <World/>
      <Insights/>
      <Feedback/>
    </div>
  );
}
