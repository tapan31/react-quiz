import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answers } = useQuiz();
  const answer = answers[index] ?? null;

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
