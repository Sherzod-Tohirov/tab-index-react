import "./list.css";

export const List = ({ opacity, setContent, contentMap }) => {
  return (
    <>
      <ul className="flex items-center gap-4 my-6 mb-4">
        <li>
          <button
            onClick={() => setContent(contentMap.positive)}
            className={`font-bold text-sm opacity-${opacity.pos} transition`}
          >
            POSITIVE
          </button>
        </li>
        <li>
          <button
            onClick={() => setContent(contentMap.negative)}
            className={`font-bold text-sm opacity-${opacity.neg} transition`}
          >
            NEGATIVE
          </button>
        </li>
        <li>
          <button
            onClick={() => setContent(contentMap.neutral)}
            className={`font-bold text-sm opacity-${opacity.neut} transition`}
          >
            NEUTRAL
          </button>
        </li>
      </ul>
    </>
  );
};
