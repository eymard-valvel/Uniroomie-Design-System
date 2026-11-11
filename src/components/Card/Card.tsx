import type { CardProps } from "./Card.types";
import "./Card.css";

export function Card({ title, description, variant = "default", className = "", children, ...props }: CardProps) {
  return (
    <section {...props} className={`ur-card ur-card--${variant} ${className}`}>
      {(title || description) && (
        <header className="ur-card__header">
          {title && <h3 className="ur-card__title">{title}</h3>}
          {description && <p className="ur-card__description">{description}</p>}
        </header>
      )}
      <div className="ur-card__content">{children}</div>
    </section>
  );
}
