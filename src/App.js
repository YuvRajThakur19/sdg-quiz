import React, { useState } from "react";
import Home from "./components/Home";
import Sdg from "./components/Sdg";
import InfoPage from "./components/InfoPage";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [score, setScore] = useState(0);

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setPage("result");
  };

  return (
    <div className="app">
      {page === "home" && <Home onStart={() => setPage("sdg")} />}
      {page === "sdg" && <Sdg onNext={() => setPage("info")} />}
      {page === "info" && <InfoPage onNext={() => setPage("quiz")} />}
      {page === "quiz" && <Quiz onComplete={handleQuizComplete} />}
      {page === "result" && <Result score={score} />}
    </div>
  );
}

export default App;
