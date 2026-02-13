"use client";
import { NavLink } from "react-router";
import { links } from "../constants";

export default function NavLinks() {
  const handleHashClick = (to: string) => (e: React.MouseEvent) => {
    if (!to.includes("#")) return;

    e.preventDefault();
    const id = to.split("#")[1];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
      {links.map(({ label, to }) => (
        <li key={label}>
          <NavLink
            to={to}
            onClick={handleHashClick(to)}
            className={({ isActive }) =>
              `nav-underline relative px-3 py-1.5 text-[12px] font-semibold uppercase tracking-widest rounded-md transition-colors duration-150 ${
                isActive
                  ? "text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-100 hover:bg-white/5"
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
