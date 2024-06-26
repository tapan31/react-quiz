import { useQuiz } from "../contexts/QuizContext";

export default function PreviousButton() {
  const { index, dispatch } = useQuiz();

  if (index > 0)
    return (
      <button
        className="btn btn-ui-left"
        onClick={() => dispatch({ type: "previousQuestion" })}
      >
        Back
      </button>
    );
}
