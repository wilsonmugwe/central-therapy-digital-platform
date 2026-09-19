"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["Services", "#services"],
  ["Funding", "#funding"],
  ["About", "#about"],
  ["Process", "#process"],
  ["FAQs", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 pt-3 sm:pt-5">
      <div className="container">
        {/* MAIN NAVIGATION BAR */}
        <div className="flex h-[68px] items-center justify-between rounded-[1.25rem] border border-white/15 bg-[#2459B8]/90 px-4 shadow-[0_18px_60px_rgba(7,21,47,.18)] backdrop-blur-xl sm:h-[84px] sm:rounded-[1.6rem] sm:px-5 lg:px-7">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Central Therapy home"
          >
            <Image
              src="/images/central-therapy-logo.png"
              alt="Central Therapy"
              width={150}
              height={90}
              priority
              className="h-[56px] w-auto object-contain sm:h-[72px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-bold !text-white/80 transition hover:!text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <Link
            href="#appointment"
            className="group hidden items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold !text-[#2459B8] shadow-lg transition hover:-translate-y-0.5 lg:flex"
          >
            Request appointment

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2459B8] !text-white">
              ↗
            </span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold !text-[#2459B8] sm:h-11 sm:w-11 lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-[1.25rem] bg-[#07152F] p-4 shadow-2xl sm:rounded-[1.6rem] sm:p-6 lg:hidden">
            <nav>
              {navigation.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-3.5 text-sm font-bold !text-white sm:py-4 sm:text-base"
                >
                  <span>{label}</span>

                  <span className="text-blue-300">
                    ↗
                  </span>
                </Link>
              ))}
            </nav>

            {/* MOBILE CTA */}
            <Link
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-extrabold !text-[#2459B8] sm:mt-5 sm:px-6 sm:py-4 sm:text-base"
            >
              <span>Request appointment</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2459B8] !text-white">
                ↗
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}