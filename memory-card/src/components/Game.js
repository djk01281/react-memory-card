function Game(props) {
  const { cardArray, handleClick } = props;

  return (
    <div>
      <div>
        {cardArray.map((cardObject) => {
          return <button onClick={handleClick}>{cardObject.name}</button>;
        })}
      </div>
    </div>
  );
}
export default Game;
