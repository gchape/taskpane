import * as React from "react";

export interface MenuItem {
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
}

export interface MenuSeparator {
  sep: true;
}

export type MenuEntry = MenuItem | MenuSeparator;

export type User = {
  name: string;
  email: string;
  initials: string;
  shortName: string;
};

export type Notification = {
  id: number;
  text: string;
  title: string;
  author: string;
  timestamp: Date;
};
