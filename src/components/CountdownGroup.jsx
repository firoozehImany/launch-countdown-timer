import SingleCardContainer from './SingleCardContainer';

export default function CountdownGroup() {
  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center">
      <SingleCardContainer count="08" label="days" />
      <SingleCardContainer count="23" label="hours" />
      <SingleCardContainer count="55" label="minutes" />
      <SingleCardContainer count="41" label="seconds" />
    </div>
  );
}