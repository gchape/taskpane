import type { TargetAndTransition, Transition } from "motion";
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

export interface Shape {
  id: string;
  type: "rect" | "circle" | "plus";
  style: Record<string, string | number>;
  animate: TargetAndTransition;
  transition: Transition;
  stroke: string;
  fill?: string;
  strokeWidth: number;
  strokeDasharray?: string;
}
