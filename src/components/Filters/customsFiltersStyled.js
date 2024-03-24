const getCustomStyles = () => ({
  control: (styles) => ({
    ...styles,
    width: "226px",
    height: "48px",
    padding: "6px 6px 6px 18px",
    border: "none",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
    borderRadius: " 14px",
    backgroundColor: "var(--bg-accent)  ",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "111%",
    "&, &:is(:hover, :focus)": {
      outline: "none",
      border: "none",
    },
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: "pointer",
      backgroundColor: "var(--bg-scrollbar-thumb)",
      color:
        isSelected || isFocused
          ? "var(--color-text-black)"
          : "var(--color-list)",
      paddingBottom: "12px",
      border: "none",
    };
  },

  menu: (styles) => ({
    ...styles,
    paddingTop: "14px",
    borderRadius: "14px",
  }),

  singleValue: (styles) => ({
    ...styles,
    color: "var(--color-text-white)",
    fontWeight: "500",
  }),

  dropdownIndicator: (provided, props) => ({
    ...provided,
    color: "var(--color-text-white)",
    transform: props.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  indicatorSeparator: () => ({}),

  container: (provided) => ({
    ...provided,
    border: `none`,
    borderRadius: "14px",
    outline: "none",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
    border: "none",
    margin: "0px",
  }),

  menuList: (base) => ({
    ...base,
    margin: "0px",
    padding: "0px",
    borderRadius: "14px",
    border: "none",
    paddingLeft: "6px",
    paddingTop: "8px",
    width: `calc(100% - 7px)`,
    "& > div:last-child": {
      paddingBottom: "12px",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--color-text-white)",
  }),
});

export default getCustomStyles;
