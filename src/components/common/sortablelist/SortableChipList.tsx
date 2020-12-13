
import React, { Component } from "react";
import { SortableContainer, SortableElement} from "react-sortable-hoc";
import arrayMove from "array-move";
import {ItemChip, SortableItemChip, ItemChipProps} from "../listchips/ItemChip/ItemChip"
import "./SortableChipList.css"

const SortableChipListContainer = SortableContainer(({items} : {items : any}) => {
  console.log(items)
  return (
    <div className="sortable-list-container">
        {
          items.map((item : any, index : number) => {
            return (
              <SortableItemChip
                key={"item-" + index}
                index={index}
                {... item}
                />  
            )
          })
        }
    </div>
  );
});


interface SortableChipListState {
  items : ItemChipProps[]
}
/**
 * 
 * A horizontal sortable chip list.
 *
 */
export default class SortableChipList extends React.Component<SortableChipListState, SortableChipListState> {

    constructor(props : SortableChipListState) {
      super(props)
      this.state = props;
    }
    onSortEnd = ({oldIndex, newIndex}: {oldIndex: number, newIndex: number}) => {
      this.setState((state : SortableChipListState) => ({
        items: arrayMove(this.state.items, oldIndex, newIndex),
      }));
    };
    
    render() {
      return (
        <SortableChipListContainer
          items={this.state.items}
          onSortEnd={this.onSortEnd}
          axis="x"
          lockAxis="x"
          helperClass="item-dragging"
        />
      );
    }
}
  