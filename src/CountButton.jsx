import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "plus") {
        const newCount = prev + 1;
        return newCount > 10 ? 10 : newCount;
      } else {
        const newCount = prev - 1;
        return newCount < 0 ? 0 : newCount;
      }
    });
  };

  return (
    <button onClick={handleClick} className="count-btn">
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
