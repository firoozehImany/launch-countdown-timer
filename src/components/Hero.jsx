import CountdownContainer from "./CountdownContainer";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <div className="flex-1 flex flex-col items-center text-center min-h-[460px]">
      <ThemeToggle />
      <h1 className="text-center mt-[138px] mb-[52px] md:mt-[132px] md:mb-[104px] px-4 font-light uppercase text-typo tracking-[0.34em] md:tracking-[0.39em] text-[18px] md:text-[21px]">
        We're launching soon
      </h1>
      <CountdownContainer />
    </div>
  );
}
