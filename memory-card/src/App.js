import { useState } from "react";
import "./App.css";
import Game from "./components/Game.js";
function App() {
  const [cardArray, setArray] = useState([]);
  function newGame() {
    setArray([
      { name: "first", selected: false },
      { name: "second", selected: false },
      { name: "third", selected: false },
    ]);
  }
  function handleClick() {
    const newArray = cardArray.slice();
    newArray.sort(() => Math.random() - 0.5);
    setArray(newArray);
  }

  return (
    <div className="App">
      <button onClick={newGame}>newGame</button>

      <Game cardArray={cardArray} handleClick={handleClick} />
    </div>
  );
}

export default App;
