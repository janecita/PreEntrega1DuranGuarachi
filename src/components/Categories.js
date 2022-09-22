import React from "react";
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

export default function Categories({ items, title }) {
  return (
    <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav>
        {title}
      </DropdownToggle>
      <DropdownMenu end>
        {items.map((item) => {
          return <DropdownItem>{item.name}</DropdownItem>;
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
