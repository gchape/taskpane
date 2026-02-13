"use client";
import { motion } from "motion/react";
import { steps } from "../constants";

export function HowItWorks() {
  return (
    <section className="relative z-10 max-w-6xl" id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="w-5 h-px bg-lime-400" />
        <span className="text-[11px] font-semibold text-lime-400 uppercase tracking-widest">
          How it works
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl font-bold tracking-tight text-white/85 leading-tight mb-20 max-w-sm"
      >
        Up and running
        <br />
        <span className="text-zinc-500">in three steps.</span>
      </motion.h2>

      <div className="relative flex flex-col lg:flex-row gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex-1 flex flex-col items-center gap-6 px-0 pb-12 lg:px-10 lg:items-start lg:pb-0"
          >
            <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900 border border-white/8 text-lime-400 shrink-0">
              {step.icon}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-lime-400 border-2 border-[#09090b]" />
            </div>

            <span className="text-[10px] font-bold text-zinc-700 tracking-widest uppercase">
              Step {step.number}
            </span>

            <div>
              <p className="text-[15px] font-bold text-zinc-100 tracking-tight mb-2">
                {step.title}
              </p>
              <p className="text-[13px] text-zinc-500 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
