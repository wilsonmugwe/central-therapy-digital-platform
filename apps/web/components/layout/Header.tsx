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
    <header className="absolute left-0 right-0 top-0 z-50 pt-5">
      <div className="container">
        <div className="flex h-[84px] items-center justify-between rounded-[1.6rem] border border-white/15 bg-[#2459B8]/90 px-5 shadow-[0_18px_60px_rgba(7,21,47,.18)] backdrop-blur-xl lg:px-7">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/central-therapy-logo.png"
              alt="Central Therapy"
              width={150}
              height={90}
              priority
              className="h-[72px] w-auto object-contain"
            />
          </Link>

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

          <Link
            href="#appointment"
            className="group hidden items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold !text-[#2459B8] shadow-lg transition hover:-translate-y-0.5 lg:flex"
          >
            Request appointment
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2459B8] !text-white">
              ↗
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white !text-[#2459B8] lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-[1.6rem] bg-[#07152F] p-6 shadow-2xl lg:hidden">
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-4 font-bold !text-white"
              >
                {label}
              </Link>
            ))}

            <Link
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-5 block rounded-full bg-white px-6 py-4 text-center font-extrabold !text-[#2459B8]"
            >
              Request appointment →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}