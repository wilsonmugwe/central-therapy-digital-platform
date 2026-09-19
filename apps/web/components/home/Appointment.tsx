export default function Appointment() {
  return (
    <section
      id="appointment"
      className="dot-grid py-14 sm:py-20 lg:py-28"
    >
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] bg-[#2459B8] shadow-[0_35px_90px_rgba(36,89,184,.25)] sm:rounded-[3rem]">
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            {/* LEFT INTRO */}
            <div className="relative p-6 text-white sm:p-14">
              {/* Background glow */}
              <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#3B82F6] blur-[90px]" />

              <div className="relative">
                <p className="eyebrow text-blue-200">
                  05 / Get started
                </p>

                <h2 className="display-title mt-4 text-[2.7rem] font-black sm:mt-7 sm:text-6xl">
                  READY
                  <br />
                  TO MOVE?
                </h2>

                <p className="mt-4 max-w-md text-sm leading-6 text-blue-100 sm:mt-7 sm:text-lg sm:leading-8">
                  Send us an appointment request and the Central Therapy team
                  will contact you to discuss the next step.
                </p>

                {/* Process */}
                <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-12 sm:block sm:space-y-5">
                  {[
                    "Send your details",
                    "We contact you",
                    "Arrange the next step",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-4 sm:text-left"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black !text-[#2459B8] sm:h-10 sm:w-10 sm:text-base">
                        {index + 1}
                      </span>

                      <span className="text-xs font-bold leading-4 sm:text-base sm:leading-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* APPOINTMENT FORM */}
            <div className="bg-[#F8FBFF] p-5 sm:p-12 lg:p-14">
              <p className="eyebrow text-[#2459B8]">
                Request appointment
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-[-.04em] text-[#07152F] sm:mt-4 sm:text-3xl">
                Start the conversation.
              </h3>

              <form className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
                {/* Name and phone */}
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    className="rounded-xl border border-blue-100 bg-white px-4 py-3.5 text-sm text-[#07152F] outline-none focus:border-[#2459B8] focus:ring-4 focus:ring-blue-100 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    className="rounded-xl border border-blue-100 bg-white px-4 py-3.5 text-sm text-[#07152F] outline-none focus:border-[#2459B8] focus:ring-4 focus:ring-blue-100 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="rounded-xl border border-blue-100 bg-white px-4 py-3.5 text-sm text-[#07152F] outline-none focus:border-[#2459B8] focus:ring-4 focus:ring-blue-100 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                />

                {/* Service */}
                <select
                  required
                  defaultValue=""
                  className="rounded-xl border border-blue-100 bg-white px-4 py-3.5 text-sm text-[#07152F] outline-none focus:border-[#2459B8] sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
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

                {/* Message */}
                <textarea
                  rows={3}
                  placeholder="Briefly tell us which service you're interested in."
                  className="resize-none rounded-xl border border-blue-100 bg-white px-4 py-3.5 text-sm text-[#07152F] outline-none focus:border-[#2459B8] sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                />

                {/* Privacy notice */}
                <p className="text-[0.7rem] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                  Please do not include sensitive medical or health information.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-1 flex w-full items-center justify-between rounded-xl bg-[#07152F] px-5 py-3.5 text-sm font-black !text-white shadow-xl transition hover:bg-[#2459B8] sm:mt-2 sm:rounded-2xl sm:px-6 sm:py-4 sm:text-base"
                >
                  <span>Send request</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm !text-[#07152F] sm:h-8 sm:w-8 sm:text-base">
                    ↗
                  </span>
                </button>

                <p className="text-center text-[0.7rem] text-slate-500 sm:text-xs">
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