import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { dispatch, index, numQuestions, quizHistory, answers } = useQuiz();
  const answer = answers[index] ?? null;

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "finish",
            payload: { quizHistory },
          })
        }
      >
        Finish
      </button>
    );
}
