import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import { SelectedValuesField } from "../../../../components/common/dropdown/SelectedValuesField/SelectedValuesField";
jest.setTimeout(5000);
afterEach(cleanup);

describe("Renders", () => {
  describe("Selected items", () => {
    it("Should render 1 selected item", () => {
      const document = render(
        <SelectedValuesField
          items={[{ value: "TestSelected1" }, { value: "TestSelected2" }]}
        />
      );
      const texts = document.getAllByText("TestSelected", { exact: false });
      const textContents = texts.map((item) => {
        return item.textContent;
      });
      expect(textContents).toMatchObject(["TestSelected1", "TestSelected2"]);
    });

    it("Should render template text when no items have been selected", () => {
      const document = render(
        <SelectedValuesField items={[]} templateText="TestTemplateText" />
      );
      const texts = document.getAllByText("TestTemplateText", { exact: true });
      expect(texts[0].textContent).toBe("TestTemplateText");
    });
  });

  describe("Interactions", () => {
    xit("Should open the selection menu when clicked", (done) => {
      throw new Error("Not implemented.");
    });
  });
});
