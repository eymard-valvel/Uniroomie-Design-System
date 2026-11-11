import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode;
  error?: string;
  helperText?: string;
  success?: boolean;
  inputSize?: "small" | "medium" | "large";
}
