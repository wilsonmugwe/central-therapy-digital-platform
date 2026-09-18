import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040C1C] text-white">
      <div className="container py-16">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_.6fr_.6fr]">
          <div>
            <Image
              src="/images/central-therapy-logo.png"
              alt="Central Therapy"
              width={170}
              height={110}
              className="h-[100px] w-auto object-contain"
            />

            <p className="mt-6 max-w-md text-lg leading-8 text-slate-400">
              Mobile physiotherapy supporting movement, confidence and
              independence across Perth.
            </p>
          </div>

          <div>
            <p className="eyebrow text-blue-400">Explore</p>

            <div className="mt-6 flex flex-col gap-4">
              <Link href="#services" className="text-slate-300 hover:text-white">
                Services
              </Link>
              <Link href="#funding" className="text-slate-300 hover:text-white">
                Funding
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-white">
                About
              </Link>
              <Link href="#faq" className="text-slate-300 hover:text-white">
                FAQs
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow text-blue-400">Contact</p>

            <div className="mt-6 space-y-4 text-slate-300">
              <p>0450 292 149</p>
              <p>info@centraltherapy.net.au</p>
              <p>Perth Metro &amp; Peel Region</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Central Therapy.</p>
          <p>Mobile Physiotherapy • Perth</p>
        </div>
      </div>
    </footer>
  );
}