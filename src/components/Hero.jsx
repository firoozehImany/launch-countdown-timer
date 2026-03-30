import CountdownContainer from "./CountdownContainer";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <div className="flex-1 flex flex-col items-center text-center">
      <ThemeToggle />
      
      <div className="flex-1 flex flex-col items-center justify-center gap-12 md:gap-24">
        <h1 className="px-4 font-light uppercase text-typo tracking-[0.35em] md:tracking-[0.4em] text-lg md:text-xl leading-relaxed">
          We're launching soon
        </h1>
        
        <CountdownContainer />
      </div>
    </div>
  );
}
