import type { NavbarProps } from "./Navbar.types";
import "./Navbar.css";

export function Navbar({ brand = "Uniroomie", items, activeItem, variant = "light", action, onNavigate }: NavbarProps) {
  return (
    <nav className={`ur-navbar ur-navbar--${variant}`} aria-label="Navegación principal">
      <div className="ur-navbar__inner">
        <div className="ur-navbar__brand">{brand}</div>
        <div className="ur-navbar__items">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href ?? "#"}
              className={`ur-navbar__link ${activeItem === item.id ? "is-active" : ""}`}
              aria-current={activeItem === item.id ? "page" : undefined}
              onClick={(event) => {
                if (!item.href) event.preventDefault();
                onNavigate?.(item.id, item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {action && <div className="ur-navbar__action">{action}</div>}
      </div>
    </nav>
  );
}
