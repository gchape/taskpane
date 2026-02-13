"use client";
import { motion } from "motion/react";
import { NavLink } from "react-router";
import { plans } from "../constants";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-10 max-w-6xl mx-auto px-6 pb-32 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="w-5 h-px bg-lime-400" />
        <span className="text-[11px] font-semibold text-lime-400 uppercase tracking-widest">
          Pricing
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl font-bold tracking-tight text-white/85 leading-tight mb-4 max-w-sm"
      >
        Simple pricing,
        <br />
        <span className="text-zinc-500">no surprises.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[13px] text-zinc-500 mb-16 max-w-sm"
      >
        Start free, scale when you're ready. Cancel any time.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative flex flex-col rounded-xl border p-7 transition-all duration-200 ${
              plan.highlight
                ? "bg-lime-400/4 border-lime-400/25 shadow-[0_0_40px_rgba(163,230,53,0.06)]"
                : "bg-zinc-950 border-white/[0.07] hover:border-white/12"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-lime-400 text-zinc-950">
                Most popular
              </span>
            )}

            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
              {plan.name}
            </p>

            <div className="flex items-end gap-1 mb-2">
              <span
                className={`text-4xl font-bold tracking-tight ${plan.highlight ? "text-lime-400" : "text-zinc-100"}`}
              >
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-[13px] text-zinc-500 mb-1.5">
                  {plan.period}
                </span>
              )}
            </div>

            <p className="text-[13px] text-zinc-500 mb-8 leading-relaxed">
              {plan.description}
            </p>

            <ul className="flex flex-col gap-3 mb-10 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-[13px] text-zinc-400"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={plan.highlight ? "#a3e635" : "#52525b"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <NavLink
              to="/get-started"
              className={`flex items-center justify-center h-10 rounded-lg text-[12px] font-bold uppercase tracking-widest transition-all duration-150 ${
                plan.highlight
                  ? "bg-lime-400 text-zinc-950 hover:opacity-90 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]"
                  : "bg-white/5 text-zinc-400 border border-white/8 hover:text-zinc-100 hover:bg-white/10"
              }`}
            >
              {plan.id === "enterprise" ? "Contact us" : "Get started"}
            </NavLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
