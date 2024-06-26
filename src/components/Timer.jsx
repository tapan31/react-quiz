import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: "tick" });
      //   console.log("Timer", secondsRemaining);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalID);
      //   console.log("Interval Cleared");
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
