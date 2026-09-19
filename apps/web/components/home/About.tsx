import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="blue-grid relative overflow-hidden py-14 text-white sm:py-20 lg:py-28"
    >
      {/* Large decorative CT */}
      <div className="pointer-events-none absolute right-[-8rem] top-[-5rem] hidden select-none text-[25rem] font-black leading-none text-white/[0.025] lg:block">
        CT
      </div>

      {/* Background glow */}
      <div className="absolute -left-40 bottom-[-100px] h-[550px] w-[550px] rounded-full bg-[#3B82F6]/20 blur-[120px]" />

      <div className="container relative z-10 grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-[2px] w-8 bg-blue-200 sm:w-10" />

            <p className="eyebrow text-blue-200">
              03 / Meet Simon
            </p>
          </div>

          <h2 className="display-title mt-5 max-w-2xl text-[2.55rem] font-black sm:mt-7 sm:text-6xl lg:text-7xl">
            CARE SHOULD
            <br />
            FIT YOUR LIFE,
            <span className="mt-1 block text-blue-200 sm:mt-2">
              NOT THE OTHER WAY AROUND.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:mt-8 sm:text-lg sm:leading-8">
            Central Therapy was built around the belief that high-quality
            physiotherapy should be accessible regardless of a person&apos;s
            circumstances.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:mt-5 sm:text-base sm:leading-8">
            Founder and Lead Physiotherapist Simon Grech brings more than 16
            years of experience across multiple clinical settings, including
            neurological rehabilitation, rehabilitation of older adults and
            post-surgical recovery.
          </p>

          <Link
            href="#appointment"
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-black !text-[#2459B8] shadow-xl transition duration-300 hover:-translate-y-1 sm:mt-10 sm:gap-4 sm:px-7 sm:py-4 sm:text-base"
          >
            Request an Appointment

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2459B8] !text-white transition group-hover:rotate-45 sm:h-8 sm:w-8">
              ↗
            </span>
          </Link>
        </div>

        {/* RIGHT SIMON COMPOSITION */}
        <div className="relative min-h-[410px] sm:min-h-[500px] lg:min-h-[620px]">
          {/* Rear accent layer */}
          <div className="absolute right-[-8px] top-5 h-[340px] w-[91%] rotate-[3deg] rounded-[2rem] bg-[#3B82F6] sm:right-[-12px] sm:top-7 sm:h-[420px] sm:w-[88%] sm:rounded-[2.75rem] lg:right-[-18px] lg:top-8 lg:h-[510px] lg:w-[84%] lg:rotate-[4deg] lg:rounded-[3.5rem]" />

          {/* Main Simon card */}
          <div className="absolute right-1 top-0 h-[350px] w-[94%] overflow-hidden rounded-[2rem] border border-white/20 bg-[#163E8C] shadow-[0_25px_60px_rgba(7,21,47,.3)] sm:right-3 sm:h-[440px] sm:w-[91%] sm:rounded-[2.75rem] lg:right-4 lg:h-[530px] lg:w-[88%] lg:rounded-[3.5rem] lg:shadow-[0_35px_80px_rgba(7,21,47,.3)]">
            {/* Decorative geometry */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10 sm:-right-24 sm:-top-24 sm:h-64 sm:w-64 lg:-right-28 lg:-top-28 lg:h-80 lg:w-80" />

            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10 sm:-right-10 sm:-top-10 sm:h-44 sm:w-44 lg:h-52 lg:w-52" />

            <div className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
              {/* Card header */}
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.16em] text-white sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
                  Central Therapy
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black !text-[#2459B8] sm:h-11 sm:w-11 sm:text-lg lg:h-12 lg:w-12 lg:text-xl">
                  ↗
                </span>
              </div>

              {/* Card content */}
              <div>
                <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-blue-200 sm:text-xs sm:tracking-[0.2em]">
                  Founder & Lead Physiotherapist
                </p>

                <h3 className="mt-3 text-[2.8rem] font-black leading-[0.9] tracking-[-0.06em] text-white sm:mt-4 sm:text-5xl lg:mt-5 lg:text-6xl">
                  SIMON
                  <br />
                  GRECH
                </h3>

                <p className="mt-3 max-w-[250px] text-xs leading-5 text-blue-100 sm:mt-5 sm:max-w-xs sm:text-sm sm:leading-6 lg:mt-6 lg:text-base lg:leading-7">
                  Experienced, personalised physiotherapy focused on helping
                  people keep moving.
                </p>
              </div>
            </div>
          </div>

          {/* Experience card */}
          <div className="absolute bottom-0 right-0 z-30 w-[190px] rounded-[1.5rem] bg-white p-4 text-[#07152F] shadow-[0_20px_45px_rgba(7,21,47,.28)] sm:w-[230px] sm:rounded-[1.75rem] sm:p-5 lg:w-[270px] lg:rounded-[2rem] lg:p-7 lg:shadow-[0_25px_60px_rgba(7,21,47,.28)]">
            <div className="flex items-end gap-2">
              <span className="text-4xl font-black leading-none tracking-[-0.06em] text-[#2459B8] sm:text-5xl lg:text-6xl">
                16+
              </span>

              <span className="pb-0.5 text-[0.6rem] font-black uppercase tracking-[0.1em] text-slate-500 sm:pb-1 sm:text-xs sm:tracking-[0.12em]">
                Years
              </span>
            </div>

            <p className="mt-2 text-xs font-bold text-[#07152F] sm:mt-3 sm:text-sm lg:mt-4">
              Physiotherapy experience
            </p>

            <p className="mt-1 text-[0.7rem] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
              Experience across a range of clinical and rehabilitation
              settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}