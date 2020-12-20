import { SortableElement } from "react-sortable-hoc";
import "./ItemChip.css";
import { ReactComponent as DeleteIcon } from "./delete.svg";
import { SelectableItemProps } from "../../dropdown/SelectableItem/SelectableItem";

export interface ItemChipProps {
  item: SelectableItemProps;
  onItemDeselect: (itemToDelete: SelectableItemProps) => void;
  optional?: any;
}

export const ItemChip = (props: ItemChipProps) => {
  const Deselect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (props.onItemDeselect) props.onItemDeselect(props.item);
  };

  return (
    <li className="item-chip" tabIndex={0}>
      <div>
        <span id={"value"}>{props.item.value}</span>
        <button id={"deleteBn"} onClick={(e) => Deselect(e)}>
          <DeleteIcon id={"deleteIcon"} />
        </button>
      </div>
    </li>
  );
};

export const SortableItemChip = SortableElement(ItemChip);
