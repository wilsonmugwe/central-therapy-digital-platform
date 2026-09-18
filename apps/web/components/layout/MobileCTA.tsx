export default function MobileCTA() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 rounded-[1.4rem] border border-white/20 bg-[#07152F]/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-[.65fr_1.35fr] gap-2">
        <a
          href="tel:0450292149"
          className="flex items-center justify-center rounded-[1rem] bg-white/10 px-4 py-3.5 text-sm font-black !text-white"
        >
          Call
        </a>

        <a
          href="#appointment"
          className="flex items-center justify-center gap-2 rounded-[1rem] bg-[#2459B8] px-4 py-3.5 text-sm font-black !text-white"
        >
          Request appointment ↗
        </a>
      </div>
    </div>
  );
}