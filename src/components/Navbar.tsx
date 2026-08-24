"use client";

import { useState } from "react";
import Logo from "./logo";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link href="/" aria-label="Temitope — Home">
        <Logo />
      </Link>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#work" onClick={() => setMenuOpen(false)}>
          Work
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}