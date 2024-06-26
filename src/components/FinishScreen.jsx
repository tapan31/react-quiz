import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, highscore, maxPossiblePoints, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎖️";
  else if (percentage >= 80 && percentage < 100) emoji = "🎉";
  else if (percentage >= 50 && percentage < 80) emoji = "☺️";
  else if (percentage > 0 && percentage < 50) emoji = "🙃";
  else emoji = "🤦‍♂️";

  return (
    <div className="result-container">
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui btn-restart"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}
