function Game(props) {
  const cardArray = props.cardArray;
  return cardArray.length > 0 ? (
    <div>{cardArray[0].name}</div>
  ) : (
    <div>press button</div>
  );
}
export default Game;
