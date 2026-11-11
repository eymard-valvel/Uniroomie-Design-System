import type { ReactNode } from "react";

export interface NavbarItem {
  id: string;
  label: string;
  href?: string;
}

export interface NavbarProps {
  brand?: ReactNode;
  items: NavbarItem[];
  activeItem?: string;
  variant?: "light" | "dark";
  action?: ReactNode;
  onNavigate?: (id: string, href?: string) => void;
}
