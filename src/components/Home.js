import React from "react";
import "./Home.css";


function Home({ onStart }) {
  return (
    <div className="home">
      <h1> THE HUNGRY TIDE </h1>
      <h3>🌍 Sustainable Development Goals (SDGs)</h3>
      <p>
        The Sustainable Development Goals are a universal call to action to end poverty, protect the planet,
        and ensure that all people enjoy peace and prosperity by 2030.The Sustainable Development Goals (SDGs)
        are a set of 17 global goals adopted by all United Nations Member States in 2015 as part of the 2030 
        Agenda for Sustainable Development. These goals aim to end poverty, protect the planet, and ensure peace 
        and prosperity for all people by 2030.
      </p>
      <h2>Sustainable Development Goals Issued By UN</h2>
      <ul className="sdg-list">
        <li><strong>🔴 SDG 1:</strong> No Poverty</li>
        <li><strong>🟠 SDG 2:</strong> Zero Hunger</li>
        <li><strong>🟡 SDG 3:</strong> Good Health and Well-being</li>
        <li><strong>📚 SDG 4:</strong> Quality Education</li>
        <li><strong>🧑‍🤝‍🧑 SDG 5:</strong> Gender Equality</li>
        <li><strong>🚰 SDG 6:</strong> Clean Water And Sanitation</li>
        <li><strong>💡 SDG 7:</strong> Affordable and Clean Energy</li>
        <li><strong>💹 SDG 8</strong> Decent Work and Economic Growth</li>
        <li><strong>🏭 SDG 9</strong> Industry, Innovation and Infrastructure</li>
        <li><strong>⚖️ SDG 10:</strong> Reduced Inequalities</li>
        <li><strong>🌆 SDG 11</strong> Sustainable Cities and Communities</li>
        <li><strong>🔁 SDG 12</strong> Responsible Consumption and Production</li>
        <li><strong>🌿 SDG 13:</strong> Climate Action</li>
        <li><strong>🐬 SDG 14:</strong> Life Below Water</li>
        <li><strong>🐘 SDG 15:</strong> Life on Land</li>
        <li><strong>⚖️ SDG 16</strong> Peace, Justice and Strong Institutions</li>
        <li><strong>🥅 SDG 17</strong> Partnerships for the Goals</li>
      </ul>
      <h2> DETAILS  </h2>
      <button className="start-btn" onClick={onStart}>Lets Understand SDG's Further</button>
    </div>
  );
}

export default Home;
