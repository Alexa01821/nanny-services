import Select from "react-select";
import optionsToFilter from "./filterOption";
import FiltersStyled from "./FiltersStyled";
import getCustomStyles from "./customsFiltersStyled";

const Filters = ({ getSelectedFilter, select }) => {
  return (
    <FiltersStyled>
      <h2 className="section-title">Filters</h2>
      <Select
        id="nameSelect"
        onChange={getSelectedFilter}
        options={optionsToFilter}
        styles={getCustomStyles()}
        className="select"
        placeholder="Enter the filter"
        aria-label="Filter nanny"
        defaultValue={optionsToFilter[0]}
      />
    </FiltersStyled>
  );
};

export default Filters;
