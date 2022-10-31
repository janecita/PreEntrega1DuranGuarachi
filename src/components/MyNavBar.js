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
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function MyNavBar() {
  const { itemsCart } = useCartContext();
  const items = [
    { name: "electronics" },
    { name: "jewelery" },
    { name: "men's clothing" },
    { name: "women's clothing" },
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
            <a href="/" className="nav-link">
              Inicio
            </a>
          </NavItem>
          <NavItem>
            <a href="/productos" className="nav-link">
              Productos
            </a>
          </NavItem>
          <Categories
            items={items}
            className="nav-items"
            title={"Categorias"}
          ></Categories>
        </Nav>
        <DropdownToggle color="primary">
          <CartWidget />
          <Link to="/cart">
            <Button>{itemsCart() !== 0 && itemsCart()}</Button>
          </Link>
        </DropdownToggle>
      </Collapse>
    </Navbar>
  );
}
