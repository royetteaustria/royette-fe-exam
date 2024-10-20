interface GameProviderProps {
    iconGameProvider: string;
  }
  
  const GameProviderCards = ({ iconGameProvider }: GameProviderProps) => {
    return (
      <div className="w-[130px] h-[40px] m-4 bg-[#F2F2FA] p-2 flex items-center justify-center">
        <img src={iconGameProvider} className="size-24 object-contain" alt="Game Provider    " />
      </div>
    );
  };
  
  export default GameProviderCards;
  