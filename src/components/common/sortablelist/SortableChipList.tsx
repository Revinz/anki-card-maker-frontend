import React, { SyntheticEvent, useState } from "react";
import { SortableContainer, SortEnd, SortEvent } from "react-sortable-hoc";
import { SortableItemChip } from "../listchips/ItemChip/ItemChip";
import "./SortableChipList.css";
import { SelectableItemProps } from "../dropdown/SelectableItem/SelectableItem";

const SortableChipListContainer = SortableContainer(
  ({
    items,
    onItemDeselect,
  }: {
    items: SelectableItemProps[];
    onItemDeselect: (item: SelectableItemProps) => void;
  }) => {
    // To prevent the dropdown menu opening after dragging an item
    const [dragging, updateDragging] = useState(true);
    const stopBubblingOnDrag = (e: SyntheticEvent) => {
      if (dragging) {
        e.stopPropagation();
        e.preventDefault();
        updateDragging(false);
      }
    };

    return (
      <div
        className="sortable-list-container"
        onMouseDown={() => {
          updateDragging(false);
        }}
        onMouseMove={() => {
          updateDragging(true);
        }}
        onClick={(e) => stopBubblingOnDrag(e)}
      >
        {items.map((item: SelectableItemProps, index: number) => {
          return (
            <SortableItemChip
              item={item}
              key={"item-" + index}
              index={index}
              onItemDeselect={(item) => onItemDeselect(item)}
              {...item}
            />
          );
        })}
      </div>
    );
  }
);

interface SortableChipListProps {
  items: SelectableItemProps[];
  onItemsSorted: (sort: SortEnd, event: SortEvent) => void;
  onItemDeselect?: (item: SelectableItemProps) => void;
  templateText?: String;
}

export const SortableChipList = (props: SortableChipListProps) => {
  return (
    <SortableChipListContainer
      items={props.items}
      onItemDeselect={(item) =>
        props.onItemDeselect ? props.onItemDeselect(item) : null
      }
      onSortEnd={props.onItemsSorted}
      axis="xy"
      distance={1}
      helperClass="item-dragging"
      lockToContainerEdges={true}
    />
  );
};
