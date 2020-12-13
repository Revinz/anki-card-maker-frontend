import React from 'react';
import ReactDOM from "react-dom";
import { render,cleanup } from "@testing-library/react"
import ReactTestUtils from 'react-dom/test-utils';
import SortableChipList from '../../../components/common/sortablelist/SortableChipList';
jest.setTimeout(5000)
afterEach(cleanup)

describe("Renders", () => {
  describe("Items renders Correctly", () => {
    it("Should render items when passed in as prop", () => {
      const document = render(<SortableChipList items={[{value: "TestSelected1"}, {value: "TestSelected2"}]} />)
      const texts = document.getAllByText("TestSelected", {exact: false})
      const textContents = texts.map(item => {
        return item.textContent
      })
      expect(textContents).toMatchObject(["TestSelected1", "TestSelected2"])
    })

    it("Should render no items when passing empty items array", () => {
      const document = render(<SortableChipList items={[]} />)
      const texts = document.queryAllByText("TestSelected", {exact: false})
      const textContents = texts.map(item => {
        return item.textContent
      })
      expect(textContents).toMatchObject([])
    })
  });
});
