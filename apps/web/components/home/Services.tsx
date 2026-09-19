const services = [
  [
    "01",
    "Home-Based Therapy",
    "Physiotherapy delivered in your home, focused on mobility and everyday function.",
  ],
  [
    "02",
    "Exercise Therapy",
    "Personalised exercise programs built around your abilities and goals.",
  ],
  [
    "03",
    "Surgical Rehabilitation",
    "Individual rehabilitation supporting recovery following surgery.",
  ],
  [
    "04",
    "Neurorehabilitation",
    "Physiotherapy supporting people living with neurological conditions.",
  ],
  [
    "05",
    "Manual Handling",
    "Practical education for safer movement, transfers and support.",
  ],
  [
    "06",
    "Equipment Support",
    "Guidance around mobility aids and rehabilitation equipment.",
  ],
  [
    "07",
    "Pain Management",
    "Physiotherapy supporting movement, function and quality of life.",
  ],
  [
    "08",
    "Hydrotherapy",
    "Low-impact water-based therapy supporting mobility and strength.",
  ],
  [
    "09",
    "Balance Rehabilitation",
    "Support designed to improve balance and confidence.",
  ],
  [
    "10",
    "Falls Prevention",
    "Strategies focused on reducing falls risk and maintaining independence.",
  ],
];

export default function Services() {
  return (
    <section
      id="services"
      className="light-grid relative overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        {/* Section introduction */}
        <div className="flex flex-col justify-between gap-5 md:gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-[#2459B8]">
              01 / What we do
            </p>

            <h2 className="display-title mt-4 max-w-3xl text-[2.5rem] font-black text-[#07152F] sm:mt-5 sm:text-6xl lg:text-7xl">
              PHYSIOTHERAPY
              <span className="block text-[#2459B8]">
                FOR REAL LIFE.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Individual care designed around your environment, your goals and
            the way you live.
          </p>
        </div>

        {/* Services */}
        <div className="mt-9 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([number, title, description], index) => {
            const blue = index === 0 || index === 6;
            const navy = index === 3;

            return (
              <article
                key={number}
                className={`group flex min-h-[210px] flex-col rounded-[1.4rem] p-4 transition duration-300 hover:-translate-y-2 sm:min-h-[240px] sm:rounded-[2rem] sm:p-6 md:min-h-[290px] md:p-7 ${
                  blue
                    ? "bg-[#2459B8] text-white shadow-xl"
                    : navy
                    ? "bg-[#07152F] text-white shadow-xl"
                    : "border border-blue-100 bg-[#F8FBFF] text-[#07152F] shadow-sm"
                } ${
                  index === 0 || index === 7 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[0.65rem] font-black tracking-[.18em] sm:text-xs ${
                      blue || navy
                        ? "text-blue-200"
                        : "text-[#2459B8]"
                    }`}
                  >
                    {number}
                  </span>

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm sm:h-10 sm:w-10 sm:text-base ${
                      blue || navy
                        ? "bg-white !text-[#2459B8]"
                        : "bg-[#E8F1FC] !text-[#2459B8]"
                    }`}
                  >
                    ↗
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-auto pt-7 sm:pt-10 md:pt-14">
                  <h3 className="text-base font-black leading-tight tracking-[-.03em] sm:text-xl md:text-2xl">
                    {title}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-5 sm:mt-3 sm:text-sm sm:leading-6 md:mt-4 ${
                      blue || navy
                        ? "text-blue-100"
                        : "text-slate-600"
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}