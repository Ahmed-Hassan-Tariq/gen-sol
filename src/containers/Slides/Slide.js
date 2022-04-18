import React, { useState, useEffect } from "react";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import "./slide.css";
import data from "./SlideData";

const Slide = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {position = "activeSlide";}
          if (indexPeople === index - 1 ||(index === 0 && indexPeople === people.length - 1)) {position = "lastSlide";}

          return (

            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              {/* <button className="slide_button">{title}</button> */}
              <p>{title}</p>
              <p className="text">{quote}</p>
            </article>

          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}> <BsFillArrowLeftCircleFill size='20px' /> </button>
        <button className="next" onClick={() => setIndex(index + 1)}> <BsFillArrowRightCircleFill size='20px' /> </button>
      </div>
    </section>
  );
};

export default Slide;
