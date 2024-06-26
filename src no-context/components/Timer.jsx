import { useEffect } from "react";

export default function Timer({ secondsRemaining, dispatch }) {
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
