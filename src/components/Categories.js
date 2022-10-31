import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
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
          return (
            <NavDropdown.Item href={`/productos/categoria/${item.name}`} >
                          {item.name}
            </NavDropdown.Item>
          );
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
