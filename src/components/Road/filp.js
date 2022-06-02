import React, { useState } from "react";
import {CardstyleBack,CardstyleFront } from "./ServicesElements";
import ReactCardFlip from "react-card-flip";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div onClick={handleClick}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" data-aos="fade-left">
          <CardstyleFront style={{marginTop:10}}>
            {props.front}
          </CardstyleFront>

          <CardstyleBack style={{ padding: 20, textAlign: "center",marginTop:10 }}>
            {props.back}
          </CardstyleBack>
        </ReactCardFlip>
      </div>
    </>
  );
};

export default Card;
