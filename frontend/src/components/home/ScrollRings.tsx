"use client";
import { motion } from "motion/react";
import { rings } from "../constants";

export function ScrollRings() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 flex items-center gap-5">
      {rings.map((ring, i) => (
        <motion.button
          key={ring.id}
          onClick={() => scrollTo(ring.target)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3 + i * 0.1,
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            bounce: 0.5,
          }}
          className="group flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
        >
          {/* Ring */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 transition-all duration-200 group-hover:border-lime-400/40 group-hover:bg-lime-400/5">
            {/* Animated inner dot */}
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-lime-400"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              style={{ boxShadow: "0 0 6px rgba(163,230,53,0.6)" }}
            />
            {/* Orbiting ring */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 40 40"
              fill="none"
            >
              <motion.circle
                cx="20"
                cy="20"
                r="17"
                stroke="rgba(163,230,53,0.2)"
                strokeWidth="1"
                strokeDasharray="12 54"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "20px 20px" }}
              />
            </svg>
            {/* Chevron down */}
            <svg
              className="absolute bottom-0.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
            >
              <path
                d="M1 1l3 3 3-3"
                stroke="#a3e635"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Label */}
          <span className="text-[12px] font-semibold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-100 transition-colors duration-150">
            {ring.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
