import React, { ChangeEvent } from "react";
import { SelectableItemProps } from "../SelectableItem/SelectableItem";
import "./CheckboxMenu.css";

type SelectionMenuProps = {
  items: SelectableItemProps[];
  onSelectionChange: (items: SelectableItemProps[]) => void;
};

type CheckboxMenuProps = SelectionMenuProps & {};

export const CheckboxMenu = (props: CheckboxMenuProps) => {
  const Toggle = (e: ChangeEvent<HTMLInputElement>) => {
    props.items.forEach((item) => {
      if (item.value === e.target.value) {
        item.isSelected = e.target.checked;
      }
    });

    props.onSelectionChange(props.items);
  };

  return (
    <div data-testid="dropdown-menu" className="dropdown-checkbox-menu">
      {props.items.map((i, index) => {
        return (
          <div className="checkbox-item" key={"item-" + index}>
            <input
              className="checkbox"
              type="checkbox"
              value={i.value}
              name={i.value}
              id={i.value}
              onChange={(e) => Toggle(e)}
              checked={i.isSelected}
            />
            <label className="checkbox-label">{i.value}</label>
          </div>
        );
      })}
    </div>
  );
};
