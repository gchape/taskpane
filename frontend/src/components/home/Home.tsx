"use client";
import Hero from "../hero/Hero";
import { HowItWorks } from "./HowItWorks";
import { Pricing } from "./Pricing";
import { ScrollRings } from "./ScrollRings";
import { Services } from "./Services";

const Home = () => (
  <div className="flex flex-col mx-4 border-l-2 border-l-white/8 border-r-2 border-r-white/6 border-dashed">
    <div className="flex flex-col py-24 px-4 lg:px-12 gap-6 justify-center items-start">
      <Hero />
      <ScrollRings />
    </div>
    <div className="flex flex-col justify-around gap-24 lg:gap-24 pb-24 px-5 lg:px-12">
      <Services />
      <HowItWorks />
      <Pricing />
    </div>
  </div>
);

export default Home;
