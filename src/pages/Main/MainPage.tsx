import React from "react";
import Dropdown from "../../components/common/dropdown/DropDown";
import SortableChipList from "../../components/common/sortablelist/SortableChipList"

export default class MainPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Dropdown items={["Test1", "Test2"]}></Dropdown>
            </React.Fragment>
        )
    }
}