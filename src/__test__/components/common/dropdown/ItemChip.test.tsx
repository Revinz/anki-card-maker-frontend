import { cleanup, render } from "@testing-library/react";
import React from "react";
import { ItemChip } from "../../../../components/common/listchips/ItemChip/ItemChip";
afterEach(cleanup);

describe("Item Chip", () => {
  describe("Rendering", () => {
    it("Should render item-chip with value", () => {
      const document = render(
        <ItemChip
          item={{
            value: "TestValue",
            isSelected: false,
          }}
        />
      );
      const texts = document.getAllByText("TestValue", { exact: false });
      expect(texts[0].textContent).toBe("TestValue");
    });
  });
});
