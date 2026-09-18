import Link from "next/link";

export default function Hero() {
  return (
    <section className="blue-grid relative min-h-[880px] overflow-hidden pt-36 text-white">
      {/* Background atmosphere */}
      <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[#3B82F6]/25 blur-[130px]" />
      <div className="absolute -right-48 bottom-[-100px] h-[700px] w-[700px] rounded-full bg-[#07152F]/30 blur-[140px]" />

      {/* Giant decorative CT */}
      <div className="pointer-events-none absolute bottom-[-4rem] right-[-2rem] hidden select-none text-[18rem] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
        CT
      </div>

      <div className="container relative z-10">
        <div className="grid min-h-[700px] items-center gap-16 py-16 lg:grid-cols-[1.1fr_.9fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-blue-200" />

              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-100 sm:text-base">
                Mobile Physiotherapy Perth.
              </p>
            </div>

            <h1 className="mt-8 text-[4rem] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-[5.3rem] lg:text-[6.5rem]">
              Expert
              <span className="block">Physiotherapy,</span>
              <span className="block text-blue-200">
                At Your Door.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl font-semibold leading-8 text-white">
              Bringing high-quality care to you.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
              Personalised mobile physiotherapy supporting your mobility,
              strength, confidence and independence in your home and community.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#appointment"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-white px-7 py-4 font-black !text-[#2459B8] shadow-[0_18px_40px_rgba(7,21,47,0.2)] transition duration-300 hover:-translate-y-1"
              >
                Request an Appointment

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2459B8] !text-white transition group-hover:rotate-45">
                  ↗
                </span>
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold !text-white backdrop-blur transition hover:bg-white hover:!text-[#2459B8]"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-14 flex flex-wrap gap-3">
              {[
                "Mobile Care",
                "Perth Metro",
                "Peel Region",
                "Personalised",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.08] px-5 py-2.5 text-sm font-bold text-white backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL COMPOSITION */}
          <div className="relative hidden min-h-[620px] lg:block">
            {/* Rear blue layer */}
            <div className="absolute right-[-20px] top-8 h-[510px] w-[88%] rotate-[4deg] rounded-[3.5rem] bg-[#3B82F6]" />

            {/* Main brand card */}
            <div className="absolute right-4 top-0 h-[520px] w-[90%] overflow-hidden rounded-[3.5rem] border border-white/20 bg-[#163E8C] shadow-[0_35px_80px_rgba(7,21,47,.3)]">
              {/* Decorative circles */}
              <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

              <div className="flex h-full flex-col justify-between p-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                    Central Therapy
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-black !text-[#2459B8]">
                    ↗
                  </span>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                    Our promise
                  </p>

                  <p className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white">
                    KEEPING
                    <br />
                    YOU
                    <br />
                    MOVING.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience card — pushed to RIGHT */}
            <div className="absolute bottom-5 right-0 z-30 w-[270px] rounded-[2rem] bg-white p-7 text-[#07152F] shadow-[0_25px_60px_rgba(7,21,47,.25)]">
              <div className="flex items-end gap-2">
                <span className="text-6xl font-black leading-none tracking-[-0.06em] text-[#2459B8]">
                  16+
                </span>

                <span className="pb-1 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Years
                </span>
              </div>

              <p className="mt-4 text-sm font-bold text-[#07152F]">
                Experienced physiotherapy care
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Supporting people across a range of rehabilitation settings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-14 rounded-t-[100%] bg-[#E8F1FC]" />
    </section>
  );
}