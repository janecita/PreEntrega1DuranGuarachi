import React from "react";
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

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
            <Card.Title className="text-center fs-6">Id: {item.id}</Card.Title>
            <Card.Title className="text-center">Stock {item.id + 5}</Card.Title>
            <Card.Title className="text-center">Precio {item.id + '00'} Bs.</Card.Title>
            <Link to={`/productos/${item.id}`}>
              <button className="btn btn-success btn-sm">+ Info</button>
            </Link> 
            <Card.Title className="text-center m-2">
              Stock {item.stock}
            </Card.Title>
          </Card.Body>
        </Card>
   </div>
  );
}
