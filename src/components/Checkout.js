import React, { useState } from "react";
import { Button, Form, Col, Row, Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addSingleDoc } from "../service/getFirestore";
import { Fade } from "react-awesome-reveal";

export default function Checkout({ orderId, ordenProcess }) {
  const { cartList, setCartList, totalCart } = useCartContext();
  const [show, setShow] = useState(false);
  const [orderProcess, setOrderProcess] = useState(false);
  const handleShow = () => setShow(true);

  const onCheckout = () => {
    setOrderProcess(true);
    var today = new Date();
    var now = today.toLocaleString();
    const orden = {
      buyer: {
        name: "Test",
        phone: 70179670,
        email: "jane@test",
        date: now,
      },
      items: [
        {
          cartList,
        },
      ],
      total: totalCart(),
    };

    addSingleDoc(orden, "cart");
  };
  const handleClose = () => {
    orderProcess ? clearItem() : setShow(false);
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
          <Link to={`/cart/`}>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Link>
          <Button variant="dark" onClick={onCheckout}>
            Confirmar Compra
          </Button>

          {!orderProcess ? (
            <Modal.Body className="text-center text-success">
              <Spinner
                as="span"
                animation="border"
                role="status"
                aria-hidden="true"
                size="lg"
              />
              Procesando ...
            </Modal.Body>
          ) : (
            <>
              <Fade left opposite cascade>
                <Modal.Body className="bg-danger text-center text-white fw-normal">
                  {`La Orden se generó correctamente, muchas GRACIAS por su Compra!!! Para seguimiento de la misma tome nota del siguiente Número: ${orderId}`}
                </Modal.Body>
              </Fade>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
