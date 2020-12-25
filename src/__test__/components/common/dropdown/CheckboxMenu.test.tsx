import React from "react";
import TestUtils, {
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass,
  Simulate,
} from "react-dom/test-utils";
import { render, cleanup } from "@testing-library/react";
import Dropdown from "../../../../components/common/dropdown/DropDown";
import { CheckboxMenu } from "../../../../components/common/dropdown/SelectionMenu/CheckboxMenu";
afterEach(cleanup);

describe("CheckBoxMenu", () => {
  describe("Rendering", () => {
    it("Renders items", () => {
      const wrapper = render(
        <CheckboxMenu
          onSelectionChange={() => null}
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
      const nodes = wrapper.getAllByText("testOption", {
        exact: false,
      });
      const textContents = nodes.map((n) => {
        return n.textContent;
      });
      expect(textContents).toMatchObject(["testOption1", "testOption2"]);
    });
  });

  xdescribe("Interactions", () => {});
});
