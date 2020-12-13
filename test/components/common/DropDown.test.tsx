import React from 'react';
import ReactDOM from "react-dom";
import { render,cleanup } from "@testing-library/react"
import ReactTestUtils from 'react-dom/test-utils';
import DropDown from '../../../src/components/common/dropdown/DropDown';

afterEach(cleanup)

describe("Renders", () => {
  describe("Renders Options Correctly", () => {
    it("Renders the item's name as the option name", () => {
      const document = render(<DropDown items={["TestOption"]} />)
      const texts = document.getAllByText("TestOption")
      expect(texts.length).toBe(1)
    })
    it("Renders 1 option", () => {
      const document = render(<DropDown items={["TestOption"]} />)
      const texts = document.getAllByText("TestOption", {exact: false})
      expect(texts.length).toBe(1)
    })

    it("Renders 5 options", () => {
      const document = render(<DropDown items={["TestOption1", "TestOption2", "TestOption3", "TestOption4", "TestOption5" ]} />)
      const texts = document.getAllByText("TestOption", {exact: false})
      expect(texts.length).toBe(5)
    })

  });
});
