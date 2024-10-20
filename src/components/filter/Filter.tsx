import "./Filter.css";
import filtericon from "../../assets/svg/filter/FilterProvider.svg";
import GameCard from "../cards/GameCard/GameCard";
import { useEffect, useState } from "react";
import { fetchGameList } from "../../fetchApi/FetchGameList";
import arrowleft from "../../assets/svg/filter/arrowleft.svg";
import arrowright from "../../assets/svg/filter/arrowright.svg";
import gameart from "../../assets/svg/filter/gameart.svg";
import gg from "../../assets/svg/filter/gg.svg";
import habanero from "../../assets/svg/filter/habanero.svg";
import GameProvideFilter from "./GameProvideFilter";

interface Game {
  name: string;
  provider: string;
  category: string;
  image: string;
}

const Filter = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [showProviderFilter, setShowProviderFilter] = useState<boolean>(false);
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  useEffect(() => {
    fetchGameList()
      .then((fetchedGames: Game[]) => {
        setGames(fetchedGames);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);

  // First filter by provider, then by search term
  const filteredGames = games
    .filter(game => selectedProvider ? game.provider === selectedProvider : true)
    .filter(game => 
      searchInput ? game.name.toLowerCase().includes(searchInput.toLowerCase()) : true
    );

  const toggleProviderFilter = () => {
    setShowProviderFilter((prev) => !prev);
  };

  const handleProviderSelect = (provider: string) => {
    if (selectedProvider === provider) {
      setSelectedProvider(""); // Deselect if clicking the same provider
    } else {
      setSelectedProvider(provider);
    }
    setShowProviderFilter(false);
  };

  const renderGamesContent = () => {
    // Check if a provider is selected but has no games
    if (selectedProvider) {
      const providerGames = games.filter(game => game.provider === selectedProvider);
      if (providerGames.length === 0) {
        return (
          <div className="flex items-center justify-center min-h-[200px]">
            <p className="text-gray-500 text-lg">This provider has no game yet</p>
          </div>
        );
      }
    }

    // If there are filtered games, show them
    if (filteredGames.length > 0) {
      return filteredGames.map((game, index) => (
        <span key={index} className={game.image === "" ? "hidden" : ""}>
          <GameCard image={game.image} />
        </span>
      ));
    }

    // If there's a search term but no results
    if (searchInput) {
      return (
        <div className="flex items-center justify-center min-h-[200px]">
          <p className="text-gray-500 text-lg">No search results found</p>
        </div>
      );
    }

    // Default empty state (no search, no provider selected)
    return null;
  };

  return (
    <div className="filter">
      <div className="header-filter">
        <div className="searchFilter">
          <input
            type="text"
            className="search-filter focus:outline-none focus:ring-1 focus:ring-[#00A6FF]"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <img 
          src={filtericon} 
          className="p-3 border cursor-pointer" 
          onClick={toggleProviderFilter} 
          alt="Filter Icon" 
        />
      </div>
      
      <div className="results">
        <div className="items text-center">
          {renderGamesContent()}
        </div>
      </div>

      <div className="game-provider">
        <div className="game-provider-header text-md">
          <p className="text-[#444444]">
            Proveedores de juego
            {selectedProvider && (
              <button 
                onClick={() => setSelectedProvider("")}
                className="ml-2 text-sm text-blue-500 hover:text-blue-700"
              >
                (Clear filter)
              </button>
            )}
          </p>
          <span className="flex space-x-6">
            <img src={arrowleft} alt="Previous" className="cursor-pointer" />
            <img src={arrowright} alt="Next" className="cursor-pointer" />
          </span>
        </div>
        <div className="provider">
          <div 
            className={`card-provider cursor-pointer ${selectedProvider === "Game Art" ? 'border-2 border-blue-500' : ''}`}
            onClick={() => handleProviderSelect("Game Art")}
          >
            <img src={gameart} className="object-cover" />
          </div>
          <div 
            className={`card-provider cursor-pointer ${selectedProvider === "GG" ? 'border-2 border-blue-500' : ''}`}
            onClick={() => handleProviderSelect("GG")}
          >
            <img src={gg} className="object-cover" />
          </div>
          <div 
            className={`card-provider cursor-pointer ${selectedProvider === "Habanero" ? 'border-2 border-blue-500' : ''}`}
            onClick={() => handleProviderSelect("Habanero")}
          >
            <img src={habanero} className="object-cover" />
          </div>
        </div>
      </div>

      {showProviderFilter && (
        <GameProvideFilter 
          onClose={toggleProviderFilter} 
          onSelectProvider={handleProviderSelect}
          selectedProvider={selectedProvider}
        />
      )}
    </div>
  );
};

export default Filter;