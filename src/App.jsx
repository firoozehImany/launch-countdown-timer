import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Mountains from "./components/Mountains";
import CountdownGroup from "./components/CountdownGroup";

function App() {
  return (
    <>
      <h1 className="text-center mt-[135px] mb-[104px] font-light uppercase text-title tracking-[0.39em] text-xl md:text-[21px]">We're launching soon</h1>
      <CountdownGroup/>
      <Mountains />
    </>
  );
}

export default App;
