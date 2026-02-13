"use client";
import { motion } from "motion/react";
import { services } from "../constants";

export function Services() {
  return (
    <section id="services" className="relative z-10 max-w-6xl scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="w-5 h-px bg-lime-400" />
        <span className="text-[11px] font-semibold text-lime-400 uppercase tracking-widest">
          Services
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl font-bold tracking-tight text-white/85 leading-tight mb-16 max-w-md"
      >
        Everything your company needs,
        <br />
        <span className="text-zinc-500">nothing it doesn't.</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-xl overflow-hidden border border-white/6">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col gap-5 p-7 bg-zinc-950 hover:bg-[#0d0d0f] transition-colors duration-200"
          >
            <span className="absolute top-0 left-6 right-6 h-px bg-lime-400/0 group-hover:bg-lime-400/40 transition-all duration-300" />
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/[0.07] text-lime-400 group-hover:bg-lime-400/10 group-hover:border-lime-400/20 transition-all duration-200">
              {s.icon}
            </div>
            <span className="text-[10px] font-bold text-zinc-600 tracking-widest uppercase">
              {s.label}
            </span>
            <div>
              <p className="text-[14px] font-bold text-zinc-100 tracking-tight mb-2">
                {s.title}
              </p>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
