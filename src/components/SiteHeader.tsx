import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { navItems } from "../data/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="wordmark" href="#about" onClick={() => setIsOpen(false)}>
          Hao Wu
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
