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
    game.flipCard(
      card.id,
      () => {
        //gameOverCallback
        setGameOver(true);
      },
      () => {
        //noMatchCallback
        setCards([...game.cards]);
      }
    );
    setCards([...game.cards]);
  }

  return (
    <>
      <GameBoard handleFlip={handleFlip} cards={cards} />
      <GameOver show={gameOver} handleRestart={restart} />
    </>
  );
}

export default MemoryGame;
