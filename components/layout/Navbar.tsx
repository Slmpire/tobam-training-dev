"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";
import { Icon } from "@iconify/react";

const topNavLinks = [
  { label: "About", href: "#", hasDropdown: true },
  { label: "What We Do", href: "#", hasDropdown: true },
  { label: "Jobs", href: "#", hasDropdown: true },
  { label: "Projects", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">

        {/* Top bar: Logo + Account + Take Assessment */}
        <div className="max-w-content mx-auto px-8 h-[80px] flex items-center justify-between">

          {/* Logo — PUT YOUR LOGO IN /public/images/logo.png */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Tobams Group Logo"
              width={140}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* Desktop: Account + Take Assessment */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-white font-nunito-sans font-semibold text-body hover:bg-primary-darkest transition-colors">
              <Icon icon="ri:user-fill" width={20} height={20} />
              Account
              <Icon icon="heroicons:chevron-down" width={16} height={16} />
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded bg-accent-red text-white font-nunito-sans font-semibold text-body hover:opacity-90 transition-opacity">
              Take Assessment
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-neutral-900"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Icon icon="solar:hamburger-menu-bold" width={32} height={32} />
          </button>
        </div>

        {/* Bottom bar: Nav links — desktop only */}
        <div className="hidden lg:block border-t border-neutral-200">
          <div className="max-w-content mx-auto px-8 h-[56px] flex items-center gap-8">
            {topNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 font-nunito-sans text-body text-neutral-900 hover:text-primary transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-primary pb-1"
              >
                {link.label}
                {link.hasDropdown && (
                  <Icon icon="heroicons:chevron-down" width={14} height={14} />
                )}
              </Link>
            ))}
          </div>
        </div>

      </nav>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navLinks={topNavLinks}
      />
    </>
  );
}