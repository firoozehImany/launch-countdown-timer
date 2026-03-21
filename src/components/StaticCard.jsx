export default function StaticCard({ number }) {
  return (
    <div className="relative w-30 h-32 md:w-[148px] md:h-35">
      <div className="absolute inset-0 top-2 bg-shadow rounded-lg translate-y-2.5"></div>
      <div className="relative flex flex-col w-full h-full text-3xl md:text-[79px] font-red-hat font-bold text-counter -tracking-[1px]">
        <div className="relative h-1/2 bg-card-bot rounded-t-lg border-b border-black/20 overflow-hidden">
          <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
            {number}
          </span>
        </div>
        <div className="relative h-1/2 bg-card-bot rounded-b-lg overflow-hidden shadow-inner">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            {number}
          </span>
        </div>
        <div className="absolute top-1/2 left-1 -translate-x-1/2 -translate-y-1/2 w-2 h-3 bg-Indentation rounded-r-full z-10"></div>
        <div className="absolute top-1/2 right-1 translate-x-1/2 -translate-y-1/2 w-2 h-3 bg-Indentation rounded-l-full z-10"></div>
      </div>
    </div>
  );
}