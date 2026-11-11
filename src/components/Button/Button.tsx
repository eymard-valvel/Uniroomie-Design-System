import type { ButtonProps } from "./Button.types";
import "./Button.css";

export function Button({
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = ["ur-button", `ur-button--${variant}`, `ur-button--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading && <span className="ur-button__spinner" aria-hidden="true" />}
      <span>{loading ? "Cargando..." : children}</span>
    </button>
  );
}
