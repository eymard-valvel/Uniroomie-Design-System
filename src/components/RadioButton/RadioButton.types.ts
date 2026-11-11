import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label?: ReactNode;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}
