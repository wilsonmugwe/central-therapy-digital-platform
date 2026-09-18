const steps = [
  ["01", "Reach out", "Tell us what kind of physiotherapy support you are looking for."],
  ["02", "Assessment", "We understand your needs, environment and individual goals."],
  ["03", "Move forward", "Begin personalised physiotherapy designed around what matters to you."],
];

export default function HowItWorks() {
  return (
    <section id="process" className="light-grid py-28">
      <div className="container">
        <div className="text-center">
          <p className="eyebrow text-[#2459B8]">04 / Your journey</p>

          <h2 className="display-title mx-auto mt-5 max-w-4xl text-5xl font-black text-[#07152F] sm:text-6xl lg:text-7xl">
            SIMPLE FROM
            <span className="text-[#2459B8]"> DAY ONE.</span>
          </h2>
        </div>

        <div className="relative mt-20 grid gap-6 md:grid-cols-3">
          <div className="absolute left-[15%] right-[15%] top-10 hidden h-[2px] bg-[#2459B8]/20 md:block" />

          {steps.map(([number, title, description]) => (
            <article key={number} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2459B8] text-lg font-black text-white shadow-xl">
                {number}
              </span>

              <h3 className="mt-8 text-2xl font-black text-[#07152F]">
                {title}
              </h3>

              <p className="mx-auto mt-4 max-w-xs leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}