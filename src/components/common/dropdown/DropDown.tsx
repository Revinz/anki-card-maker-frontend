import React from "react";
import { SelectedValuesField } from "./SelectedValuesField/SelectedValuesField";

type DropdownProps = {
    title?: string,
    items: string[],
    height?: Number,
    width?: Number,
    disabled?: boolean,
    templateText?: String;
}

type DropdownState = {
    selectedItems : string[]
    disabled?: boolean
}

export default class Dropdown extends React.Component<DropdownProps, DropdownState > {
    constructor(props : DropdownProps) {
        super(props)
    
        this.state = {
            selectedItems: ["Test", "Test2"],
        }
    }   

    render() {
        return (
            <div>
                <SelectedValuesField templateText = { this.props.templateText ? this.props.templateText : "No options have been selected."}
                 items={ this.state.selectedItems.map(item => {
                    return {value: item}
                    })
                }/>
            </div>
            )
    }
    
}