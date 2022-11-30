import { useState } from "react";
import "./App.css";
import Game from "./components/Game.js";
function App() {
  const [cardArray, setArray] = useState([]);
  const [gameOver, setOver] = useState(false);
  function newGame() {
    setArray([
      { name: "first", selected: false },
      { name: "second", selected: false },
      { name: "third", selected: false },
    ]);
    setOver(false);
  }
  function handleClick(taskObject, i) {
    if (taskObject.selected === true) {
      setOver(true);
      return;
    }
    const newArray = cardArray.slice();
    newArray[i].selected = true;
    newArray.sort(() => Math.random() - 0.5);
    setArray(newArray);
  }

  return (
    <div className="App">
      <button onClick={newGame}>newGame</button>
      {gameOver ? (
        <div>GAME OVER</div>
      ) : (
        <Game cardArray={cardArray} handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
