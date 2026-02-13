"use client";
import React from "react";
import NotificationBell from "./NotificationBell";
import NotificationDropdown from "./NotificationDropdown";
import { useNotifications } from "../../features/context/NotificationContext";
import { AnimatePresence, motion } from "motion/react";

export default function Notifications() {
  const { notifications } = useNotifications();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="relative">
        <NotificationBell
          notifications={notifications}
          onClick={() => setIsOpen((v) => !v)}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: [0.25, 0.5, 0.75, 1] }}
              transition={{
                duration: 0.1,
                ease: "easeIn",
              }}
              exit={{ y: -10, opacity: [1, 0.75, 0.5, 0] }}
            >
              <NotificationDropdown
                notifications={notifications}
                onClose={() => setIsOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
