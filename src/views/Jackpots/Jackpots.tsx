import GameCard from "../../components/cards/GameCard/GameCard";
import { useEffect, useState } from "react";
import { fetchGameList } from "../../fetchApi/FetchGameList";

interface Game {
  name: string;
  provider: string;
  category: string;
  image: string;
}

const Jackpots = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGameList()
      .then((fetchedGames: Game[]) => {
        const filteredGames = fetchedGames.filter(
          (game) => game.category === "Jackpots"
        );
        setGames(filteredGames);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);
  return (
    <div className="jackpot">
      <div className="items">
        {games.map((game, index) => (
          <span key={index} className={game.image === "" ? "hidden" : ""}>
            <GameCard image={game.image} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Jackpots;
