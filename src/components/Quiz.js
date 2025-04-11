import React, { useState } from 'react';
//hi
const questions = [
  {
    question: " In the past 6 months, have you donated money, food, or clothes to someone in need?",
    options: ["Yes, regularly", "Occasionally", "Not yet, but I want to", "No"],
    scores: [3, 2, 1, 0],
    category: "No Poverty"
  },
  {
    question: "Have you ever volunteered for a community or organization that helps the poor",
    options: ["I don't", "Sometimes", "I try regularly", "I'm very conscious"],
    scores: [0, 1, 2, 3],
    category: "No Poverty"
  },
  {
    question: "Do you believe poverty is a major issue in your area?",
    options: ["Yes", "Somewhat", "Not really", "I don’t know"],
    scores: [3, 2, 1, 0],
    category: "No Poverty"
  },
  {
    question: "Do you support small local businesses or street vendors over big chains?",
    options: [" Always", "Sometimes", "Rarely", "Never"],
    scores: [3, 2, 1, 0],
    category: "No Poverty"
  },
  {
    question: "Would you be open to donating to a cause if you trusted where the money was going?",
    options: ["Definitely", "Maybe", "Probably not", "No"],
    scores: [3, 2, 1, 0],
    category: "No Poverty"
  },
  {
    question: "How do you usually travel short distances?",
    options: ["Walk/cycle/public transport", "Mix of private and public transport", " Mostly drive", "Prefer private vehicles always"],
    scores: [3, 2, 1, 0],
    category: "Climate Action"
  },
  {
    question: "How do you manage waste at home?",
    options: ["Segregate, recycle, and compost", "At least separate dry/wet", "Just throw everything away", "Not my concern"],
    scores: [3, 2, 1, 0],
    category: "Climate Action"
  },
  {
    question: "Do you actively reduce energy usage (e.g., switching off lights, AC)?",
    options: ["Always", "Often", "Rarely", "Never"],
    scores: [3, 2, 1, 0],
    category: "Climate Action"
  },
  {
    question: "Do you support environmental causes or petitions?",
    options: ["Yes", "Sometimes", "Not really", "No"],
    scores: [3, 2, 1, 0],
    category: "Climate Action"
  },
  {
    question: "Do you talk about climate change issues with friends or family?",
    options: ["Frequently", "Sometimes", "Rarely", "Never"],
    scores: [3, 2, 1, 0],
    category: "Climate Action"
  },
  {
    question: "Have you ever planted a tree or helped care for plants in your area?",
    options: ["Yes, multiple times", "Once", "I plan to", "Never"],
    scores: [3, 2, 1, 0],
    category: "Life on Land"
  },
  {
    question: "Are you aware of any endangered land animals or plants in your region?",
    options: ["Yes", "A few", "Not really", "No idea"],
    scores: [3, 2, 1, 0],
    category: "Life on Land"
  },
  {
    question: " Do you avoid products that harm forests (like palm oil, illegal wood)?",
    options: ["Always", "Sometimes", "Rarely", "Rarely"],
    scores: [3, 2, 1, 0],
    category: "Life on Land"
  },
  {
    question: "Would you join a reforestation or wildlife protection event if invited?",
    options: ["100% yes", "Maybe", "Unlikely", " No"],
    scores: [3, 2, 1, 0],
    category: "Life on Land"
  },
  {
    question: "How often do you visit parks, nature reserves, or green areas?",
    options: ["Very often", " Occasionally", "Rarely", "Never"],
    scores: [3, 2, 1, 0],
    category: "Life on Land"
  },
  {
    question: "How often do you use single-use plastic (like plastic bottles, bags)?",
    options: ["Never", "Rarely", "Often", "Daily"],
    scores: [3, 2, 1, 0],
    category: "Life Below Water"
  },
  {
    question: " Have you ever joined or supported a beach/river/lake cleanup?",
    options: ["Yes", "Once", "I’d like to", "No"],
    scores: [3, 2, 1, 0],
    category: "Life Below Water"
  },
  {
    question: "Do you know of any marine species that are endangered in your region?",
    options: ["Yes", "A few", "Not really", "No idea"],
    scores: [3, 2, 1, 0],
    category: "Life Below Water"
  },
  {
    question: "Would you support a ban on harmful practices like deep-sea trawling or oil dumping?",
    options: ["Definitely", "Maybe", "Depends", "No"],
    scores: [3, 2, 1, 0],
    category: "Life Below Water"
  },
  {
    question: "Do you think ocean pollution affects your life?",
    options: ["Yes, directly or indirectly", "Maybe", "Not really", "No"],
    scores: [3, 2, 1, 0],
    category: "Life Below Water"
  },
  {
    question: "Have you stood up for someone being discriminated against?",
    options: ["Yes, more than once", "Once", " I thought about it", "No"],
    scores: [3, 2, 1, 0],
    category: "Reduced Inequalities"
  },
  {
    question: "Do you think your community is inclusive of people from different backgrounds (ethnicity, gender, disability, etc.)?",
    options: ["Very inclusive", "Somewhat", "Not really", "Not at all"],
    scores: [3, 2, 1, 0],
    category: "Reduced Inequalities"
  },
  {
    question: " Have you tried to learn about issues faced by marginalized groups?",
    options: ["Yes, regularly", "Occasionally", "Rarely", "Never"],
    scores: [3, 2, 1, 0],
    category: "Reduced Inequalities"
  },
  {
    question: "Do you believe everyone has equal opportunities in your society?",
    options: ["Yes", "To some extent", "Not really", "No"],
    scores: [0, 1, 2, 3],
    category: "Reduced Inequalities"
  },
  {
    question: "Would you support a campaign that promotes equality and inclusion?",
    options: ["Yes, actively", "Yes, if it’s easy to join", "Maybe", "No"],
    scores: [3, 2, 1, 0],
    category: "Reduced Inequalities"
  }
];

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const sendResults = (finalScore) => {
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ score: finalScore })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("🛰 Response from Flask:", data);
      })
      .catch((err) => {
        console.error("❌ Error sending data:", err);
      });
  };

  const handleAnswer = (index) => {
    const newScore = score + questions[currentQ].scores[index];
    setScore(newScore);

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      sendResults(newScore);
      setShowResult(true);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🌍 SDG Awareness Quiz (The Hungry Tide)</h1>
      {!showResult ? (
        <div>
          <h2>Q{currentQ + 1}. {questions[currentQ].question}</h2>
          {questions[currentQ].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              style={{
                display: 'block',
                margin: '10px 0',
                padding: '10px 15px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Your Score: {score} / 75</h2>
          <p>{score <= 5 ? "You're just getting started! 🌱" :
               score <= 10 ? "You're on the path! 🌿" :
                score <= 15 ? "You're making a difference! 🌳": 
                score <= 20 ? "You're a change-maker! 🌲":
                score <= 25 ? "You're an advocate! 🌼": 
                score <= 30 ? "You're a leader! 🌻":
                score <= 35 ? "You're a role model! 🌺":
                score <= 40 ? "You're a champion! 🌸":
                score <= 45 ? "You're an inspiration! 🌷":
                score <= 50 ? "You're a hero! 🌼":
                score <= 55 ? "You're a legend! 🌹":
                score <= 60 ? "You're a superstar! 🌈":
                score <= 65 ? "You're a visionary! 🌟":
                score <= 70 ? "You're a trailblazer! 🌠":
                score <= 75 ? "You're a sustainability warrior! 🌎":  
               "You're a true SDG Champion! 🌟"}</p>
        </div>
      )}
    </div>
  );
}

export default App;