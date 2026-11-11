import { useState } from "react";
import type { ToggleProps } from "./Toggle.types";
import "./Toggle.css";

export function Toggle({ checked, defaultChecked = false, label, onChange, className = "", disabled, ...props }: ToggleProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleClick = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <span className={`ur-toggle ${className}`}>
      <button
        {...props}
        type="button"
        role="switch"
        aria-checked={isChecked}
        className={`ur-toggle__control ${isChecked ? "is-checked" : ""}`}
        disabled={disabled}
        onClick={handleClick}
      >
        <span className="ur-toggle__thumb" />
      </button>
      {label && <span className="ur-toggle__label">{label}</span>}
    </span>
  );
}
