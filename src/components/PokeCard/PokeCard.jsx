import React from "react";

const PokeCard = ({ title, imgDefault, imgShiny, urlVideo }) => {
  return (
    <div className="cards">
      <h1 className="cards-title">{title}</h1>
      <div className="cards-body">
        <div className="cards-sprites">
          <img className="img-default" src={imgDefault} alt="default icon" />
          <img className="img-shiny" src={imgShiny} alt="icon shiny" />
        </div>
      </div>
      <div className="cards-footer">
        <a href={urlVideo} rel="noreferrer" target="_blank">
          Video
        </a>
      </div>
    </div>
  );
};

export default PokeCard;
