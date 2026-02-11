import {useEffect, useState} from "react";
import Logo from "../logo/Logo.tsx";
import NavLinks from "./NavLinks.tsx";
import NotificationBell from "./NotificationBell.tsx";
import UserMenu from "../user/UserMenu.tsx";
import BurgerMenu from "../menu/BurgerMenu.tsx";
import MobileMenu from "../menu/MobileMenu.tsx";
import {Outlet} from "react-router";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 font-[Syne,sans-serif]">
                <div className="h-0.5 [linear-gradient(90deg, transparent, #a3e635 35%, #a3e635 65%, transparent)]"/>
                <div className="border-b border-white/10 transition-colors duration-300"
                     style={{
                         background: scrolled ? "rgba(14,12,24,.96)" : "rgba(14,12,24,.82)",
                         backdropFilter: "blur(18px) saturate(160%)",
                     }}
                >
                    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8"
                         style={{height: 60}}
                    >
                        <Logo/>
                        <NavLinks/>

                        <div className="flex items-center gap-3">
                            <NotificationBell/>

                            <div className="hidden sm:block w-px h-6 bg-white/10"/>

                            <UserMenu/>
                            <BurgerMenu
                                open={mobileOpen}
                                onToggle={() => setMobileOpen((o) => !o)}
                            />
                        </div>
                    </div>
                </div>

                {mobileOpen && <MobileMenu/>}
            </nav>

            <Outlet/>
        </>
    );
}