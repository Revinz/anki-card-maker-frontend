import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Dropdown from "../../../../components/common/dropdown/DropDown";
afterEach(cleanup);

describe("Drop Down", () => {
  describe("Rendering", () => {
    it("Starts with no selected items should render no items in the selected box", () => {
      const wrapper = render(<Dropdown items={[]} />);
      const selectedItems = wrapper.queryAllByTestId("selected-item-chip");
      expect(selectedItems.length).toBe(0);
    });

    it("Starts with selected items should render selected items in the selected box", () => {
      const wrapper = render(
        <Dropdown
          items={[
            {
              value: "testOption1",
              isSelected: true,
            },
          ]}
        />
      );
      const selectedItems = wrapper.queryAllByTestId("selected-item-chip");

      expect(selectedItems.length).toBe(1);
    });

    it("Title is rendered when specified", async () => {
      const wrapper = render(<Dropdown title="TestTitle" items={[]} />);
      const title = await wrapper.findByText("TestTitle");
      expect(title).toHaveTextContent("TestTitle");
    });

    it("Placeholder text defaults to 'No options have been selected.' when not specified", async () => {
      const wrapper: any = render(<Dropdown items={[]} />);
      const expectedText = "No options have been selected.";
      const placeholderText = await wrapper.findByText(expectedText);
      expect(placeholderText).toHaveTextContent(expectedText);
    });

    it("Correct placeholder text is used when specified", async () => {
      const wrapper: any = render(
        <Dropdown templateText="Test Placeholder Text" items={[]} />
      );
      const expectedText = "Test Placeholder Text";
      const placeholderText = await wrapper.findByText(expectedText);
      expect(placeholderText).toHaveTextContent(expectedText);
    });
  });

  describe("Interactions", () => {
    it("Clicking Selected values box opens dropdown menu", async () => {
      const wrapper = render(<Dropdown items={[]} />);

      const selectedValuesField = await wrapper.findByTestId(
        "selected-values-field"
      );

      userEvent.click(selectedValuesField);

      await wrapper.findByTestId("dropdown-menu");
    });

    it("Deselecting item from the selected values box removes it", async () => {
      const wrapper = render(
        <Dropdown items={[{ value: "testOption1", isSelected: true }]} />
      );
      const deselectItemBn = await wrapper.findByTestId(
        "selected-item-chip-deselect-bn"
      );

      userEvent.click(deselectItemBn);

      const remainingItemChips = wrapper.queryAllByTestId("selected-item-chip");
      expect(remainingItemChips.length).toBe(0);
    });

    it("Deselecting item from the dropdown menu removes it from the selected values box", async () => {
      const wrapper: any = render(
        <Dropdown
          startOpened={true}
          items={[{ value: "testOption1", isSelected: true }]}
        />
      );
      const checkbox = await wrapper.findByRole("checkbox");

      userEvent.click(checkbox);

      const remainingItemChips = wrapper.queryAllByTestId("selected-item-chip");
      expect(remainingItemChips.length).toBe(0);
    });

    it("Selecting item from the dropdown menu adds it to the selected values box", async () => {
      const wrapper: any = render(
        <Dropdown
          startOpened={true}
          items={[{ value: "testOption1", isSelected: false }]}
        />
      );
      const checkbox = await wrapper.findByRole("checkbox");

      userEvent.click(checkbox);

      const remainingItemChips = wrapper.queryAllByTestId("selected-item-chip");
      expect(remainingItemChips.length).toBe(1);
    });
  });
});
