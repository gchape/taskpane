import { NavLink } from "react-router";
import type { User } from "../../types";
import { USER_MENU_ITEMS } from "../constants";

interface Props {
  user: User;
  onClick: () => void;
}

export default function UserDropdown({
  onClick,
  user: { email, name },
}: Props) {
  return (
    <div
      className="dropdown-enter absolute top-[calc(100%+10px)] right-0 w-56 rounded-xl border border-white/10 bg-zinc-900 overflow-hidden z-50"
      style={{ boxShadow: "0 20px 60px rgba(0,0,0,.6)" }}
    >
      <div className="px-4 py-3 border-b border-white/10 bg-lime-400/5">
        <p className="text-[13px] font-bold text-zinc-100 tracking-tight">
          {name}
        </p>
        <p className="text-[11px] text-zinc-500 mt-0.5 tracking-wide font-mono">
          {email}
        </p>
      </div>

      <div className="p-1.5">
        {USER_MENU_ITEMS.map((entry, i) =>
          "sep" in entry ? (
            <div key={i} className="my-1.5 h-px bg-white/10" />
          ) : (
            <NavLink
              key={entry.label}
              to={"/" + entry.label.toLowerCase()}
              onClick={onClick}
              className={[
                "flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg",
                "text-[13px] font-semibold tracking-wide text-left",
                "border-none bg-transparent cursor-pointer transition-colors duration-150",
                entry.danger
                  ? "text-zinc-400 hover:text-red-400 hover:bg-red-500/10"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
              ].join(" ")}
            >
              <span className="opacity-50">{entry.icon}</span>
              {entry.label}
            </NavLink>
          ),
        )}
      </div>
    </div>
  );
}
