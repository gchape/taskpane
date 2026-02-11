export default function NotificationBell() {
    return (
        <button aria-label="Notifications"
                className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-zinc-900 text-zinc-500 cursor-pointer transition-colors duration-150 hover:border-lime-400/30 hover:text-zinc-100 hover:bg-lime-400/5">
            <span
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-lime-400 badge-pulse"
                style={{border: "1.5px solid #0e0c18"}}
            />

            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
        </button>
    );
}