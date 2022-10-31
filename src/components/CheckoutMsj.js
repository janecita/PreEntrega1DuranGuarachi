import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
export default function CheckoutMsj({ orderId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onclose = () => {
    setShow(false);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Confirmar Compra
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Completa tus datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="modal-body">
              <div className="py-12">
                <h1 className="text-lg font-bold pb-7">
                  {" "}
                  Gracias por tu compra:
                </h1>
                <p>
                  Te enviaremos un correo cuando tu pedido salga de nuestro
                  almacén.
                </p>
                <p className="py-2">
                  Tu código de referencia es:{" "}
                  <span className="font-bold">2omDHLBYn3mb3eGfO3pQ</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/productos/`}>
            <Button variant="dark" onClick={onclose}>
              Aceptar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
