import React from "react";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Freediving Courses
      </h1>

      {/* Level 1 Course */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Level 1 PADI Freediver Course Overview
        </h2>
        <img
          src="/images/course.jpg"
          alt="Level 1 Freediver"
          className="w-full h-96 object-cover object-center mx-auto mb-4"
        />
        <p className="text-lg mb-4">
          The PADI Freediver Level 1 course is designed for beginners who want
          to experience the serenity and challenge of freediving. This course
          introduces the fundamental principles, techniques, and skills
          necessary for safe and enjoyable breath-hold diving.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          What the Course Includes:
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Knowledge Development:</strong> Learn about physiology,
            equalization, safety procedures, and relaxation techniques.
          </li>
          <li>
            <strong>Confined Water Session:</strong> Practice static and dynamic
            apnea, finning techniques, and relaxation strategies.
          </li>
          <li>
            <strong>Open Water Sessions:</strong> Practice constant weight dives
            and participate in rescue scenarios.
          </li>
          <li>
            <strong>Freediving Gear Introduction:</strong> Learn to use and
            select basic freediving equipment.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Certification Requirements:
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Complete knowledge development.</li>
          <li>Demonstrate proficiency in confined water skills.</li>
          <li>
            Safely perform open water dives to a minimum depth of 10 meters.
          </li>
          <li>Complete all safety and rescue procedures.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Course Duration:</h3>
        <p className="mb-4">Typically takes 2-3 days to complete.</p>

        <h3 className="text-xl font-semibold mb-2">
          Who Can Take This Course:
        </h3>
        <p>
          Minimum age: 15 years old. Must be able to swim and be in good
          physical health.
        </p>
      </div>

      {/* Level 2 Course */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          PADI Freediver Level 2 Course Overview
        </h2>
        <img
          src="/images/course5.jpg"
          alt="Level 2 Freediver"
          className="w-full h-96 object-cover object-center mx-auto mb-4"
        />
        <p className="text-lg mb-4">
          The PADI Freediver Level 2 course is designed for those who have
          completed their Level 1 certification and want to advance their
          freediving skills. This intermediate course builds on the techniques
          learned in Level 1.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          What the Course Includes:
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Advanced Knowledge Development:</strong> Learn advanced
            physiology, equalization techniques, and safety measures.
          </li>
          <li>
            <strong>Confined Water Sessions:</strong> Practice extended static
            apnea and increased dynamic apnea distances.
          </li>
          <li>
            <strong>Open Water Sessions:</strong> Conduct deeper constant weight
            dives and engage in buddy rescues.
          </li>
          <li>
            <strong>Introduction to Training Techniques:</strong> Learn about
            training for greater depth and overall performance.
          </li>
          <li>
            <strong>Freediving Gear Knowledge:</strong> Dive deeper into
            equipment selection and fine-tuning.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Certification Requirements:
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Complete knowledge development.</li>
          <li>Demonstrate proficiency in confined water skills.</li>
          <li>
            Safely perform constant weight open water dives to a depth of 20
            meters.
          </li>
          <li>Complete all advanced rescue and safety procedures.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 ">Course Duration:</h3>
        <p className="mb-4">Typically takes 3-4 days to complete.</p>

        <h3 className="text-xl font-semibold mb-2">
          Who Can Take This Course:
        </h3>
        <p>
          Minimum age: 16 years old. Must have a PADI Freediver Level 1 (or
          equivalent) certification and be able to swim and be in good physical
          health.
        </p>
      </div>
    </div>
  );
};

export default Services;
