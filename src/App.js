import "./styles.css";

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [peoples, setPeoples] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > peoples.length - 1) setIndex(0);
    if (index < 0) setIndex(peoples.length - 1);
  }, [peoples, index]);

  useEffect(() => {
    let slider = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {peoples.map((people, peopleIndex) => {
          const { id, image, name, title, quote } = people;
          let position = "nextSlide";
          if (index > peopleIndex) position = "lastSlide";
          if (index === peopleIndex) position = "activeSlide";

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button onClick={() => setIndex((i) => i - 1)} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={() => setIndex((i) => i + 1)} className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
