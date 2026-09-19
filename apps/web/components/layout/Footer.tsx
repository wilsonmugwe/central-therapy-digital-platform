import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040C1C] text-white">
      <div className="container py-10 sm:py-12 lg:py-16">
        {/* MAIN FOOTER CONTENT */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.4fr_.6fr_.6fr] lg:gap-14">
          {/* BRAND */}
          <div>
            <Image
              src="/images/central-therapy-logo.png"
              alt="Central Therapy"
              width={170}
              height={110}
              className="h-[72px] w-auto object-contain sm:h-[85px] lg:h-[100px]"
            />

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-7 lg:mt-6 lg:text-lg lg:leading-8">
              Mobile physiotherapy supporting movement, confidence and
              independence across Perth.
            </p>
          </div>

          {/* MOBILE: EXPLORE + CONTACT SIDE BY SIDE */}
          {/* DESKTOP: CONTENTS PARTICIPATE IN ORIGINAL 3-COLUMN GRID */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:contents">
            {/* EXPLORE */}
            <div>
              <p className="eyebrow text-blue-400">
                Explore
              </p>

              <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3 lg:mt-6 lg:gap-4">
                <Link
                  href="#services"
                  className="text-sm text-slate-300 transition hover:text-white sm:text-base"
                >
                  Services
                </Link>

                <Link
                  href="#funding"
                  className="text-sm text-slate-300 transition hover:text-white sm:text-base"
                >
                  Funding
                </Link>

                <Link
                  href="#about"
                  className="text-sm text-slate-300 transition hover:text-white sm:text-base"
                >
                  About
                </Link>

                <Link
                  href="#faq"
                  className="text-sm text-slate-300 transition hover:text-white sm:text-base"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="eyebrow text-blue-400">
                Contact
              </p>

              <div className="mt-4 space-y-2.5 text-sm text-slate-300 sm:mt-5 sm:space-y-3 sm:text-base lg:mt-6 lg:space-y-4">
                <p>
                  <a
                    href="tel:0450292149"
                    className="transition hover:text-white"
                  >
                    0450 292 149
                  </a>
                </p>

                <p className="break-words">
                  <a
                    href="mailto:info@centraltherapy.net.au"
                    className="transition hover:text-white"
                  >
                    info@centraltherapy.net.au
                  </a>
                </p>

                <p>
                  Perth Metro &amp; Peel Region
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-500 sm:mt-12 sm:flex-row sm:justify-between sm:gap-4 sm:pt-6 lg:mt-16 lg:pt-7">
          <p>
            © {new Date().getFullYear()} Central Therapy.
          </p>

          <p>
            Mobile Physiotherapy • Perth
          </p>
        </div>
      </div>
    </footer>
  );
}