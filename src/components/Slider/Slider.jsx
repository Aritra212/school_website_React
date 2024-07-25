import { useState } from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import "./Slider.css";

function Slider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const handlePrev = () => {
    currentImageIndex === 0
      ? setCurrentImageIndex(images.length - 1)
      : setCurrentImageIndex(currentImageIndex - 1);
  };
  const handleNext = () => {
    currentImageIndex === images.length - 1
      ? setCurrentImageIndex(0)
      : setCurrentImageIndex(currentImageIndex + 1);
  };
  // let playSlider;
  // const repeater = () => {
  //   playSlider = setInterval(function () {
  //     currentImageIndex === images.length - 1
  //       ? setCurrentImageIndex(0)
  //       : setCurrentImageIndex(currentImageIndex + 1);
  //   }, 4000);
  // };

  // useEffect(() => {
  //   repeater();
  // });
  return (
    <div className="slider-wrapper">
      <div
        className="slider"
        // onMouseOver={() => clearInterval(playSlider)}
        // onMouseOut={repeater}
      >
        {images.map((el, index) => (
          <div
            key={index}
            className={`slide ${currentImageIndex === index && "active"}`}
          >
            <img src={el.src} />
            <div className="info">
              <h2>{el.heading}</h2>
              <p>{el.text}</p>
              {el.btnUrl && (
                <div className="read-more" onClick={() => navigate(el.btnUrl)}>
                  {el.btnTxt ? el.btnTxt : "Read more"}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="navigation">
          <FaAngleLeft className="prev-btn" onClick={handlePrev} />
          <FaChevronRight className="next-btn" onClick={handleNext} />
        </div>
        <div className="navigation-visibility">
          {images.map((el, index) => (
            <div
              key={index}
              className={`slide-icon  ${
                currentImageIndex === index && "active"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.array,
};
export default Slider;
