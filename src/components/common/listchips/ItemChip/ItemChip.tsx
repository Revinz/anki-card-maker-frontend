import { useState } from "react";
import { SortableElement } from "react-sortable-hoc";
import "./ItemChip.css"

export interface ItemChipProps {
  value: String | Number
  optional? : any
}

export const ItemChip = (props : ItemChipProps) => {
  const [testState, setTestState] = useState("TestState")
  return (
    <li className="item-chip">
    {props.value}
  </li>
  )
} 

export const SortableItemChip = SortableElement(ItemChip)