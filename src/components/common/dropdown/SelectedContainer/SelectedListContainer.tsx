import React, { Component } from 'react'
import { ItemChipProps } from '../../listchips/ItemChip/ItemChip'
import SortableChipList from '../../sortablelist/SortableChipList'
import "./SelectedListContainer.css"

type SelectedListContainerProps = {
    items: ItemChipProps[]
    onChange? : Function
}

export default class SelectedListContainer extends Component<SelectedListContainerProps> {

    render() {
        return (
            <div className="selected-list-container" onClick={() => console.log("ClickedContainer")}>
                <SortableChipList items={this.props.items}/>
            </div>
        )
    }
}
