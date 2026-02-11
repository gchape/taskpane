import {NAV_LINKS, type NavLabel} from "../constants";

interface Props {
    active: NavLabel;
    onSelect: (link: NavLabel) => void;
}

export default function NavLinks({active, onSelect}: Props) {
    return (
        <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
                <li key={link}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onSelect(link);
                        }}
                        className={[
                            "nav-underline relative block px-3.5 py-1.5",
                            "text-xs font-semibold uppercase tracking-widest rounded-md no-underline",
                            "transition-colors duration-150",
                            active === link
                                ? "text-lime-400"
                                : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
                        ].join(" ")}
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    );
}