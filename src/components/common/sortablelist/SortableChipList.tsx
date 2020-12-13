
import React from "react";
import { SortableContainer} from "react-sortable-hoc";
import arrayMove from "array-move";
import { SortableItemChip, ItemChipProps} from "../listchips/ItemChip/ItemChip"
import "./SortableChipList.css"

const SortableChipListContainer = SortableContainer(({items} : {items : ItemChipProps[]}) => {
  return (
    <div className="sortable-list-container">
        {
          items.map((item : ItemChipProps, index : number) => {
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

      this.state = {
        items: props.items
      }
    }
    onSortEnd = ({oldIndex, newIndex}: {oldIndex: number, newIndex: number}, e : any) => {
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
          distance={1}
          helperClass="item-dragging"
        
        />
      );
    }
}
  