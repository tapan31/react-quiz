export default function StartScreen({
  username,
  numQuestions,
  dispatch,
  highscore,
  difficulty,
}) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      {/* <h3>Highscore: {highscore}</h3> */}
      <form
        className="flex-container"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "start" });
        }}
      >
        <div className="user">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            placeholder="John Doe"
            required
            autoComplete="off"
            value={username}
            onChange={(e) =>
              dispatch({ type: "setUsername", payload: e.target.value })
            }
          />
        </div>
        <div className="num-questions">
          <label htmlFor="numQuestions">Number of Questions</label>
          <input
            id="num-questions"
            value={numQuestions}
            onChange={(e) => {
              if (!isNaN(+e.target.value))
                dispatch({ type: "setNumQuestions", payload: +e.target.value });
            }}
            autoComplete="off"
          />
        </div>
        <div className="choose-difficulty">
          <label htmlFor="">Difficulty Level</label>
          <select
            value={difficulty}
            onChange={(e) =>
              dispatch({ type: "setDifficulty", payload: e.target.value })
            }
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="all">All</option>
          </select>
        </div>

        <button className="btn btn-start" type="submit">
          Start Quiz
        </button>
      </form>
    </div>
  );
}
