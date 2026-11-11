import { useId } from "react";
import type { RadioButtonProps } from "./RadioButton.types";
import "./RadioButton.css";

export function RadioButton({ label, id, className = "", value = "", onChange, ...props }: RadioButtonProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label className={`ur-radio ${className}`} htmlFor={inputId}>
      <input
        {...props}
        id={inputId}
        type="radio"
        value={value}
        className="ur-radio__input"
        onChange={(event) => onChange?.(event.currentTarget.value, event)}
      />
      <span className="ur-radio__circle" aria-hidden="true" />
      {label && <span className="ur-radio__label">{label}</span>}
    </label>
  );
}
