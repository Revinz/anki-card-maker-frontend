import React from "react";
import Dropdown from "../../components/common/dropdown/DropDown";
import { SelectableItemProps } from "../../components/common/dropdown/SelectableItem/SelectableItem";
import { Section } from "../../components/common/section/section";
import cloneDeep from "lodash.clonedeep";

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
  { value: "testOption1", isSelected: true },
];

export default class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Section title="Anki">
          <Dropdown title="Deck" items={cloneDeep(selectableItems)}></Dropdown>
          <Dropdown
            title="Card type"
            items={cloneDeep(selectableItems)}
          ></Dropdown>
        </Section>
        <Section
          title="Select the desired elements for each card field."
          description="Fields can be made blank by not selecting anything."
        >
          <Dropdown
            title="Field 1"
            items={cloneDeep(selectableItems)}
          ></Dropdown>
          <Dropdown
            title="Long Ass Field Name"
            items={cloneDeep(selectableItems)}
          ></Dropdown>
          <Dropdown
            title="Field 3"
            items={cloneDeep(selectableItems)}
          ></Dropdown>
          <Dropdown
            title="Long Ass Field Name"
            items={cloneDeep(selectableItems)}
          ></Dropdown>
        </Section>
        <Section title="Words">
          <input type="text" placeholder="Enter english word"></input>
          <button>Generate Card</button>
        </Section>
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
