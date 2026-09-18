import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="blue-grid relative overflow-hidden py-28 text-white"
    >
      {/* Large decorative CT */}
      <div className="pointer-events-none absolute right-[-8rem] top-[-5rem] select-none text-[25rem] font-black leading-none text-white/[0.025]">
        CT
      </div>

      {/* Background glow */}
      <div className="absolute -left-40 bottom-[-100px] h-[550px] w-[550px] rounded-full bg-[#3B82F6]/20 blur-[120px]" />

      <div className="container relative z-10 grid items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-blue-200" />

            <p className="eyebrow text-blue-200">
              03 / Meet Simon
            </p>
          </div>

          <h2 className="display-title mt-7 max-w-2xl text-5xl font-black sm:text-6xl lg:text-7xl">
            CARE SHOULD
            <br />
            FIT YOUR LIFE,
            <span className="mt-2 block text-blue-200">
              NOT THE OTHER WAY AROUND.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">
            Central Therapy was built around the belief that high-quality
            physiotherapy should be accessible regardless of a person&apos;s
            circumstances.
          </p>

          <p className="mt-5 max-w-xl leading-8 text-blue-100">
            Founder and Lead Physiotherapist Simon Grech brings more than 16
            years of experience across multiple clinical settings, including
            neurological rehabilitation, rehabilitation of older adults and
            post-surgical recovery.
          </p>

          <Link
            href="#appointment"
            className="group mt-10 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 font-black !text-[#2459B8] shadow-xl transition duration-300 hover:-translate-y-1"
          >
            Request an Appointment

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2459B8] !text-white transition group-hover:rotate-45">
              ↗
            </span>
          </Link>
        </div>

        {/* RIGHT SIMON COMPOSITION */}
        <div className="relative min-h-[620px]">
          {/* Rear accent layer */}
          <div className="absolute right-[-18px] top-8 h-[510px] w-[84%] rotate-[4deg] rounded-[3.5rem] bg-[#3B82F6]" />

          {/* Main Simon card */}
          <div className="absolute right-4 top-0 h-[530px] w-[88%] overflow-hidden rounded-[3.5rem] border border-white/20 bg-[#163E8C] shadow-[0_35px_80px_rgba(7,21,47,.3)]">
            {/* Decorative geometry */}
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
                  Founder & Lead Physiotherapist
                </p>

                <h3 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] text-white">
                  SIMON
                  <br />
                  GRECH
                </h3>

                <p className="mt-6 max-w-xs leading-7 text-blue-100">
                  Experienced, personalised physiotherapy focused on helping
                  people keep moving.
                </p>
              </div>
            </div>
          </div>

          {/* Experience card — pushed to RIGHT */}
          <div className="absolute bottom-0 right-0 z-30 w-[270px] rounded-[2rem] bg-white p-7 text-[#07152F] shadow-[0_25px_60px_rgba(7,21,47,.28)]">
            <div className="flex items-end gap-2">
              <span className="text-6xl font-black leading-none tracking-[-0.06em] text-[#2459B8]">
                16+
              </span>

              <span className="pb-1 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                Years
              </span>
            </div>

            <p className="mt-4 text-sm font-bold text-[#07152F]">
              Physiotherapy experience
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Experience across a range of clinical and rehabilitation
              settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}