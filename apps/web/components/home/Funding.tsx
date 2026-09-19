const options = [
  ["01", "NDIS", "Participants"],
  ["02", "Home Care Packages", "Older Australians"],
  ["03", "ICWA", "Motor vehicle injuries"],
  ["04", "DVA", "Veterans"],
  ["05", "Private Funding", "Private clients"],
  ["06", "Medicare", "CDM"],
];

export default function Funding() {
  return (
    <section
      id="funding"
      className="dot-grid relative overflow-hidden py-14 sm:py-20 lg:py-28"
    >
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] bg-[#07152F] shadow-[0_35px_90px_rgba(7,21,47,.2)] sm:rounded-[3rem]">
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            {/* FUNDING INTRO */}
            <div className="relative overflow-hidden bg-[#2459B8] p-6 text-white sm:p-14">
              {/* Decorative background */}
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">
                <p className="eyebrow text-blue-200">
                  02 / Funding
                </p>

                <h2 className="display-title mt-4 text-[2.6rem] font-black sm:mt-7 sm:text-6xl">
                  ACCESS
                  <br />
                  CARE
                  <span className="block text-blue-200">
                    YOUR WAY.
                  </span>
                </h2>

                <p className="mt-4 max-w-md text-sm leading-6 text-blue-100 sm:mt-7 sm:text-lg sm:leading-8">
                  We work with a range of funding arrangements to help eligible
                  clients access physiotherapy.
                </p>

                <a
                  href="#appointment"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-black !text-[#2459B8] shadow-xl sm:mt-10 sm:gap-4 sm:px-7 sm:py-4 sm:text-base"
                >
                  Discuss your options
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* FUNDING OPTIONS */}
            <div className="p-5 sm:p-12">
              {options.map(([number, title, label]) => (
                <div
                  key={number}
                  className="group flex items-center gap-3 border-b border-white/10 py-4 first:pt-0 last:border-none last:pb-0 sm:gap-5 sm:py-6 sm:last:pb-6"
                >
                  <span className="text-[0.65rem] font-black tracking-[.18em] text-blue-400 sm:text-xs">
                    {number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-black !text-white sm:text-2xl">
                      {title}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-400 sm:mt-1 sm:text-sm">
                      {label}
                    </p>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm !text-white transition group-hover:bg-white group-hover:!text-[#2459B8] sm:h-11 sm:w-11 sm:text-base">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}