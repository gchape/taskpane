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