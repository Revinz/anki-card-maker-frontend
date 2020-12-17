import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import { ItemChip } from "../../../../components/common/listchips/ItemChip/ItemChip";
jest.setTimeout(5000);
afterEach(cleanup);

describe("Renders", () => {
  describe("Selected items", () => {
    it("Should render item-chip with value", () => {
      const document = render(
        <ItemChip value={"TestValue"}
          
        />
      );
      const texts = document.getAllByText("TestValue", { exact: false });
      const textContents = texts.map((item) => {
        return item.textContent;
      });
      expect(textContents).toMatchObject(["TestValue"]);
    });

  describe("Interactions", () => {
    xit("Should call delete callback when clicking delete", (done) => {
      throw new Error("Not implemented.");
    });
  });
});
