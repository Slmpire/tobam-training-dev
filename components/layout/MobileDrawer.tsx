"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileDrawer({ open, onClose, navLinks }: MobileDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-xl flex flex-col transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
          <span className="font-nunito font-bold text-primary text-lg">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-neutral-900 hover:text-primary transition-colors"
          >
            <Icon icon="heroicons:x-mark" width={24} height={24} />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col px-6 py-6 gap-5 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between font-nunito-sans text-body font-semibold text-neutral-900 hover:text-primary transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <Icon icon="heroicons:chevron-down" width={16} height={16} />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom CTAs */}
        <div className="px-6 py-6 border-t border-neutral-200 flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded bg-primary text-white font-nunito-sans font-semibold text-body hover:bg-primary-darkest transition-colors">
            <Icon icon="ri:user-fill" width={18} height={18} />
            Account
          </button>
          <button className="w-full flex items-center justify-center px-5 py-3 rounded bg-accent-red text-white font-nunito-sans font-semibold text-body hover:opacity-90 transition-opacity">
            Take Assessment
          </button>
        </div>
      </div>
    </>
  );
}