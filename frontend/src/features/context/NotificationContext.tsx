import React from "react";
import type { Notification } from "../../types";

type NotificationAction = { type: "REMOVE" | "ADD"; payload: Notification };

const reducer = (state: Notification[], action: NotificationAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter(({ id }) => id != action.payload.id);
  }
};

const NotificationsContext = React.createContext<{
  notifications: Notification[];
  updateNotifications: React.Dispatch<NotificationAction>;
}>({
  notifications: [],
  updateNotifications: () => [],
});

export const NotificationsProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [notifications, updateNotifications] = React.useReducer(reducer, []);

  return (
    <NotificationsContext value={{ notifications, updateNotifications }}>
      {children}
    </NotificationsContext>
  );
};

export const useNotifications = () => React.use(NotificationsContext);
