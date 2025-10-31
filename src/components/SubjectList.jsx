import React from "react";
import subjects from "../data/subjects.json";

const SubjectList = () => {
  return (
    <div className="subject-container">
      {subjects.map((sub) => (
        <div key={sub.id} className="subject-card">
          <img src={sub.image} alt={sub.subject} />
          <h4>{sub.subject}</h4>
        </div>
      ))}
      <p className="subject-desc">
        With a program design that includes 04 semesters with many important
        technologies such as ReactJS, PHP, Python, .NET Core, Spring boot brings
        learners to the world of programming quickly, most effectively. After
        graduation, students are confident in front of employers with 4 project
        semesters with quality, practical products, students will definitely
        score points.
      </p>
    </div>
  );
};

export default SubjectList;