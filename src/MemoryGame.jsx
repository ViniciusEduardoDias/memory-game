import { useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import game from "./game/game";

function MemoryGame() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, []);

  function restart() {
    game.clearCards();
    setCards(game.createCardsFromTechs());
    setGameOver(false);
  }

  function handleFlip(card) {
    if (game.setCard(card.id)) {
      this.classList.add("flip");
      if (game.secondCard) {
        if (game.checkMatch()) {
          game.clearCards();
          if (game.checkGameOver()) {
            //GameOver
            setGameOver(true);
          }
        } else {
          setTimeout(() => {
            //No Match
            game.unflipCards();
            setCards([...game, cards]);
          }, 1000);
        }
      }
    }
    setCards([...game, cards]);
  }

  return (
    <>
      <GameBoard handleFlip={handleFlip} cards={cards} />
      <GameOver show={gameOver} handleRestart={restart} />
    </>
  );
}

export default MemoryGame;
