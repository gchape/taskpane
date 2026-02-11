import * as React from "react";

export interface NavLinkItem {
    label: string;
}

export interface MenuItem {
    label: string;
    icon: React.ReactNode;
    danger?: boolean;
}

export interface MenuSeparator {
    sep: true;
}

export type MenuEntry = MenuItem | MenuSeparator;

export function isSeparator(entry: MenuEntry): entry is MenuSeparator {
    return "sep" in entry;
}