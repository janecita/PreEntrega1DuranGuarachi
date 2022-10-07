import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="container col">
      <Card
        style={{ width: "16rem" }}
        className="mt-5 shadow p-3 mb-5 bg-white rounded"
      >
        <Link to={`/productos/${item.id}`}>
          <Card.Img
            variant="top"
            src={item.image}
            alt="Electronics Store"
            loading="lazy"
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-center m-2">{item.title}</Card.Title>
          <Card.Text className="text-center">
            Stock: {item.rating.count}
          </Card.Text>
          <Card.Text className="text-center">
            Precio: {item.price} Bs.
          </Card.Text>
          <Link to={`/productos/${item.id}`}>
            <button className="btn btn-success btn-sm">+ Info</button>
          </Link>
          <Card.Text className="text-center m-2">
            Categoria: {item.category}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
