import React from "react";

const Sdg = ({ onNext }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">About the SDG Quiz</h1>

      <img
        src="/sdg.png" // or use a URL
        alt="Sustainable Development Goals"
        className="mx-auto mb-6 w-64 h-auto rounded shadow"
      />

      <h3 className="text-lg mb-4">
        The Sustainable Development Goals (SDGs) are a global call to action to end poverty, protect the planet, and ensure peace and prosperity for all.
      </h3>

      <div className="text-left max-h-[400px] overflow-y-auto border p-4 rounded shadow bg-white">
  <ul className="list-disc pl-5 space-y-3 text-gray-800">
    <li>
      <strong>SDG 1: No Poverty</strong> – End poverty in all its forms everywhere.
    </li>
    <li>
      <strong>SDG 2: Zero Hunger</strong> – End hunger, achieve food security, and promote sustainable agriculture.
    </li>
    <li>
      <strong>SDG 3: Good Health and Well-Being</strong> – Ensure healthy lives and promote well-being for all.
    </li>
    <li>
      <strong>SDG 4: Quality Education</strong> – Ensure inclusive and equitable quality education for all.
    </li>
    <li>
      <strong>SDG 5: Gender Equality</strong> – Achieve gender equality and empower all women and girls.
    </li>
    <li>
      <strong>SDG 6: Clean Water and Sanitation</strong> – Ensure availability and sustainable management of water and sanitation for all.
    </li>
    <li>
      <strong>SDG 7: Affordable and Clean Energy</strong> – Ensure access to affordable, reliable, sustainable, and modern energy for all.
    </li>
    <li>
      <strong>SDG 8: Decent Work and Economic Growth</strong> – Promote sustained, inclusive and sustainable economic growth and productive employment.
    </li>
    <li>
      <strong>SDG 9: Industry, Innovation and Infrastructure</strong> – Build resilient infrastructure, promote sustainable industrialization, and foster innovation.
    </li>
    <li>
      <strong>SDG 10: Reduced Inequalities</strong> – Reduce inequality within and among countries.
    </li>
    <li>
      <strong>SDG 11: Sustainable Cities and Communities</strong> – Make cities and human settlements inclusive, safe, resilient, and sustainable.
    </li>
    <li>
      <strong>SDG 12: Responsible Consumption and Production</strong> – Ensure sustainable consumption and production patterns.
    </li>
    <li>
      <strong>SDG 13: Climate Action</strong> – Take urgent action to combat climate change and its impacts.
    </li>
    <li>
      <strong>SDG 14: Life Below Water</strong> – Conserve and sustainably use oceans, seas, and marine resources.
    </li>
    <li>
      <strong>SDG 15: Life on Land</strong> – Protect, restore, and promote sustainable use of terrestrial ecosystems and biodiversity.
    </li>
    <li>
      <strong>SDG 16: Peace, Justice and Strong Institutions</strong> – Promote peaceful and inclusive societies, provide access to justice for all, and build effective, accountable institutions.
    </li>
    <li>
      <strong>SDG 17: Partnerships for the Goals</strong> – Strengthen the means of implementation and revitalize global partnerships for sustainable development.
    </li>
  </ul>
</div>

<h2> THE HUNGRY TIDE  </h2>
      <button
        onClick={onNext}
        className="mt-6 bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
      >
         TAKE ME TO THE NOVEL
      </button>
    </div>
  );
};

export default Sdg;
