import "./Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { carouselSettings } from "../../carouselSettings/carouselSettings";
import { Images } from "./images";

const Banner = () => {
  return (
    <>
      <div className="carousel">
        <Carousel {...carouselSettings}>
          {Images.map((photo, index) => (
            <span key={index}>
              <img src={photo.Name} alt={`banner-image-${index}`} />
            </span>
          ))}
        </Carousel>
      </div>
      <div className="description">
        <h2 className="sm:text-xs">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_7)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.55568 5.56554C3.55568 2.8348 5.76938 0.621094 8.50015 0.621094C11.2309 0.621094 13.4445 2.8348 13.4445 5.56554V6.17665C13.4445 7.64369 13.6437 8.94423 13.9473 9.85489C14.1003 10.3138 14.2677 10.637 14.4212 10.8318C14.5349 10.976 14.6027 11.0052 14.6183 11.01C14.9832 11.0138 15.2779 11.3108 15.2779 11.6766V11.8156C15.2779 12.1838 14.9794 12.4822 14.6112 12.4822H2.38902C2.02082 12.4822 1.72235 12.1838 1.72235 11.8156V11.6766C1.72235 11.3108 2.01702 11.0138 2.38196 11.01C2.39752 11.0052 2.46535 10.976 2.57902 10.8318C2.73256 10.637 2.89998 10.3138 3.05292 9.85489C3.35648 8.94423 3.55568 7.64369 3.55568 6.17665V5.56554ZM2.37851 11.0109L2.38031 11.0105L2.37926 11.0108L2.37851 11.0109Z"
                fill="#FFD703"
              />
              <path
                d="M6.66667 12.8211C6.41497 12.8211 6.18473 12.9628 6.07141 13.1876C5.95807 13.4124 5.98099 13.6818 6.13063 13.8841C6.68537 14.6344 7.52339 15.1544 8.49999 15.1544C9.47659 15.1544 10.3147 14.6344 10.8694 13.8841C11.0191 13.6818 11.0419 13.4124 10.9286 13.1876C10.8153 12.9628 10.5851 12.8211 10.3333 12.8211H6.66667Z"
                fill="#FFD703"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_7">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.5 0.621094)"
                />
              </clipPath>
            </defs>
          </svg>
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </h2>
      </div>
    </>
  );
};

export default Banner;
