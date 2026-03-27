import SingleCard from './SingleCard';

export default function SingleCardContainer({ count, label }) {
  return (
    <div className="flex flex-col top-1/3 items-center gap-3 md:gap-6">
      <SingleCard number={count} />
      <span className="text-[8px] md:text-[14px] tracking-[0.3em] md:tracking-[6px] uppercase text-stella font-bold">
        {label}
      </span>
    </div>
  );
}