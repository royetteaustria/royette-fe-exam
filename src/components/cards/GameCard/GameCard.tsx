import './GameCard.css'

interface game {
    image: string
}

const GameCard = ( {image} : game) => {
  return (
    <div className="game">
      <div className="card-content">
        <img src={image} alt="games" />
        <div className="star-container">
          <input type="checkbox" id={`star-${image}`} />
          <label htmlFor={`star-${image}`} className="star">&#9733;</label>
        </div>
      </div>
    </div>
  )
}

export default GameCard