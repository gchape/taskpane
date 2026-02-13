import type { MenuEntry, Shape } from "../types";

export const links = [
  { label: "Docs", to: "/docs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const rings = [
  {
    id: "how-it-works",
    label: "How it works",
    target: "how-it-works",
  },
  {
    id: "pricing",
    label: "Pricing",
    target: "pricing",
  },
];

export const items: MenuEntry[] = [
  {
    label: "Dashboard",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Settings",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    label: "Earnings",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  { sep: true },
  {
    label: "Sign out",
    danger: true,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
  },
];

export const shapes: Shape[] = [
  {
    id: "sq1",
    type: "rect",
    style: { top: "10%", right: "8%", width: 180, height: 180 },
    animate: { rotate: [0, 90, 180, 270, 360] },
    transition: { duration: 28, repeat: Infinity, ease: "linear" },
    stroke: "rgba(163,230,53,0.12)",
    strokeWidth: 1,
  },
  {
    id: "sq2",
    type: "rect",
    style: { top: "38%", right: "18%", width: 56, height: 56 },
    animate: { rotate: [45, 135, 225, 315, 405] },
    transition: { duration: 14, repeat: Infinity, ease: "linear" },
    stroke: "rgba(255,255,255,0.06)",
    strokeWidth: 1,
  },
  {
    id: "ci1",
    type: "circle",
    style: { top: "20%", right: "2%", width: 100, height: 100 },
    animate: { scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    stroke: "rgba(163,230,53,0.15)",
    strokeWidth: 1,
    strokeDasharray: "6 8",
  },
  {
    id: "ci2",
    type: "circle",
    style: { top: "55%", right: "12%", width: 44, height: 44 },
    animate: { rotate: [0, 360] },
    transition: { duration: 10, repeat: Infinity, ease: "linear" },
    stroke: "rgba(255,255,255,0.07)",
    strokeWidth: 1,
    strokeDasharray: "3 5",
  },
  {
    id: "plus1",
    type: "plus",
    style: { top: "8%", right: "30%", width: 20, height: 20 },
    animate: { opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.1, 0.9] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    stroke: "rgba(163,230,53,0.4)",
    strokeWidth: 1.5,
  },
  {
    id: "plus2",
    type: "plus",
    style: { top: "62%", right: "28%", width: 14, height: 14 },
    animate: { opacity: [0.2, 0.6, 0.2] },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.5,
    },
    stroke: "rgba(255,255,255,0.2)",
    strokeWidth: 1.5,
  },
  {
    id: "dia1",
    type: "rect",
    style: { top: "44%", right: "5%", width: 32, height: 32 },
    animate: { rotate: [45, 135, 225, 315, 405], opacity: [0.4, 0.9, 0.4] },
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    stroke: "rgba(163,230,53,0.25)",
    fill: "rgba(163,230,53,0.04)",
    strokeWidth: 1,
  },
  {
    id: "ci3",
    type: "circle",
    style: { bottom: "-10%", right: "-5%", width: 300, height: 300 },
    animate: { scale: [1, 1.04, 1], opacity: [0.15, 0.3, 0.15] },
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
    stroke: "rgba(163,230,53,0.08)",
    strokeWidth: 1,
  },
];

export const steps = [
  {
    id: "step1",
    number: "01",
    title: "Create your company",
    description:
      "Register your organisation, configure your workspace, and invite your first admins. Takes under two minutes.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "step2",
    number: "02",
    title: "Add employees",
    description:
      "Onboard your team, define their roles and salaries, and group them into departments or projects.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    id: "step3",
    number: "03",
    title: "Assign & track",
    description:
      "Create projects, break them into tasks, assign ownership, and monitor everything from one dashboard.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export const features = [
  {
    id: "tasks",
    label: "01",
    title: "Task Assignment",
    description:
      "Assign tasks to any employee across any project. Set priorities, deadlines, and track progress in real time.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: "employees",
    label: "02",
    title: "Employee Management",
    description:
      "Onboard employees, define roles, set permissions, and organise teams under your company structure.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "03",
    title: "Project Overview",
    description:
      "See every project at a glance. Track milestones, monitor workloads, and keep deliverables on schedule.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "salary",
    label: "04",
    title: "Salary Management",
    description:
      "Define pay structures per role, track payroll cycles, and keep compensation data centralised and auditable.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export const services = [
  {
    id: "tasks",
    label: "01",
    title: "Task Assignment",
    description:
      "Assign tasks to any employee across any project. Set priorities, deadlines, and track progress in real time.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: "employees",
    label: "02",
    title: "Employee Management",
    description:
      "Onboard employees, define roles, set permissions, and organise teams under your company structure.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "03",
    title: "Project Overview",
    description:
      "See every project at a glance. Track milestones, monitor workloads, and keep deliverables on schedule.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "salary",
    label: "04",
    title: "Salary Management",
    description:
      "Define pay structures per role, track payroll cycles, and keep compensation data centralised and auditable.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "Free",
    period: null,
    description: "For small teams getting started.",
    highlight: false,
    features: [
      "Up to 5 employees",
      "2 active projects",
      "Task assignment",
      "Basic reporting",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    period: "/ month",
    description: "For growing companies that need more.",
    highlight: true,
    features: [
      "Up to 50 employees",
      "Unlimited projects",
      "Salary management",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: null,
    description: "For large organisations with complex needs.",
    highlight: false,
    features: [
      "Unlimited employees",
      "Unlimited projects",
      "Custom roles & permissions",
      "SSO & audit logs",
      "Dedicated support",
    ],
  },
];
