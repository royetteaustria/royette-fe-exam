import { useEffect, useState } from "react";
import filter from "../../assets/svg/filter/filter.svg";
import x from "../../assets/svg/filter/X.svg";
import { fetchGameList } from "../../fetchApi/FetchGameList";
import GameProviderCards from "../cards/GameProvider/GameProviderCards";

interface Game {
  iconGameProvider: string;
  provider: string;
}

interface GameProvideFilterProps {
  onClose: () => void;
  onSelectProvider: (provider: string) => void;
  selectedProvider: string;
}

const GameProvideFilter = ({ onClose, onSelectProvider, selectedProvider }: GameProvideFilterProps) => {
  const [providers, setProviders] = useState<Game[]>([]);

  useEffect(() => {
    fetchGameList()
      .then((fetchedProviders: Game[]) => {
        setProviders(fetchedProviders);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);

  const uniqueProviders = providers.filter((value, index, self) =>
    index === self.findIndex((t) => t.provider === value.provider)
  );

  const handleProviderClick = (provider: string) => {
    onSelectProvider(provider);
  };

  return (
    <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="fixed bottom-0 left-0 right-0 w-full flex items-end justify-center text-center sm:items-center">
            <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all w-full">
              <div className="w-full bg-[#00A6FF] sticky top-0 h-14 flex justify-between px-4 py-2 text-white items-center">
                <div className="flex gap-4 text-md font-[14px] items-center">
                  <span>
                    <img src={filter} className="h-4 align-middle" alt="Filter" />
                  </span>
                  <span>
                    Game Provider <span className="border-white border p-2 rounded-full ml-4">{uniqueProviders.length}</span>
                  </span>
                </div>
                <div className="flex items-center cursor-pointer" onClick={onClose}>
                  <img src={x} className="h-6 align-middle" alt="Close" />
                </div>
              </div>

              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left grid grid-cols-2 gap-4">
                    {uniqueProviders.map((provider, index) => (
                      <div
                        key={index}
                        onClick={() => handleProviderClick(provider.provider)}
                        className={`cursor-pointer ${
                          selectedProvider === provider.provider ? 'border-2 border-[#00A6FF]' : ''
                        }`}
                      >
                        <GameProviderCards iconGameProvider={provider.iconGameProvider} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameProvideFilter;