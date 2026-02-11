import { useEffect, useRef, useState } from "react";
import { USER } from "../constants";
import UserDropdown from "./UserDropdown";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-full border border-white/10 bg-zinc-900 cursor-pointer transition-colors duration-150 hover:border-lime-400/30 hover:bg-lime-400/5"
      >
        <span className="hidden sm:block text-[12px] text-zinc-400 font-mono tracking-wide">
          {USER.shortName}
        </span>

        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-zinc-900 select-none shrink-0"
          style={{ background: "linear-gradient(135deg, #a3e635, #22d3ee)" }}
        >
          {USER.initials}
        </div>

        <svg
          className={`text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && <UserDropdown onClick={() => setOpen(false)} user={USER} />}
    </div>
  );
}
