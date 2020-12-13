import React from "react";
import SelectedListContainer from "./SelectedContainer/SelectedListContainer";

type DropdownProps = {
    title?: string,
    items: string[],
    height?: Number,
    width?: Number,
    templateText?: string,
    disabled?: boolean
}

export default class Dropdown extends React.Component<DropdownProps> {
    constructor(props : DropdownProps) {
        super(props)


    
        this.state = {
            selected: undefined,
            disabled: false,
        }
    }   

    disable() {
        console.log("Disabled")
        this.setState({disabled: true})
    }

    render() {
        return(
            <SelectedListContainer items={[{value: "Test"}, {value: "Test2"}]}/>
            )
    }
    
}