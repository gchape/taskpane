import {NAV_LINKS} from "../constants";
import {NavLink} from "react-router";

export default function MobileMenu() {
    return (
        <div className="md:hidden flex flex-col bg-zinc-900 border-t border-white/10 px-4 pb-5 pt-2">
            {NAV_LINKS.map((link) => (
                <NavLink
                    key={link}
                    to={"/" + link.toLowerCase()}
                    className={({isActive}) => [
                        "flex items-center justify-between",
                        "text-xs font-semibold uppercase tracking-widest",
                        "py-3 border-b border-white/5 no-underline last:border-b-0",
                        "transition-colors duration-150",
                        isActive ? "text-lime-400" : "text-zinc-400 hover:text-zinc-100",
                    ].join(" ")}
                >
                    {link}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </NavLink>
            ))}
        </div>
    );
}