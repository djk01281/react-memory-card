import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game.js";
function App() {
  const [cardArray, setArray] = useState([]);
  const [gameOver, setOver] = useState(false);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [win, setWin] = useState(false);
  function newGame() {
    setArray([
      { name: "first", selected: false },
      { name: "second", selected: false },
      { name: "third", selected: false },
    ]);
    setOver(false);
    setWin(false);
    setScore(0);
  }
  useEffect(() => {
    if (score > totalScore) {
      setTotalScore(score);
    }

    if (cardArray.length !== 0 && cardArray.length === score) {
      setWin(true);
      return;
    }
  }, [score, totalScore]);

  function handleClick(taskObject, i) {
    if (taskObject.selected === true) {
      setOver(true);
      return;
    }
    //TODO add WIN GAME feature
    //TODO Fix totalScore late updating

    setScore(score + 1);

    const newArray = cardArray.slice();
    newArray[i].selected = true;
    newArray.sort(() => Math.random() - 0.5);
    setArray(newArray);
  }

  return (
    <div className="App">
      <div>Current Score:{score}</div>
      <div>Total Score:{totalScore}</div>

      <button onClick={newGame}>newGame</button>

      {gameOver || win ? (
        gameOver ? (
          <div>GAME OVER</div>
        ) : (
          <div>You Win!!</div>
        )
      ) : (
        <Game
          cardArray={cardArray}
          handleClick={handleClick}
          setScore={setScore}
          setTotalScore={setTotalScore}
        />
      )}
    </div>
  );
}

export default App;
