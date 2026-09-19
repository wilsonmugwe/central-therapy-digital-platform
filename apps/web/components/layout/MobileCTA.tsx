export default function MobileCTA() {
  return (
    <div className="fixed bottom-2.5 left-2.5 right-2.5 z-50 rounded-[1.25rem] border border-white/20 bg-[#07152F]/95 p-1.5 shadow-2xl backdrop-blur-xl sm:bottom-3 sm:left-3 sm:right-3 sm:rounded-[1.4rem] sm:p-2 lg:hidden">
      <div className="grid grid-cols-[.65fr_1.35fr] gap-1.5 sm:gap-2">
        {/* CALL */}
        <a
          href="tel:0450292149"
          className="flex min-h-[44px] items-center justify-center rounded-[0.9rem] bg-white/10 px-3 py-2.5 text-sm font-black !text-white transition hover:bg-white/20 sm:rounded-[1rem] sm:px-4 sm:py-3.5"
          aria-label="Call Central Therapy"
        >
          Call
        </a>

        {/* APPOINTMENT */}
        <a
          href="#appointment"
          className="flex min-h-[44px] items-center justify-center gap-2 rounded-[0.9rem] bg-[#2459B8] px-3 py-2.5 text-sm font-black !text-white transition hover:bg-[#3B82F6] sm:rounded-[1rem] sm:px-4 sm:py-3.5"
        >
          <span>Request appointment</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}