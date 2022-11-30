function Game(props) {
  const { cardArray, handleClick } = props;

  return (
    <div>
      <div>
        {cardArray.map((cardObject, ith) => {
          return (
            <button
              onClick={() => {
                handleClick(cardObject, ith);
              }}
            >
              {cardObject.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Game;
