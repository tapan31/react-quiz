export default function Progress({
  index,
  numQuestions,
  maxPossiblePoints,
  points,
  answer,
}) {
  return (
    <>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints} points
        </p>
      </header>
    </>
  );
}
