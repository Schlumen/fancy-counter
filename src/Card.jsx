import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";

export default function Card() {
  return (
    <div>
      <Title />
      <Count number={6} />
      <ResetButton />
      <CountButtons />
    </div>
  );
}
