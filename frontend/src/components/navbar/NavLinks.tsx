"use client";
import { NAV_LINKS } from "../constants";
import { NavLink } from "react-router";

export default function NavLinks() {
  return (
    <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
      {NAV_LINKS.map((link) => (
        <li key={link}>
          <NavLink
            to={"/" + link.toLowerCase()}
            className={({ isActive }) =>
              [
                "nav-underline relative block px-3.5 py-1.5",
                "text-xs font-semibold uppercase tracking-widest rounded-md no-underline",
                "transition-colors duration-150",
                isActive
                  ? "text-lime-400"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
              ].join(" ")
            }
          >
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
