import { useId } from "react";
import type { InputProps } from "./Input.types";
import "./Input.css";

export function Input({
  label,
  error,
  helperText,
  success = false,
  inputSize = "medium",
  id,
  className = "",
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const message = error || helperText;

  return (
    <div className={`ur-input ur-input--${inputSize} ${error ? "ur-input--error" : ""} ${success ? "ur-input--success" : ""} ${className}`}>
      {label && <label className="ur-input__label" htmlFor={inputId}>{label}</label>}
      <input
        {...props}
        id={inputId}
        className="ur-input__field"
        aria-invalid={Boolean(error)}
        aria-describedby={message ? `${inputId}-message` : undefined}
      />
      {message && <span className="ur-input__message" id={`${inputId}-message`} role={error ? "alert" : undefined}>{message}</span>}
    </div>
  );
}
