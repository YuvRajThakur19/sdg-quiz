import React from "react";

const InfoPage = ({ onNext }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">About the Novel</h1>
      <p className="text-lg mb-6">
      The Hungry Tide is a novel set in the Sundarbans, a vast and 
      fragile ecosystem in eastern India and Bangladesh. It follows 
      Piya, a marine biologist from the U.S. studying the endangered 
      Irrawaddy dolphins, and Kanai, a translator from Delhi. As 
      their paths cross with local fisherman Fokir, the novel explores
      the tension between human survival, environmental conservation,
      and cultural identity.The story beautifully blends science, nature,
      and society, revealing the struggles of marginalized communities
      living in a land constantly threatened by floods, tigers, and poverty.
      </p>
      <h2 className="text-3xl font-bold mb-4">🌍 Examples of SDGs in The Hungry Tide</h2>
      <p className="text-lg mb-6">
        The Hungry Tide touches on several Sustainable Development Goals (SDGs) 
        through its themes and characters. For example, it highlights SDG 13 
        (Climate Action) by depicting the impact of climate change on the 
        Sundarbans ecosystem and the lives of its inhabitants. It also addresses
        SDG 15 (Life on Land) by showcasing the importance of biodiversity and 
        conservation efforts in protecting endangered species like the Irrawaddy dolphin.
        Additionally, the novel reflects SDG 1 (No Poverty) and SDG 10 (Reduced Inequalities) 
        by portraying the struggles of local communities against poverty and social injustice. 
        Through its rich narrative, The Hungry Tide emphasizes the interconnectedness of 
        environmental and social issues, aligning with the principles of sustainable development.
        Some Scenarios in the Novel where SDG,s can be seen are:
      </p>
      <div className="text-left border p-4 rounded shadow bg-white mb-4">
      <h2 className="text-xl font-bold text-green-700 mb-2">✅ SDG 1: No Poverty</h2>
      <p className="mb-1">
      <strong>Scenario:</strong> The local communities in the Sundarbans live in extreme poverty, relying on fishing and honey-collecting to survive.
      </p>
      <p>
      <strong>Example:</strong> Fokir represents the everyday struggle for basic needs, as his family lives in a small hut and has little access to resources.
      </p>
      </div>

      <div className="text-left border p-4 rounded shadow bg-white mb-4">
      <h2 className="text-xl font-bold text-green-700 mb-2">✅ SDG 3: Good Health and Well-Being</h2>
      <p className="mb-1">
      <strong>Scenario:</strong> There’s limited access to healthcare in the Sundarbans.
      </p>
      <p>
      <strong>Example:</strong> Piya notices the lack of medical support for locals and how
      dangerous their jobs are (like tiger attacks, drowning, diseases from swamp water).
      </p>
      </div>
      <div className="text-left border p-4 rounded shadow bg-white mb-4">
      <h2 className="text-xl font-bold text-green-700 mb-2">✅ SDG 4: Quality Education</h2>
      <p className="mb-1">
      <strong>Scenario:</strong>Kanai's aunt Nirmal tried to educate and uplift the people in the tide country.
      </p>
      <p>
      <strong>Example:</strong>Nirmal's old writings reveal his dream of empowering people
      through education and awareness, especially during the resettlement of refugees on Morichjhãpi Island.
      </p>
      </div>
      <div className="text-left border p-4 rounded shadow bg-white mb-4">
      <h2 className="text-xl font-bold text-green-700 mb-2">✅ SDG 13: Climate Action</h2>
      <p className="mb-1">
      <strong>Scenario:</strong> The Sundarbans are vulnerable to climate change, with rising
      sea levels and extreme weather events.
      </p>
      <p>
      <strong>Example:</strong>The villagers’ homes are repeatedly destroyed by tidal floods,
      showing the real-world impact of climate change on poor coastal areas.
      </p>
      </div>
      <div className="text-left border p-4 rounded shadow bg-white mb-4">
      <h2 className="text-xl font-bold text-green-700 mb-2">✅ SDG 14: Life Below Water</h2>
      <p className="mb-1">
      <strong>Scenario:</strong>Piya’s research focuses on conserving the endangered Irrawaddy 
      dolphins.
      </p>
      <p>
      <strong>Example:</strong>She faces challenges balancing her scientific goals with the fishermen’s 
      need to survive by using the same waters.
      </p>
      </div>
      <div className="text-left border p-4 rounded shadow bg-white mb-4">
      <h2 className="text-xl font-bold text-green-700 mb-2">✅ SDG 15: Life on Land</h2>
      <p className="mb-1">
      <strong>Scenario:</strong>The fragile ecosystem of the Sundarbans is home to the Royal Bengal Tiger, 
      mangrove forests, and rare species.
      </p>
      <p>
      <strong>Example:</strong> The novel portrays how both people and wildlife compete for space and resources, 
      highlighting the complexity of conservation.
      </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">🌱 In Short:</h2>
      <p className="text-lg mb-6">
      The Hungry Tide brings to life the human-environment relationship, showing how poverty, climate change, 
      education, biodiversity, and health all connect — which is exactly what the SDGs are about.
      </p>
      <h3> So at Last Lets Take Quiz and Check how concerned and active you are toward achieving Sustainable Development Goals </h3>
      <button
        onClick={onNext}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default InfoPage;

