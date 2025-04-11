import React from "react";

function Result({ score }) {
  return (
    <div>
      <h2>Your Quiz Result</h2>
      <p>Total score: {score}</p>
      <p>
        Thank you for taking the quiz! Keep working toward the Sustainable
        Development Goals. 🌍
      </p>
    </div>
  );
}

export default Result;
