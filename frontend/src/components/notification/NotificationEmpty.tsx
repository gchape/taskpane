export default function NotificationEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/8 text-zinc-600">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-[13px] font-semibold text-zinc-400 tracking-tight">
          All caught up
        </p>
        <p className="text-[11px] text-zinc-600 mt-0.5">
          No new notifications right now
        </p>
      </div>
    </div>
  );
}
