import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  createEvent,
  prettyDOM,
  waitFor,
} from "@testing-library/react";
import TestUtils, { act } from "@testing-library/react";
import { SortableChipList } from "../../../../components/common/sortablelist/SortableChipList";
import { KeyCodes } from "../../../test-utils/KeyCodes";
import ReactDOM from "react-dom";

jest.setTimeout(5000);
afterEach(cleanup);

xdescribe("Renders", () => {
  xdescribe("Items renders Correctly", () => {
    xit("Should render items when passed in as prop", () => {
      const document = render(
        <SortableChipList
          items={[{ value: "Option1" }, { value: "Option2" }]}
        />
      );
      const texts = document.getAllByText("Option", { exact: false });
      const textContents = texts.map((item) => {
        return item.textContent;
      });
      expect(textContents).toMatchObject(["Option1", "Option2"]);
    });

    xit("Should render no items when passing empty items array", () => {
      const document = render(<SortableChipList items={[]} />);
      const texts = document.queryAllByText("Option1", { exact: false });
      const textContents = texts.map((item) => {
        return item.textContent;
      });
      expect(textContents).toMatchObject([]);
    });
  });

  /***
   * @NotApplicableAnyMore
   * 
   * Unable to test interactions due react-sortable-hoc
   * not supporting dispatchEvents (ReactDOM and JestDOM at least)
   * Might work in a non-headless browser, but not something I want to bother with just for testing a few interactions.
   *
   * I can also get it working in browser just fine with event dispatching with eg.
   * item-chip-element.dispatchEvent(
        new KeyboardEvent("keydown", {
          keyCode: 32,
          bubbles: true,
        })
      );
   */

  xdescribe("Interactions", () => {
    xit("Sorting triggers callback function", async () => {
      // ARRANGE
      const mockFn = jest.fn(() => {
        console.log("Test callback");
      });
      const sortableList = render(
        <SortableChipList
          items={[{ value: "Option1" }, { value: "Option2" }]}
          onItemsSorted={mockFn}
        />
      );

      // ACT
      const chip = document.querySelectorAll(".item-chip")[0];
      chip.dispatchEvent(
        new KeyboardEvent("keydown", { keyCode: 32, bubbles: true })
      );

      console.log(prettyDOM(document));

      // ASSERT
      expect(mockFn).toBeCalled();
    });
  });
});
