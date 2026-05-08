"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/contact", label: "Contact" },
] as const;

function LogoPlaceholder({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 min-w-[100px] items-center justify-center rounded-md border border-dashed border-zinc-400 bg-zinc-100 px-3 text-xs font-medium text-zinc-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 ${className ?? ""}`}
    >
      Logo
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const linkClass = (href: string) => {
    const active = pathname === href;
    return [
      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
      active
        ? "bg-zinc-200 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50"
        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 dark:border-zinc-800/80">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center md:h-16">
          {/* Mobile: balanced bar + centered logo */}
          <div className="flex w-full items-center justify-between md:hidden">
            <div className="w-11 shrink-0" aria-hidden />
            <Link
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="sr-only">Home</span>
              <LogoPlaceholder />
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:outline-zinc-50"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop: logo left, nav + login right */}
          <div className="hidden w-full items-center justify-between md:flex">
            <Link href="/" className="shrink-0">
              <span className="sr-only">Home</span>
              <LogoPlaceholder />
            </Link>
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-1">
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkClass(href)}>
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="pl-2">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                  >
                    Log in
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile menu: overlays page — does not shift layout */}
        <nav
          id={menuId}
          aria-label="Mobile menu"
          inert={!menuOpen ? true : undefined}
          className={`absolute left-0 right-0 top-full z-50 border-t border-zinc-200 bg-background/95 shadow-lg backdrop-blur supports-backdrop-filter:bg-background/90 dark:border-zinc-800 md:hidden md:pointer-events-none ${
            menuOpen
              ? "pointer-events-auto max-h-[min(480px,80vh)] overflow-y-auto opacity-100"
              : "pointer-events-none max-h-0 overflow-hidden border-t-transparent opacity-0"
          } transition-[max-height,opacity] duration-200 ease-out`}
        >
          <ul className="flex flex-col gap-1 py-3">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${linkClass(href)} block w-full text-center sm:text-left`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/login"
                className="flex w-full items-center justify-center rounded-full bg-zinc-950 px-4 py-3 text-sm font-medium text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
