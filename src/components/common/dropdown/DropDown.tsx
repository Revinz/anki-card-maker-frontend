import React from "react";
import { SelectableItemProps } from "./SelectableItem/SelectableItem";
import { SelectedValuesField } from "./SelectedValuesField/SelectedValuesField";
import { CheckboxMenu } from "./SelectionMenu/CheckboxMenu";
import "./DropDown.css";

type DropdownProps = {
  items: SelectableItemProps[];
  title?: string;
  templateText?: String;
  startOpened?: boolean;
};

type DropdownState = {
  selectedItems: SelectableItemProps[];
  opened: boolean;
};

export default class Dropdown extends React.Component<
  DropdownProps,
  DropdownState
> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      selectedItems: this.getSelectedItems(props.items),
      opened: props.startOpened || false,
    };
  }

  openMenu(e: MouseEvent) {
    this.setState({ opened: !this.state.opened });
  }

  private getSelectedItems(
    items: SelectableItemProps[]
  ): SelectableItemProps[] {
    const selectedItems = this.props.items.filter((i) => {
      return i.isSelected;
    });
    return selectedItems;
  }

  updateItems(items: SelectableItemProps[]) {
    this.setState({
      selectedItems: this.getSelectedItems(items),
    });
  }

  render() {
    return (
      <div className="dropdown">
        {this.props.title ? (
          <label className="dropdown-label">{this.props.title}</label>
        ) : null}
        <div className="dropdown-selected-box">
          <SelectedValuesField
            onClick={this.openMenu.bind(this)}
            onSelectChange={this.updateItems.bind(this)}
            templateText={
              this.props.templateText
                ? this.props.templateText
                : "No options have been selected."
            }
            items={this.state.selectedItems}
          />
        </div>
        <div
          className={"dropdown-menu " + (this.state.opened ? "visible" : "")}
        >
          <CheckboxMenu
            items={this.props.items}
            onSelectionChange={this.updateItems.bind(this)}
          />
        </div>
      </div>
    );
  }
}
