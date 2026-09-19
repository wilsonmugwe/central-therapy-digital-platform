const steps = [
  [
    "01",
    "Reach out",
    "Tell us what kind of physiotherapy support you are looking for.",
  ],
  [
    "02",
    "Assessment",
    "We understand your needs, environment and individual goals.",
  ],
  [
    "03",
    "Move forward",
    "Begin personalised physiotherapy designed around what matters to you.",
  ],
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="light-grid py-14 sm:py-20 lg:py-28"
    >
      <div className="container">
        {/* Section heading */}
        <div className="text-center">
          <p className="eyebrow text-[#2459B8]">
            04 / Your journey
          </p>

          <h2 className="display-title mx-auto mt-4 max-w-4xl text-[2.6rem] font-black text-[#07152F] sm:mt-5 sm:text-6xl lg:text-7xl">
            SIMPLE FROM
            <span className="text-[#2459B8]"> DAY ONE.</span>
          </h2>
        </div>

        {/* Journey steps */}
        <div className="relative mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:mt-20 md:grid-cols-3 md:gap-6">
          {/* Desktop connecting line */}
          <div className="absolute left-[15%] right-[15%] top-10 hidden h-[2px] bg-[#2459B8]/20 md:block" />

          {steps.map(([number, title, description], index) => (
            <article
              key={number}
              className="relative flex items-start gap-4 text-left sm:gap-5 md:block md:text-center"
            >
              {/* Mobile vertical connector */}
              {index < steps.length - 1 && (
                <div className="absolute bottom-[-2rem] left-[25px] top-[52px] w-[2px] bg-[#2459B8]/15 sm:bottom-[-2.5rem] sm:left-[31px] sm:top-[64px] md:hidden" />
              )}

              {/* Step number */}
              <span className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#2459B8] text-xs font-black text-white shadow-lg sm:h-16 sm:w-16 sm:text-sm md:mx-auto md:h-20 md:w-20 md:text-lg md:shadow-xl">
                {number}
              </span>

              {/* Step content */}
              <div className="pt-0.5 sm:pt-1 md:pt-0">
                <h3 className="text-lg font-black text-[#07152F] sm:text-xl md:mt-8 md:text-2xl">
                  {title}
                </h3>

                <p className="mt-1.5 max-w-xs text-sm leading-6 text-slate-600 sm:mt-2 sm:text-base sm:leading-7 md:mx-auto md:mt-4">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}