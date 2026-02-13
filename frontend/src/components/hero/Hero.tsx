"use client";
import { motion } from "motion/react";
import { shapes } from "../constants";
import Geometry from "./Geometry";

export default function Hero() {
  return (
    <section className="relative z-10 max-w-6xl overflow-visible">
      <div
        className="absolute lg:left-320 inset-0 overflow-visible pointer-events-none"
        aria-hidden
      >
        {shapes.map((shape) => (
          <Geometry key={shape.id} shape={shape} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-5xl font-bold tracking-wider lg:tracking-tighter text-white/85 leading-none">
          Build faster.
          <br />
          Ship smarter.
        </h1>
        <p className="mt-4 text-[15px] text-zinc-500 leading-relaxed max-w-md">
          A minimal dashboard for teams who move fast. Everything you need,
          nothing you don't.
        </p>
      </motion.div>
    </section>
  );
}
