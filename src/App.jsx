import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BusinessCard } from "./components/BusinessCard";
import { CatchMe } from "./components/CatchMe";
import { ChangeColorCircle } from "./components/ChangeColorCircle";
import { GuessTheNumber } from "./components/GuessTheNumber";
import { Notifications } from "./components/Notifications";
import { OpenModal } from "./components/OpenModal";
import { SortAnimals } from "./components/SortAnimals";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React Challenge 2 🥊</h1>
      <ChangeColorCircle />
      <SortAnimals />
      <CatchMe />
      <OpenModal />
      <Notifications />
      <GuessTheNumber />
      <BusinessCard />

    </div>
  );
}

export default App;
