import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { dispatch, filteredQuestions, answers, index } = useQuiz();
  const question = filteredQuestions[index];
  const answer = answers[index] ?? null;

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
