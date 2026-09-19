const faqs = [
  [
    "Where does Central Therapy provide physiotherapy?",
    "Central Therapy provides mobile physiotherapy across the Perth metropolitan area, including the Peel Region.",
  ],
  [
    "Do you provide NDIS physiotherapy?",
    "Central Therapy works with NDIS participants and provides personalised physiotherapy focused on individual goals, mobility and independence.",
  ],
  [
    "Do you provide Home Care Package services?",
    "Mobile physiotherapy can support eligible Home Care Package clients in maintaining mobility, function and independence.",
  ],
  [
    "Do I need to visit a clinic?",
    "Central Therapy focuses on mobile physiotherapy, allowing appropriate services to be delivered in your home or community.",
  ],
  [
    "How do I request an appointment?",
    "Send an appointment request and the Central Therapy team can contact you to discuss the next step.",
  ],
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#07152F] py-14 text-white sm:py-20 lg:py-28"
    >
      <div className="container grid gap-8 sm:gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        {/* FAQ INTRO */}
        <div>
          <p className="eyebrow text-blue-300">
            06 / FAQ
          </p>

          <h2 className="display-title mt-4 text-[2.7rem] font-black sm:mt-6 sm:text-6xl">
            GOT
            <span className="block text-blue-300">
              QUESTIONS?
            </span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400 sm:mt-7 sm:text-base sm:leading-7">
            A few quick answers before you get started with Central Therapy.
          </p>
        </div>

        {/* FAQ ITEMS */}
        <div className="border-t border-white/10">
          {faqs.map(([question, answer], index) => (
            <details
              key={question}
              className="group border-b border-white/10 py-4 sm:py-7"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 sm:gap-5">
                {/* Number */}
                <span className="text-[0.65rem] font-black text-blue-400 sm:text-xs">
                  0{index + 1}
                </span>

                {/* Question */}
                <span className="flex-1 text-sm font-black leading-5 text-white sm:text-xl sm:leading-normal">
                  {question}
                </span>

                {/* Open / close */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-base text-white transition group-open:rotate-45 sm:h-10 sm:w-10 sm:text-xl">
                  +
                </span>
              </summary>

              {/* Answer */}
              <p className="max-w-2xl pl-7 pr-2 pt-3 text-sm leading-6 text-slate-400 sm:pl-10 sm:pt-5 sm:text-base sm:leading-7">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}