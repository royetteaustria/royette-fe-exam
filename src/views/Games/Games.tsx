import "./Game.css";
import GameCard from "../../components/cards/GameCard/GameCard";
import { useEffect, useState } from "react";
import { fetchGameList } from "../../fetchApi/FetchGameList";

interface Game {
  name: string;
  provider: string;
  image: string;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGameList()
      .then((fetchedGames: Game[]) => {
        setGames(fetchedGames);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);

  return (
    <>
      <div className="main-game">
        <div className="items">
          {games.map((game, index) => (
            <span className={game.image === '' ? 'hidden' : ''}>
                <GameCard key={index} image={game.image} />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Games;