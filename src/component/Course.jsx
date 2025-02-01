import React from "react";

const Course = ({ msg, team }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">{msg}</h1>
      <p className="text-sm">{team}</p>
    </div>
  );
};

export default Course;
