import CardElement from "./CardElement";

function GameBoard(props) {
  return (
    <div id="gameBoard">
      {props.cards.map((card, index) => (
        <CardElement handleFlip={props.handleFlip} key={index} card={card} />
      ))}
    </div>
  );
}

export default GameBoard;
