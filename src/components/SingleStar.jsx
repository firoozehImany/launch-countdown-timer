const STAR_SIZES = {
  sm: "w-0.5 h-1",   // 2px
  md: "w-1 h-1",     // 4px
  lg: "w-1.5 h-1.5", // 6px
};

export default function SingleStar({ top, left, size = "md", delay = "0s" }) {
  return (
    <div
      className={`absolute bg-stella animate-twinkle ${STAR_SIZES[size]}`}
      style={{
        top,
        left,
        animationDelay: delay,
        clipPath: "circle(50% at 50% 50%)",
      }}
    />
  );
}