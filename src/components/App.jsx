import { useEffect, useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import Header from "./Header";
import Main from "./MainContent";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import PreviousButton from "./PreviousButton";
import QuizHistory from "./QuizHistory";
import { useQuiz } from "../contexts/QuizContext";

/* const dummyHistory = [
  {
    name: "john",
    numOfQuestions: 5,
    score: 50,
    date: 0,
  },
]; */

/* const BASE_URL = "https://uninterested-jeans-mite.cyclic.app";

const options = {
  day: "2-digit",
  weekday: "short",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}; */

/* const initialState = {
  questions: [],
  filteredQuestions: [],
  // 'loading', 'error', 'ready', 'active', 'finished',
  status: "loading",
  username: "John Doe",
  numQuestions: 10,
  difficulty: "easy",
  index: 0,
  answers: [],
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  quizHistory: [],
}; */

// const SECS_PER_QUESTION = 30;

/* function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      let prevQuizData = null;
      try {
        prevQuizData = JSON.parse(localStorage.getItem("quizHistory"));
      } catch (error) {
        console.log("Error accessing local storage");
      }

      return {
        ...state,
        questions: action.payload.dataQuestions,
        highscore: action.payload.dataHighscore.highscore,
        quizHistory: prevQuizData ? prevQuizData : [],
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      let filteredArray;
      if (state.difficulty === "all") {
        filteredArray = state.questions
          .sort(() => Math.random() - 0.5)
          .slice(0, state.numQuestions);
      } else {
        filteredArray = state.questions
          .filter((question) => question.difficulty === state.difficulty)
          .slice(0, state.numQuestions);
      }

      return {
        ...state,
        status: "active",
        numQuestions:
          filteredArray.length < state.numQuestions
            ? filteredArray.length
            : state.numQuestions,
        filteredQuestions: filteredArray,
        secondsRemaining: filteredArray.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.filteredQuestions.at(state.index);
      return {
        ...state,
        answers: [...state.answers, action.payload],
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        // answer: null,
      };

    case "previousQuestion":
      return {
        ...state,
        index: state.index - 1,
      };

    case "finish":
      fetch(`${BASE_URL}/highscore`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        }),
      });

      const date = new Date();
      const userData = {
        id: uuidv4(),
        name: state.username,
        numOfQuestions: state.numQuestions,
        score: state.points,
        date: date.toLocaleString("en-US", options),
      };

      const newQuizHistory = [userData, ...state.quizHistory];
      try {
        localStorage.setItem("quizHistory", JSON.stringify(newQuizHistory));
      } catch (error) {
        console.log("Local Storage is Full", error.message);
      }

      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
        quizHistory: newQuizHistory,
      };
    case "restart":
      /* return {
        ...state,
        status: "active",
        answer: null,
        index: 0,
        points: 0,
        secondsRemaining: 10,
      }; 
      return {
        ...initialState,
        questions: state.questions,
        highscore: state.highscore,
        status: "ready",
        quizHistory: state.quizHistory,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    case "setNumQuestions":
      return {
        ...state,
        numQuestions: action.payload,
      };

    case "setDifficulty":
      return {
        ...state,
        difficulty: action.payload,
      };

    case "setUsername":
      return {
        ...state,
        username: action.payload,
      };
    case "clearHistory":
      localStorage.removeItem("quizHistory");

      return {
        ...state,
        quizHistory: [],
      };
    default:
      throw new Error(`Unknown Action - ${action.type}`);
  }
} */

function App() {
  /* const [
    {
      questions,
      filteredQuestions,
      status,
      index,
      answers,
      points,
      highscore,
      secondsRemaining,
      numQuestions,
      difficulty,
      username,
      quizHistory,
    },
    dispatch,
  ] = useReducer(reducer, initialState); */

  /*  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "dataReceived", payload: data });
        console.log(data);
      })
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []); */

  /* 
  The Promise.all method in JavaScript takes an array of promises and returns a new promise. This new promise fulfills with an array of the fulfilled values of the input promises, in the same order as the input promises. If any of the input promises is rejected, the entire Promise.all is rejected with the reason of the first rejected promise.
  */
  /* useEffect(() => {
    Promise.all([
      fetch(`${BASE_URL}/questions`),
      fetch(`${BASE_URL}/highscore`),
    ])
      .then(([resQuestions, resHighscore]) =>
        Promise.all([resQuestions.json(), resHighscore.json()])
      )
      .then(([dataQuestions, dataHighscore]) => {
        dispatch({
          type: "dataReceived",
          payload: { dataQuestions, dataHighscore },
        });
        // console.log(dataQuestions, dataHighscore);
      })
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []); */

  const { status, quizHistory } = useQuiz();

  /* const maxPossiblePoints =
    numQuestions > 0 &&
    filteredQuestions.reduce((acc, question) => acc + question.points, 0); */

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <>
            <StartScreen />
          </>
        )}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <PreviousButton />
              <NextButton />
              <Timer />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen />
            {quizHistory.length > 0 && <QuizHistory />}
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
