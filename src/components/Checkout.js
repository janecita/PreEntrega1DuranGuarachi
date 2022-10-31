import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CheckoutMsj from "./CheckoutMsj";
export default function Checkout({ orderId }) {
  const { cartList, setCartList } = useCartContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onCheckout = () => {
    clearItem();
    setShow(false);
  };
  const clearItem = () => {
    setCartList([]);
  };
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Completa tus datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Nombre
              </Form.Label>
              <Col sm={11}>
                <Form.Control placeholder="Nombre y Apellido" name="name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Telefono
              </Form.Label>
              <Col sm={11}>
                <Form.Control placeholder="Telefono" name="phone" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                email
              </Form.Label>
              <Col sm={11}>
                <Form.Control placeholder="@email" name="email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Reingresar
              </Form.Label>
              <Col sm={11}>
                <Form.Control placeholder="repetir email" name="email2" />
              </Col>
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={`/productos/`}>
            <Button variant="dark" onClick={onCheckout}>
              Confirmar Compra
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
