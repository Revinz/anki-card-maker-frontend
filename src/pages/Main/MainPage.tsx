import React from "react";
import Dropdown from "../../components/common/dropdown/DropDown";
import { SelectableItemProps } from "../../components/common/dropdown/SelectableItem/SelectableItem";

import "./MainPage.css";

const selectableItems: SelectableItemProps[] = [
  {
    value: "Original Word",
    isSelected: false,
  },
  {
    value: "Translated Word",
    isSelected: false,
  },
  {
    value: "Audio",
    isSelected: false,
  },
  {
    value: "IPA",
    isSelected: false,
  },
  {
    value: "Image",
    isSelected: false,
  },
  {
    value: "Custom Text",
    isSelected: false,
  },
  {
    value: "Custom Image (URL)",
    isSelected: false,
  },
];

export default class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Dropdown items={selectableItems}></Dropdown>

        {/* Label to the left side of the dropdown
        <div className="test-side-label">
          <label>TestLabelSide </label>
          <Dropdown items={selectableItems}></Dropdown>
        </div>
        */}
      </React.Fragment>
    );
  }
}
