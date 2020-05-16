import React from "react";
import { components } from "react-select";
import { DD_TARGET_HEIGHT } from "../../constants";
import dd_indic from "../../assets/dropdown_indicator.svg";

export const customStyles = {
  indicatorSeparator: () => {},
  dropdownIndicator: defaultStyles => ({
    ...defaultStyles,
    color: "black",
    padding: `${(DD_TARGET_HEIGHT - 20 - 1 - 1) / 2}px`
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      state.isFocused || state.isSelected
        ? "rgba(213, 215, 229, 0.3)"
        : "white",
    color: state.isSelected ? "black" : "black"
  }),
  control: base => ({
    ...base,
    minHeight: "initial"
  }),
  valueContainer: base => ({
    ...base,
    height: `${DD_TARGET_HEIGHT - 1 - 1}px`,
    padding: "0 20px"
  }),
  clearIndicator: base => ({
    ...base,
    padding: `${(DD_TARGET_HEIGHT - 20 - 1 - 1) / 2}px`
  })
};

export const options = [
  { value: 0, label: "Default" },
  { value: 1079798, label: "Street Art" },
  { value: 1065976, label: "Wallpapers" },
  { value: 327760, label: "Nature" },
  { value: 3330445, label: "Textures & Patterns" },
  { value: 281665, label: "Architecture" }
];

export const DropdownIndicator = (
  props: ElementConfig<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={dd_indic} alt="dropdown arrow" />
    </components.DropdownIndicator>
  );
};
