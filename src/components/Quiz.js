import React, { useState } from 'react';
//hi
const questions = [
  {
    question: "Mangroves like the Sundarbans are critical for SDG 13 (Climate Action). How important is their protection to you?",
    options: ["Extremely important", "Moderately important", "Neutral", "Not important"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "The novel highlights marine conservation (SDG 14: Life Below Water). What’s your priority for protecting endangered species like river dolphins?",
    options: ["High priority", "Medium priority", "Low priority", "No priority"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Fokir’s traditional knowledge links to SDG 15 (Life on Land). Should local communities lead conservation efforts?",
    options: ["Always","Often","Sometimes","Rarely"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Would you support sustainable tourism in the Sundarbans to help achieve SDG 8 (Decent Work and Economic Growth)?",
    options: ["Strongly agree","Agree","Neutral","Disagree"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "How important is gender equality in conservation efforts (SDG 5: Gender Equality), as subtly portrayed through Piya’s work?",
    options: ["Extremely important","Moderately important","Slightly important","Not important"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Piya’s research focuses on river dolphins (SDG 14). Would you prioritize funding for similar ecological studies?",
    options: [" Definitely","Probably","Not sure","No"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Kanai represents intellectual curiosity (SDG 4: Quality Education). Do you believe education can solve environmental challenges?",
    options: ["Absolutely","Likely" ,"Possible","No"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Fokir’s livelihood highlights SDG 1 (No Poverty). Should governments support such traditional ways of life??",
    options: ["Strongly agree", "Agree", "Neutral", "Disagree"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Community-driven conservation is a theme (SDG 11: Sustainable Cities and Communities). Would you promote such models?",
    options: ["Yes, strongly", "Yes, somewhat", "Neutral", "No"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "The conflict between development and conservation is central (SDG 9: Industry, Innovation and Infrastructure). Where do you stand?",
    options: ["Conservation first", "Balanced approach", " Development first", "Uncertain"],
    scores: [3, 2, 1, 0],
  },
  {
    question: " The Sundarbans’ biodiversity (SDG 15) faces threats from poaching and deforestation. What’s your stance on strict enforcement?",  
    options: ["Fully support enforcement", "Mostly support", " Neutral", "Oppose"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Fokir’s character represents harmony with nature (SDG 12: Responsible Consumption and Production). Should humanity live with less?",
    options: ["Strongly agree", "Agree", "Neutral", "Disagree"],
    scores: [3, 2, 1, 0],
  },
  {
    question: " Piya bridges global science with local knowledge (SDG 17: Partnerships for Goals). Should governments collaborate with scientists more?",
    options: ["Agree", "Often", "Sometimes", "Rarely"],
    scores: [3, 2, 1, 0],
  },
  {
    question: " Fokir’s struggle reflects SDG 2 (Zero Hunger). How important is ensuring food security for rural communities?",
    options: ["Very important", "Moderately important", "Slightly important", "Not important"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "The Sundarbans face rising sea levels (SDG 13). How much do you think climate change impacts marginalized communities?",
    options: ["Significantly", " Moderately", "Slightly", "Never"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "The intersection of science and tradition shapes the story. Should modern solutions respect traditional knowledge (SDG 15)?",
    options: ["Yes,completely", "Yes,somewhat", "Neutral", "No"],
    scores: [3, 2, 1, 0],
  },
  {
    question: " Community cohesion is vital for SDG 10 (Reduced Inequalities). Should governments invest in marginalized communities like the Sundarbans?",
    options: ["Strongly agree", "Agree", "Neutral", "Disagree"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Kanai struggles with the moral dilemmas of privilege (SDG 16: Peace, Justice, and Strong Institutions). Should leaders focus on equitable justice?",
    options: ["Absolutely","Likely" ,"Possible","No"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "Biodiversity loss in the Sundarbans threatens livelihoods (SDG 15). Do you think individuals can make a meaningful impact on conservation?",
    options: ["Yes, definitely", "Yes, somewhat", "Neutral", "No"],
    scores: [3, 2, 1, 0],
  },
  {
    question: "The story highlights humans’ intertwined fate with nature (SDG 13). Do you believe this connection should guide environmental policies?",
    options: ["Strongly agree", "Agree", "Neutral", "Disagree"],
    scores: [3, 2, 1, 0],
  },
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
          <h2>Your Score: {score} / 60</h2>
          <p>{score <= 24 ? "You're unique, a blend of the novel's characters. Your score reflects a balance of perspectives, much like the diverse voices in the Sundarbans. Embrace your individuality!" 
            : score <= 35 ? "You are like Fokir, a defender of traditional practices and someone who understands the power of nature intuitively."
            : score <= 50 ? "You are like Kanai, focused on intellectual pursuits and exploring connections between people and cultures."
            : score <= 60 ? "You are like Piya, deeply driven by science and global environmental goals."
            : "Your score reflects a deep understanding of the themes in 'The Hungry Tide.' You resonate with the characters' struggles and triumphs, embodying their commitment to conservation and community."
          }</p>
        </div>
      )}
    </div>
  );
}

export default App;