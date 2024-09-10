import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/fitflex";

function Header(props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {props.index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{props.title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{props.description}</p>
    </div>
  );
}

export default function Generator({
  challenge,
  setChallenge,
  goal,
  setGoal,
  muscles,
  setMuscles,
  updateWorkout,
}) {
  const [showModel, setShowModel] = useState(false);

  function toggleModel() {
    setShowModel((s) => !s);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (challenge !== "individual") {
      setMuscles([muscleGroup]);
      setShowModel(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);

    if (muscles.length === 2) {
      setShowModel(false);
    }
  }

  return (
    <>
      <SectionWrapper
        id={"generate"}
        header={"generate your workout"}
        title={["Unleash", "Your", "BANKAi!"]}
      >
        <Header
          index={"01"}
          title={"Choose Your Challenge"}
          description={"Only the Strongest Will Survive!"}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button
                key={typeIndex}
                onClick={() => {
                  setChallenge(type);
                  setMuscles([]);
                }}
                className={`rounded-lg bg-slate-950 border  border-solid hover:border-blue-600 py-4 px-4 ${
                  type === challenge ? "border-blue-600" : "border-slate-950"
                }`}
              >
                <p className="capitalize">{type.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>

        <Header
          index={"02"}
          title={"Target Acquired"}
          description={"Select the Muscles Destined for Domination!"}
        />
        <div className="rounded-lg bg-slate-950 border border-slate-950 border-solid hover:border-blue-800 flex flex-col ">
          <button
            onClick={toggleModel}
            className="relative flex items-center justify-center px-3 py-3"
          >
            <p className="capitalize">
              {muscles.length == 0 ? "Select Muscle Group" : muscles.join(" ")}
            </p>
            <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
          </button>
          {showModel && (
            <div className="flex flex-col p-3">
              {(challenge === "individual"
                ? WORKOUTS[challenge]
                : Object.keys(WORKOUTS[challenge])
              ).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    onClick={() => {
                      updateMuscles(muscleGroup);
                    }}
                    key={muscleGroupIndex}
                    className={
                      "hover:text-blue-600 duration-200 " +
                      (muscles.includes(muscleGroup) ? "text-blue-600" : "")
                    }
                  >
                    <p className="uppercase">
                      {muscleGroup.replaceAll("_", " ")}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <Header
          index={"03"}
          title={"Ascend to Godhood"}
          description={"Choose your divine quest."}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button
                key={schemeIndex}
                onClick={() => setGoal(scheme)}
                className={`rounded-lg bg-slate-950 border px-4 border-solid hover:border-blue-600 py-4 ${
                  scheme === goal ? "border-blue-600" : "border-slate-950"
                }`}
              >
                <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
              </button>
            );
          })}
        </div>
      </SectionWrapper>
      <div className="flex justify-center items-center p-4">
        <button
          onClick={updateWorkout}
          className="px-8 py-4 rounded-md border-[2px] bg-blue-950 border-blue-600 border-solid text-white tealShadow duration-200"
        >
          <p>Craft</p>
        </button>
      </div>
    </>
  );
}
