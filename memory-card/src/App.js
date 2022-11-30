import { useState } from "react";
import "./App.css";
import Game from "./components/Game.js";
function App() {
  const [cardArray, setArray] = useState([]);
  function handleClick() {
    setArray([
      { name: "first", selected: false },
      { name: "second", selected: false },
      { name: "third", selected: false },
    ]);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>bring bringCards</button>
      <Game cardArray={cardArray} />
    </div>
  );
}

export default App;
