function Game(props) {
  const { cardArray, handleClick } = props;

  return (
    <div>
      <div>
        {cardArray.map((cardObject, ith) => {
          return (
            <div
              onClick={() => {
                handleClick(cardObject, ith);
              }}
            >
              {cardObject.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Game;
