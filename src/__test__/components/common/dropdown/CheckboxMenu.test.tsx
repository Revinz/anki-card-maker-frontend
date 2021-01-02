import { cleanup, render } from "@testing-library/react";
import React from "react";
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
