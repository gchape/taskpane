"use client";
import React from "react";
import NotificationBell from "./NotificationBell";
import NotificationDropdown from "./NotificationDropdown";
import { useNotifications } from "../../features/context/NotificationContext";

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
        {isOpen && (
          <NotificationDropdown
            notifications={notifications}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}
