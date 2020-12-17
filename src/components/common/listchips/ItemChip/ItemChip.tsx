import { useState } from "react";
import { SortableElement } from "react-sortable-hoc";
import "./ItemChip.css";
import { ReactComponent as DeleteIcon } from "./delete.svg";

export interface ItemChipProps {
  value: String | Number;
  onDelete?: Function;
  optional?: any;
}

export const ItemChip = (props: ItemChipProps) => {
  const Delete = (e: React.MouseEvent) => {
    console.log("clickedDeleted");
    e.stopPropagation();

    if (props.onDelete) props.onDelete();
  };

  return (
    <li data-testid="item-chip" className="item-chip" tabIndex={0}>
      <div>
        <span id={"value"}>{props.value}</span>
        <span id={"deleteBn"} onClick={(e) => Delete(e)}>
          <DeleteIcon id={"deleteIcon"} />
        </span>
      </div>
    </li>
  );
};

export const SortableItemChip = SortableElement(ItemChip);
