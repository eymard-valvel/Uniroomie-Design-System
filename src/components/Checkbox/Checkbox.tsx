import { useId } from "react";
import type { CheckboxProps } from "./Checkbox.types";
import "./Checkbox.css";

export function Checkbox({ label, id, className = "", onChange, ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label className={`ur-checkbox ${className}`} htmlFor={inputId}>
      <input
        {...props}
        id={inputId}
        type="checkbox"
        className="ur-checkbox__input"
        onChange={(event) => onChange?.(event.currentTarget.checked, event)}
      />
      <span className="ur-checkbox__box" aria-hidden="true" />
      {label && <span className="ur-checkbox__label">{label}</span>}
    </label>
  );
}
