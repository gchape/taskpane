import React from "react";
import type { User } from "../../types";

type UserAction = { type: "SET"; payload: User } | { type: "RESET" };

const reducer = (_: User | null, action: UserAction): User | null => {
  if (action.type === "SET") {
    return { ...action.payload };
  }
  return null;
};

const UserContext = React.createContext<{
  currentUser: User | null;
  updateUser: React.Dispatch<UserAction>;
}>({
  currentUser: null,
  updateUser: () => {},
});

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [currentUser, updateUser] = React.useReducer(reducer, null);

  return (
    <UserContext value={{ currentUser, updateUser }}>{children}</UserContext>
  );
};

export const useUser = () => React.use(UserContext);
