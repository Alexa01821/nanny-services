import React from "react";
import NanniesListStyled from "./NanniesListStyled";
import NannyItem from "./NanyItem";
import { nanoid } from "nanoid";

const NanniesList = ({ nanniesData, toggleModal }) => {
  return (
    <NanniesListStyled>
      <h2 className="is-hidden">Nannies List</h2>
      <ul className="nannies-list">
        {nanniesData.map((nanny) => {
          return (
            <NannyItem
              key={nanoid()}
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
