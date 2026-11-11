import { useId, useState } from "react";
import type { DropdownProps } from "./Dropdown.types";
import "./Dropdown.css";

export function Dropdown({
  label,
  options,
  placeholder = "Seleccionar opción",
  error,
  value,
  defaultValue = "",
  onChange,
  id,
  className = "",
  ...props
}: DropdownProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selectedValue = value === undefined ? internalValue : value;

  return (
    <div className={`ur-dropdown ${error ? "ur-dropdown--error" : ""} ${className}`}>
      {label && <label className="ur-dropdown__label" htmlFor={selectId}>{label}</label>}
      <select
        {...props}
        id={selectId}
        className="ur-dropdown__select"
        value={selectedValue}
        aria-invalid={Boolean(error)}
        onChange={(event) => {
          if (value === undefined) setInternalValue(event.currentTarget.value);
          onChange?.(event.currentTarget.value, event);
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="ur-dropdown__error" role="alert">{error}</span>}
    </div>
  );
}
