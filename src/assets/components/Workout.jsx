import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to"}
      title={["The", "danger", "Zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard index={i} key={i} exercise={exercise} />;
        })}
      </div>
    </SectionWrapper>
  );
}

export default Workout;
