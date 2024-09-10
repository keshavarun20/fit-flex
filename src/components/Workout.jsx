import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout(props) {
  return (
    <>
      <SectionWrapper
        id={"workout"}
        header={"Forge the"}
        title={["PATH", "OF", "LEGENDS"]}
      >
        <div className="flex flex-col gap 4">
          {props.workout.map((exercise, i) => {
            return <ExerciseCard i={i} exercise={exercise} key={i} />;
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
