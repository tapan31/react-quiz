export default function QuizHistory({ quizHistory, dispatch, setQuizHistory }) {
  return (
    <section className="quiz-history">
      <div className="quiz-history-header">
        <h2 style={{ margin: "0" }}>Quiz History ({quizHistory.length})</h2>
        <button
          className="btn btn-quiz-history"
          onClick={() => {
            dispatch({ type: "clearHistory", payload: { setQuizHistory } });
          }}
        >
          Clear All
        </button>
      </div>
      <div className="quiz-history-container">
        {quizHistory.map((user, index) => {
          return <QuizCard key={user.id} user={user} />;
        })}
      </div>
    </section>
  );
}

function QuizCard({ user }) {
  const { name, numOfQuestions, score, date } = user;

  return (
    <div className="quiz-history-card">
      <h4 className="username">{name}</h4>
      <p>
        Num of Questions: <span className="bold ms">{numOfQuestions}</span>
      </p>
      <p>
        Score: <span className="bold ms">{score}</span>
      </p>

      <p className="date">{date}</p>
    </div>
  );
}
