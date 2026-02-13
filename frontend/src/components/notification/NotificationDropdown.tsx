import { NavLink } from "react-router";
import NotificationEmpty from "./NotificationEmpty";
import NotificationItem from "./NotificationItem";
import type { Notification } from "../../types";

type NotificationDropdownProps = {
  onClose: () => void;
  notifications: Notification[];
};

export default function NotificationDropdown({
  onClose,
  notifications,
}: NotificationDropdownProps) {
  return (
    <div
      className="dropdown-enter absolute top-[calc(100%+10px)] right-0 w-64 lg:w-72 rounded-xl border border-white/10 bg-zinc-900 overflow-hidden z-50"
      style={{
        boxShadow:
          "0 20px 60px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div className="px-4 py-3 border-b border-white/10 bg-lime-400/5 flex items-center justify-between">
        <div>
          <p className="text-[13px] font-bold text-zinc-100 tracking-tight">
            Notifications
          </p>
          <p className="text-[11px] text-zinc-500 mt-0.5 tracking-wide">
            {notifications.length === 0
              ? "No new messages"
              : `${notifications.length} unread message${notifications.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        {notifications.length > 0 && (
          <span className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full bg-lime-400/15 text-lime-400 text-[10px] font-bold tabular-nums border border-lime-400/20">
            {notifications.length}
          </span>
        )}
      </div>

      <div className="p-1.5">
        {notifications.length === 0 ? (
          <NotificationEmpty />
        ) : (
          notifications.map((notification, i) => (
            <NotificationItem
              index={i}
              key={notification.id}
              notification={notification}
              onClose={onClose}
            />
          ))
        )}
      </div>

      <div className="p-1.5 border-t border-white/10">
        <NavLink
          to="/notifications"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full px-2.5 py-2 rounded-lg text-[13px] font-semibold tracking-wide text-center border-none bg-transparent cursor-pointer transition-colors duration-150 text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
        >
          View all notifications
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}
