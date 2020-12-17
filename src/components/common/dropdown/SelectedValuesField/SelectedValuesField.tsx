import arrayMove from "array-move";
import React, { useEffect, useState } from "react";
import { ItemChipProps } from "../../listchips/ItemChip/ItemChip";
import { SortableChipList } from "../../sortablelist/SortableChipList";
import "./SelectedValuesField.css";

type SelectedValuesFieldProps = {
  items: ItemChipProps[];
  onChange?: Function;
  templateText?: String;
};

/**
 * The field that contains a dropdown's selected values.
 */
export const SelectedValuesField = (props: SelectedValuesFieldProps) => {
  const [items, updateItems] = useState(props.items);

  const NoOptionsSelected = () => {
    return (
      <p id="templateText">{props.templateText ? props.templateText : ""}</p>
    );
  };

  const onSortEnd = (
    { oldIndex, newIndex }: { oldIndex: number; newIndex: number },
    e: any
  ) => {
    updateItems((prevItems: ItemChipProps[]) => {
      return arrayMove(prevItems, oldIndex, newIndex);
    });
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div
      className="selected-values-field"
      onClick={() => console.log("ClickedContainer")}
    >
      {props.items.length === 0 ? (
        <NoOptionsSelected />
      ) : (
        <SortableChipList items={items} onItemsSorted={onSortEnd} />
      )}
    </div>
  );
};
