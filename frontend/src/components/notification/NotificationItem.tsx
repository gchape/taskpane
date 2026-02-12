import { NavLink } from "react-router";
import type { Notification } from "../../types";

interface NotificationItemProps {
  index: number;
  notification: Notification;
  onClose: () => void;
}

export default function NotificationItem({
  notification,
  index,
  onClose,
}: NotificationItemProps) {
  return (
    <NavLink
      to={"/notification/" + notification.id}
      onClick={onClose}
      className="notification-item flex flex-col gap-1 w-full px-2.5 py-2.5 rounded-lg text-left border-none bg-transparent cursor-pointer transition-colors duration-150 text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <span className="text-[13px] font-semibold tracking-wider">
        {notification.title}
      </span>
      <span className="text-[11px] text-zinc-500 font-mono">
        {notification.timestamp.toDateString()}
      </span>
    </NavLink>
  );
}
