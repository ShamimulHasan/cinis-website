"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconMoon, IconSun } from "./Icons";

function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
  }

  return (
    <button
      className="theme-toggle"
      aria-label="Toggle dark mode"
      onClick={toggle}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
}

const services = [
  { href: "/services/cleanroom", label: "Cleanroom / Sterile Cleaning" },
  { href: "/services/laboratory", label: "Laboratory Cleaning" },
  { href: "/services/lab-preparation", label: "Lab Preparation" },
  { href: "/services/post-maintenance", label: "Post Maintenance Cleaning" },
  { href: "/services/office", label: "Office Cleaning" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          <img src="https://www.csocs.com.au/logo.png" alt="CINI'S logo" />
        </Link>

        <nav className="main-nav">
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li className="has-dropdown">
              <Link href="/services/cleanroom">Our Services</Link>
              <div className="dropdown">
                {services.map((s) => (
                  <Link key={s.href} href={s.href}>{s.label}</Link>
                ))}
              </div>
            </li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-cta">
          <a className="header-phone" href="tel:+1300933063">1300 933 063</a>
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
          <ThemeToggle />
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <div className="mobile-services">
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)}>{s.label}</Link>
            ))}
          </div>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
