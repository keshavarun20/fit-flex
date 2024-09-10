import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {
  const [challenge, setChallenge] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ challenge, muscles, goal });

    setWorkout(newWorkout);

    window.location.href = "#workout";
  }

  const [workout, setWorkout] = useState(null);
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 via-blue-900 to-black text-white text-sm sm:text-base">
      <Hero />
      <Generator
        challenge={challenge}
        setChallenge={setChallenge}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
