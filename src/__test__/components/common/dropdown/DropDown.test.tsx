import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";
import { render, cleanup } from "@testing-library/react";
import ReactTestUtils, {
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass,
} from "react-dom/test-utils";
import { ItemChip } from "../../../../components/common/listchips/ItemChip/ItemChip";
import Dropdown from "../../../../components/common/dropdown/DropDown";
import userEvent from "@testing-library/user-event";
afterEach(cleanup);

describe("Drop Down", () => {
  describe("Rendering", () => {
    xit("Starts with no selected items should render no items in the selected box", () => {
      const wrapper: any = TestUtils.renderIntoDocument(
        <Dropdown title={"TestTitle"} items={[]} />
      );

      throw new Error("Not implemented.");
    });

    it("Starts with no selected items should render no items in the selected box", () => {
      const wrapper: any = TestUtils.renderIntoDocument(
        <Dropdown items={[]} />
      );
      const node = scryRenderedDOMComponentsWithClass(wrapper, "item-chip");
      expect(node.length).toBe(0);
    });

    it("Starts with selected items should render selected items in the selected box", () => {
      const wrapper: any = TestUtils.renderIntoDocument(
        <Dropdown
          items={[
            {
              value: "testOption1",
              isSelected: true,
            },
            {
              value: "testOption2",
              isSelected: true,
            },
          ]}
        />
      );
      const node = scryRenderedDOMComponentsWithClass(wrapper, "item-chip");
      expect(node.length).toBe(2);
    });
  });

  describe("Interactions", () => {
    it("Clicking Selected values box opens dropdown menu", () => {
      const wrapper: any = TestUtils.renderIntoDocument(
        <Dropdown items={[]} />
      );
      const selectedValsField = scryRenderedDOMComponentsWithClass(
        wrapper,
        "selected-values-field"
      );
      userEvent.click(selectedValsField[0]);
      const dd_menu = scryRenderedDOMComponentsWithClass(
        wrapper,
        "dropdown-checkbox-menu"
      );
      expect(dd_menu.length).toBe(1);
    });
  });
});
