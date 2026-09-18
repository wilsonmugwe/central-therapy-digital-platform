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
    <section id="funding" className="dot-grid relative overflow-hidden py-28">
      <div className="container">
        <div className="overflow-hidden rounded-[3rem] bg-[#07152F] shadow-[0_35px_90px_rgba(7,21,47,.2)]">
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="relative overflow-hidden bg-[#2459B8] p-9 text-white sm:p-14">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">
                <p className="eyebrow text-blue-200">02 / Funding</p>

                <h2 className="display-title mt-7 text-5xl font-black sm:text-6xl">
                  ACCESS
                  <br />
                  CARE
                  <span className="block text-blue-200">YOUR WAY.</span>
                </h2>

                <p className="mt-7 max-w-md text-lg leading-8 text-blue-100">
                  We work with a range of funding arrangements to help eligible
                  clients access physiotherapy.
                </p>

                <a
                  href="#appointment"
                  className="mt-10 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 font-black !text-[#2459B8] shadow-xl"
                >
                  Discuss your options
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              {options.map(([number, title, label]) => (
                <div
                  key={number}
                  className="group flex items-center gap-5 border-b border-white/10 py-6 first:pt-0 last:border-none"
                >
                  <span className="text-xs font-black tracking-[.18em] text-blue-400">
                    {number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-xl font-black !text-white sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{label}</p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 !text-white transition group-hover:bg-white group-hover:!text-[#2459B8]">
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