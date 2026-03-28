import { useFlip } from "../hooks/useFlip";

export default function SingleCard({ number }) {
  const { isFlipping, current, next } = useFlip(number);

  return (
    <div className="relative w-[70px] h-[67px] md:w-[148px] md:h-35 [perspective:1000px]">
      <div className="absolute inset-0 top-2 bg-shadow rounded-sm md:rounded-lg translate-y-2.5 opacity-80" />

      <div className="relative flex flex-col w-full h-full text-4xl md:text-[79px] font-red-hat font-bold text-core -tracking-[1px]">
        {[
          { val: next, top: true },
          { val: current, top: false },
        ].map((part, i) => (
          <div
            key={i}
            className={`relative h-1/2 overflow-hidden ${part.top ? "bg-card-top rounded-t-sm md:rounded-t-lg" : "bg-card-bot rounded-b-sm md:rounded-b-lg shadow-inner"}`}
          >
            <span
              className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${part.top ? "top-full opacity-80" : "top-0"}`}
            >
              {part.val}
            </span>
          </div>
        ))}

        <div
          className={`absolute inset-x-0 top-0 h-1/2 z-20 origin-bottom preserve-3d ${isFlipping ? "animate-flip" : ""}`}
        >
          <div className="absolute inset-0 bg-card-top rounded-t-sm md:rounded-t-lg overflow-hidden backface-hidden">
            <span className="absolute opacity-80 left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
              {current}
            </span>
          </div>
          <div className="absolute inset-0 bg-card-bot rounded-b-sm md:rounded-b-lg overflow-hidden rotate-x-180 backface-hidden">
            <span className="absolute left-1/2 bottom-full -translate-x-1/2 translate-y-1/2">
              {next}
            </span>
          </div>
        </div>

        <div className="absolute top-1/2 left-0.5 md:left-1 -translate-x-1/2 -translate-y-1/2 w-1 h-2 md:w-2 md:h-3 bg-shadow rounded-r-full z-30" />
        <div className="absolute top-1/2 right-0.5 md:right-1 translate-x-1/2 -translate-y-1/2 w-1 h-2 md:w-2 md:h-3 bg-shadow rounded-l-full z-30" />
      </div>
    </div>
  );
}
