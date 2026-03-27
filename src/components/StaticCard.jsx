export default function StaticCard({ number }) {
  return (
    <div className="relative w-[70px] h-[67px] md:w-[148px] md:h-35">
      <div className="absolute inset-0 top-2 bg-shadow rounded-sm md:rounded-l-lg translate-y-2.5"></div>
      <div className="relative flex flex-col w-full h-full text-4xl md:text-[79px] font-red-hat font-bold text-core -tracking-[1px]">
        <div className="relative h-1/2 bg-card-top rounded-t-sm md:rounded-t-lg overflow-hidden">
          <span className="absolute opacity-75 left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
            {number}
          </span>
        </div>
        <div className="relative h-1/2 bg-card-bot rounded-b-sm md:rounded-b-lg overflow-hidden shadow-inner">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            {number}
          </span>
        </div>
        <div className="absolute top-1/2 left-0.5 md:left-1 -translate-x-1/2 -translate-y-1/2 w-1 h-2 md:w-2 md:h-3  bg-shadow rounded-r-full z-10"></div>
        <div className="absolute top-1/2 right-0.5 md:right-1 translate-x-1/2 -translate-y-1/2 w-1 h-2 md:w-2 md:h-3 bg-shadow rounded-l-full z-10"></div>
      </div>
    </div>
  );
}