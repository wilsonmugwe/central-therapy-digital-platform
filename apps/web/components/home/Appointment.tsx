export default function Appointment() {
  return (
    <section id="appointment" className="dot-grid py-28">
      <div className="container">
        <div className="overflow-hidden rounded-[3rem] bg-[#2459B8] shadow-[0_35px_90px_rgba(36,89,184,.25)]">
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="relative p-9 text-white sm:p-14">
              <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#3B82F6] blur-[90px]" />

              <div className="relative">
                <p className="eyebrow text-blue-200">05 / Get started</p>

                <h2 className="display-title mt-7 text-5xl font-black sm:text-6xl">
                  READY
                  <br />
                  TO MOVE?
                </h2>

                <p className="mt-7 max-w-md text-lg leading-8 text-blue-100">
                  Send us an appointment request and the Central Therapy team
                  will contact you to discuss the next step.
                </p>

                <div className="mt-12 space-y-5">
                  {[
                    "Send your details",
                    "We contact you",
                    "Arrange the next step",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-black !text-[#2459B8]">
                        {index + 1}
                      </span>

                      <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#F8FBFF] p-8 sm:p-12 lg:p-14">
              <p className="eyebrow text-[#2459B8]">Request appointment</p>

              <h3 className="mt-4 text-3xl font-black tracking-[-.04em] text-[#07152F]">
                Start the conversation.
              </h3>

              <form className="mt-8 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-[#07152F] outline-none focus:border-[#2459B8] focus:ring-4 focus:ring-blue-100"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-[#07152F] outline-none focus:border-[#2459B8] focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-[#07152F] outline-none focus:border-[#2459B8] focus:ring-4 focus:ring-blue-100"
                />

                <select
                  required
                  defaultValue=""
                  className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-[#07152F] outline-none focus:border-[#2459B8]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Home-Based Therapy</option>
                  <option>Exercise Therapy</option>
                  <option>Surgical Rehabilitation</option>
                  <option>Neurorehabilitation</option>
                  <option>Pain Management</option>
                  <option>Hydrotherapy</option>
                  <option>Other / Not Sure</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Briefly tell us which service you're interested in."
                  className="resize-none rounded-2xl border border-blue-100 bg-white px-5 py-4 text-[#07152F] outline-none focus:border-[#2459B8]"
                />

                <p className="text-xs leading-5 text-slate-500">
                  Please do not include sensitive medical or health information.
                </p>

                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-between rounded-2xl bg-[#07152F] px-6 py-4 font-black !text-white shadow-xl transition hover:bg-[#2459B8]"
                >
                  <span>Send request</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white !text-[#07152F]">
                    ↗
                  </span>
                </button>

                <p className="text-center text-xs text-slate-500">
                  An enquiry does not confirm an appointment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}