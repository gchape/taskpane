"use client";
import Hero from "../hero/Hero";
import { HowItWorks } from "./HowItWorks";
import { Pricing } from "./Pricing";
import { ScrollRings } from "./ScrollRings";
import { Services } from "./Services";

const Home = () => (
  <>
    <Hero />
    <ScrollRings />
    <Services />
    <HowItWorks />
    <Pricing />
  </>
);

export default Home;
