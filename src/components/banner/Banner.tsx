import "./Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { carouselSettings } from "../../carouselSettings/carouselSettings";
import { Images } from "./images";
import bell from '../../assets/svg/banner/Bell.svg' 


const Banner = () => {
  return (
    <>
      <div className="carousel">
        <Carousel
          {...carouselSettings}
        >{Images.map((photo, index) => (
            <span key={index}>
              <img src={photo.Name} alt={`banner-image-${index}`} />
            </span>
          ))}
        </Carousel>
      </div>
      <div className="description">
      <h2 className="sm:text-xs">
          <img src={bell} alt="bell icon" />
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </h2>
      </div>
    </>
  );
};

export default Banner;
