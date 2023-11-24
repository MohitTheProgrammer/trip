//CSS import
import "../styles/carousal.css";

//Carousal images
import Image1 from "../assets/CarousalImages/img-1.jpg";
import Image2 from "../assets/CarousalImages/img-2.jpg";
import Image3 from "../assets/CarousalImages/img-3.jpg";
import Image4 from "../assets/CarousalImages/img-4.jpg";

//React imports
import { useState } from "react";

//Component import
import Greet from "./Greet";

const IMAGES = [Image1, Image2, Image3, Image4];

const Carousal = () => {
  const [imageIndex, setIndex] = useState(0);
  const showNext = () => {
    if (imageIndex === IMAGES.length - 1) setIndex(0);
    else {
      setIndex((currIndex) => currIndex + 1);
    }
  };
  const showprev = () => {
    if (imageIndex === 0) setIndex(IMAGES.length - 1);
    else {
      setIndex((currIndex) => currIndex - 1);
    }
  };
  return (
    <section className="carousal">
        <Greet/>
      <div className="carousal-container">
        <div className="carousal-slide">
          {IMAGES.map((img) => (
            <img
              key={img}
              src={img}
              alt="image"
              className="carousal-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
      </div>
      <button onClick={showprev} className="carousal-btn arrow-prev">
        &#8656;
      </button>
      <button onClick={showNext} className="carousal-btn arrow-next">
        &#8658;
      </button>
      <div className="carousal-indication">
        {IMAGES.map((img, ind) => (
          <button
            key={img}
            onClick={()=> setIndex(ind)}
            className={
              ind === imageIndex
                ? "indication-ball active-ball"
                : "indication-ball"
            }
          >{ind + 1}</button>
        ))}
      </div>
    </section>
  );
};

export default Carousal;
