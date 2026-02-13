"use client";
import Logo from "../logo/Logo.tsx";
import NavLinks from "./NavLinks.tsx";
import UserMenu from "../user/UserMenu.tsx";
import BurgerMenu from "../menu/BurgerMenu.tsx";
import MobileMenu from "../menu/MobileMenu.tsx";
import { NavLink, Outlet } from "react-router";
import { useUser } from "../../features/context/UserContext.tsx";
import React from "react";
import Notifications from "../notification/Notifications.tsx";
import { motion } from "motion/react";

export default function NavBar() {
  const user = useUser();
  const [isOpen, setMobileOpen] = React.useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 font-[Syne,sans-serif]">
        <div className="h-px bg-[linear-gradient(90deg,transparent_0%,rgba(163,230,53,0.5)_30%,rgba(163,230,53,0.5)_70%,transparent_100%)]" />
        <div className="border-b border-white/[0.07] bg-[rgba(9,9,11,0.75)] backdrop-blur-xl">
          <div
            className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8"
            style={{ height: 56 }}
          >
            <Logo />
            <NavLinks />

            <div className="flex items-center gap-2.5">
              <Notifications />

              <div className="hidden sm:block w-px h-5 bg-white/8" />

              {user.currentUser ? (
                <UserMenu user={user.currentUser}/>
              ) : (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.1,
                      ease: "easeOut",
                    },
                  }}
                >
                  <NavLink
                    className="hidden sm:block cursor-pointer text-zinc-500 hover:text-lime-400 hover:bg-white/5 px-3.5 py-1.5 text-[12.5px] uppercase tracking-wide font-semibold rounded-md transition duration-150"
                    to="/get-started"
                  >
                    Get Started
                  </NavLink>
                </motion.div>
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
