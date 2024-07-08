import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../../utils/Swoldier";
import Button from "./Button";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

function Generator(props) {
  const { poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout } = props;
  const [showModel, setShowModel] = useState(false);

  const toggle = () => {
    setShowModel(!showModel);
  };

  const updateMuscle = (muscleGroup) => {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModel(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModel(false);
    }

    window.location.href =  '#workout'
  };

  return (
    <SectionWrapper id={'generator'} header={"Generate your workout"} title={["its", "Huge", "o'clock"]}>
      <Header index={"01"} title={"Pick your Poison"} description={"Select the workout you want"} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <button
            onClick={() => {
              setMuscles([]);
              setPoison(type);
            }}
            className={`bg-slate-950 border py-3 duration-200 hover:border-blue-600 rounded-lg ${
              type === poison ? "border-blue-600" : "border-blue-400"
            }`}
            key={typeIndex}
          >
            <p className="capitalize">{type.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>
      <Header index={"02"} title={"Lock the Target"} description={"Select the Muscle to Train"} />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col px-4">
        <button onClick={toggle} className="relative flex p-3 items-center justify-center">
          <p className="capitalize gap-1 duration-200">
            {muscles.length > 0 ? `${muscles.map(m => m.replaceAll("_", " ")).join(" | ")}` : "Select the Muscle"}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModel && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual" ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map(
              (muscleGroup, muscleGroupIndex) => (
                <button
                  onClick={() => updateMuscle(muscleGroup)}
                  key={muscleGroupIndex}
                  className={`hover:text-blue-400 duration-200 ${
                    muscles.includes(muscleGroup) ? "text-blue-400" : ""
                  }`}
                >
                  <p className="capitalize">{muscleGroup.replaceAll("_", " ")}</p>
                </button>
              )
            )}
          </div>
        )}
      </div>
      <Header index={"03"} title={"What's your Target?"} description={"Select the type of the Workout"} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button
            onClick={() => setGoal(scheme)}
            className={`bg-slate-950 border py-3 duration-200 hover:border-blue-600 rounded-lg px-4 ${
              scheme === goal ? "border-blue-600" : "border-blue-400"
            }`}
            key={schemeIndex}
          >
            <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>
      <Button func={updateWorkout} text={"Generate Workout"} />
    </SectionWrapper>
  );
}

export default Generator;
