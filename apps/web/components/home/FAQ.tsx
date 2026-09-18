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
    <section id="faq" className="bg-[#07152F] py-28 text-white">
      <div className="container grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-blue-300">06 / FAQ</p>

          <h2 className="display-title mt-6 text-5xl font-black sm:text-6xl">
            GOT
            <span className="block text-blue-300">QUESTIONS?</span>
          </h2>

          <p className="mt-7 max-w-sm leading-7 text-slate-400">
            A few quick answers before you get started with Central Therapy.
          </p>
        </div>

        <div className="border-t border-white/10">
          {faqs.map(([question, answer], index) => (
            <details
              key={question}
              className="group border-b border-white/10 py-7"
            >
              <summary className="flex cursor-pointer list-none items-center gap-5">
                <span className="text-xs font-black text-blue-400">
                  0{index + 1}
                </span>

                <span className="flex-1 text-lg font-black text-white sm:text-xl">
                  {question}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="max-w-2xl pl-10 pt-5 leading-7 text-slate-400">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}