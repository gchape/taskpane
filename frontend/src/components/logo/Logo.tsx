export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 no-underline select-none">
      <svg
        width="28"
        height="28"
        viewBox="0 0 30 30"
        fill="none"
        style={{ overflow: "visible" }}
      >
        <circle
          cx="15"
          cy="15"
          r="13"
          stroke="rgba(163,230,53,.2)"
          strokeWidth="1.5"
        />
        <circle
          cx="15"
          cy="15"
          r="13"
          className="logo-ring"
          stroke="#a3e635"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="15"
          cy="15"
          r="6"
          stroke="rgba(163,230,53,.4)"
          strokeWidth="1.5"
        />
        <circle cx="15" cy="15" r="2.5" fill="#a3e635" />
        <line
          x1="15"
          y1="2"
          x2="15"
          y2="9"
          stroke="#a3e635"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="21"
          x2="15"
          y2="28"
          stroke="rgba(163,230,53,.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="15"
          x2="21"
          y2="15"
          stroke="rgba(163,230,53,.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="15"
          x2="9"
          y2="15"
          stroke="rgba(163,230,53,.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-lg font-extrabold tracking-tight text-zinc-50 leading-none">
        Task<span className="text-lime-400">Pane</span>
      </span>
    </a>
  );
}
