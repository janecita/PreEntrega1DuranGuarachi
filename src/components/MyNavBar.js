import React from "react";
import {
  Collapse,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";
import Categories from "./Categories";

export default function MyNavBar() {
  const items = [
    { name: "Celulares" },
    { name: "Camaras" },
    { name: "Alarmas" },
  ];
  return (
    <Navbar color="primary" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/">
          <CartWidget />
          Ecommerce Company 
        </NavbarBrand>
      </div>

      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <a href="/home" className="nav-link">
              Inicio
            </a>
          </NavItem>
          <NavItem>
            <a href="/productos" className="nav-link">
              Productos
            </a>
          </NavItem>
          <Categories items={items} title={"Categorias"}></Categories>
        </Nav>
        <DropdownToggle color="primary">
          <CartWidget />
        </DropdownToggle>
      </Collapse>
    </Navbar>
  );
}
