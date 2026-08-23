/**
 * Aethera visual language: a weightless uppercase wordmark is balanced by a single glass navigation rail.
 */
import { useEffect, useState } from "react";
import { Chevron, MenuIcon, SearchIcon } from "./icons";
import "./Navbar.css";

const LINKS = ["Home", "How It Works", "Philosophy", "Use Cases"];

function hrefFor(label: string) {
  return `#${label.toLowerCase().replace(/\s+/g, "-")}`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav__inner shell">
        <a className="nav__brand" href="#top">
          Aethera
        </a>

        <nav className="nav__rail" aria-label="Primary">
          {LINKS.map((label, index) => (
            <span className="nav__slot" key={label}>
              {index > 0 && <span className="nav__dot" aria-hidden="true" />}
              <a href={hrefFor(label)}>{label}</a>
            </span>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__lang" type="button" aria-label="Language: English">
            EN <Chevron />
          </button>
          <button className="nav__search" type="button" aria-label="Search">
            <SearchIcon />
          </button>
        </div>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          {LINKS.map((label) => (
            <a key={label} href={hrefFor(label)} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
