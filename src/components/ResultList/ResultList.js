import React, { useState } from "react";
import { imgToRequest } from "../../constants/request";
import "./ResultList.css";

const ResultList = (props) => {
  const [selected, setSelected] = useState(-1);

  // View detail when click on the movie image
  const viewDetail = (index) => {
    // If this movie had been chosen, close detail
    // eslint-disable-next-line eqeqeq
    if (selected == index) {
      setSelected(-1);
      props.onSelect(-1);
      // Else open detail
    } else {
      setSelected(index);
      props.onSelect(index);
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="result-list">
      <h3 className="result-list__title">Search Result</h3>
      <ul className="result-list__items">
        {/* Map results */}
        {props.items.map((item, index) => (
          <li className="result-list__item" key={index}>
            <img
              src={
                !item.poster_path
                  ? require("../../images/no-image__poster-sm.png")
                  : imgToRequest(item.poster_path, "w300")
              }
              className="result-list__item-img"
              onClick={() => viewDetail(index)}
              alt="movie"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
