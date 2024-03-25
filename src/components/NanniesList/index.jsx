import React from "react";
import NanniesListStyled from "./NanniesListStyled";
import NannyItem from "./NanyItem";

const NanniesList = ({ nanniesData, toggleModal }) => {
  return (
    <NanniesListStyled>
      <h2 className="is-hidden">Nannies List</h2>
      <ul className="nannies-list">
        {nanniesData.map((nanny) => {
          return (
            <NannyItem
              key={nanny.name}
              nannyData={nanny}
              toggleModal={toggleModal}
            />
          );
        })}
      </ul>
    </NanniesListStyled>
  );
};

export default NanniesList;
