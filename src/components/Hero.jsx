import CountdownContainer from "./CountdownContainer";

export default function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center text-center min-h-[500px]">
      <h1 className="text-center mt-[135px] mb-[104px] font-light uppercase text-typo tracking-[0.39em] text-xl md:text-[21px]">
        We're launching soon
      </h1>
      <CountdownContainer />
    </main>
  );
}
