import arrayMove from "array-move";
import React, { useEffect, useState } from "react";
import { SortableChipList } from "../../sortablelist/SortableChipList";
import { SelectableItemProps } from "../SelectableItem/SelectableItem";
import "./SelectedValuesField.css";

type SelectedValuesFieldProps = {
  items: SelectableItemProps[];
  onSelectChange?: (updatedItems: SelectableItemProps[]) => void;
  onClick?: Function;
  templateText?: String;
};

/**
 * The field that contains a dropdown's selected values.
 */
export const SelectedValuesField = (props: SelectedValuesFieldProps) => {
  const [items, updateItems] = useState(props.items);
  useEffect(() => {
    updateItems(props.items);
  }, [props.items]);

  const NoOptionsSelected = () => {
    return (
      <p id="templateText">{props.templateText ? props.templateText : ""}</p>
    );
  };

  //TODO: Move into SortableChipList
  // Not part of this components responsibility
  // to take care of any form of sorting updating
  const onSortEnd = (
    { oldIndex, newIndex }: { oldIndex: number; newIndex: number },
    e: any
  ) => {
    updateItems((prevItems: SelectableItemProps[]) => {
      return arrayMove(prevItems, oldIndex, newIndex);
    });
  };

  const handleDeselect = (item: SelectableItemProps) => {
    const tmpItems = items;
    tmpItems.forEach((element) => {
      if (element.value === item.value) element.isSelected = false;
    });

    if (props.onSelectChange) props.onSelectChange(items);
  };

  return (
    <div
      className="selected-values-field"
      onClick={(e) => {
        if (props.onClick) props.onClick(e);
      }}
    >
      {props.items.length === 0 ? (
        <NoOptionsSelected />
      ) : (
        <SortableChipList
          items={items}
          onItemsSorted={onSortEnd}
          onItemDeselect={(item: SelectableItemProps) => handleDeselect(item)}
        />
      )}
    </div>
  );
};
