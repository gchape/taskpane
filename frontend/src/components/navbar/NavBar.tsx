import Logo from "../logo/Logo.tsx";
import NavLinks from "./NavLinks.tsx";
import NotificationBell from "./NotificationBell.tsx";
import UserMenu from "../user/UserMenu.tsx";
import BurgerMenu from "../menu/BurgerMenu.tsx";
import MobileMenu from "../menu/MobileMenu.tsx";
import { NavLink, Outlet } from "react-router";
import { useUser } from "../../features/context/UserContext.tsx";
import React from "react";

export default function NavBar() {
  const user = useUser();
  const [isOpen, setMobileOpen] = React.useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 font-[Syne,sans-serif]">
        <div className="h-0.5 [linear-gradient(90deg, transparent, #a3e635 35%, #a3e635 65%, transparent)]" />
        <div className="border-b border-white/10 transition-colors duration-300 bg-opacity-80 backdrop-blur-sm">
          <div
            className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8"
            style={{ height: 60 }}
          >
            <Logo />
            <NavLinks />

            <div className="flex items-center gap-3">
              <NotificationBell />

              <div className="hidden sm:block w-px h-6 bg-white/10" />

              {user.currentUser ? (
                <UserMenu />
              ) : (
                <NavLink
                  className="cursor-pointer text-zinc-400 hover:text-zinc-100 hover:bg-white/5 px-3.5 py-1.5 text-sm uppercase tracking-wider font-semibold rounded-md transition duration-150"
                  to={"/get-started"}
                >
                  Get Started
                </NavLink>
              )}
              <BurgerMenu
                isOpen={isOpen}
                onClick={() => setMobileOpen((o) => !o)}
              />
            </div>
          </div>
        </div>

        {isOpen && <MobileMenu />}
      </nav>

      <Outlet />
    </div>
  );
}
