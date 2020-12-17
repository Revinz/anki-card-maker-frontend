import React, { useState } from "react";
import { SortableContainer, SortEnd, SortEvent } from "react-sortable-hoc";
import arrayMove from "array-move";
import {
  SortableItemChip,
  ItemChipProps,
} from "../listchips/ItemChip/ItemChip";
import "./SortableChipList.css";

const SortableChipListContainer = SortableContainer(
  ({ items }: { items: ItemChipProps[] }) => {
    return (
      <div className="sortable-list-container">
        {items.map((item: ItemChipProps, index: number) => {
          return (
            <SortableItemChip key={"item-" + index} index={index} {...item} />
          );
        })}
      </div>
    );
  }
);

interface SortableChipListProps {
  items: ItemChipProps[];
  onItemsSorted: (sort: SortEnd, event: SortEvent) => void;
  templateText?: String;
}
/**
 *
 * A horizontal sortable chip list.
 *
 */

export const SortableChipList = (props: SortableChipListProps) => {
  return (
    <SortableChipListContainer
      items={props.items}
      onSortEnd={props.onItemsSorted}
      axis="xy"
      distance={1}
      helperClass="item-dragging"
      lockToContainerEdges={true}
    />
  );
};
