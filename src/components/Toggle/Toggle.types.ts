import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: ReactNode;
  onChange?: (checked: boolean) => void;
}
