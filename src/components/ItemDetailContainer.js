import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"


export default function ItemDetailContainer() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const productId = params.id;
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${productId}`)
      .then((res) => res.json())
      .then((value) => {
        setProduct(value);
      });
  });

  return (
    <>
      <Card
        style={{ width: "16rem" }}
        className="mt-5 shadow p-3 mb-5 bg-white rounded"
      >
        <Card.Img
          variant="top"
          src={product.image}
          alt="Electronics Store"
          loading="lazy"
        />
        <Card.Body>
          <Card.Title className="text-center">{product.name}</Card.Title>
          <Card.Text className="text-center"> Stock {product.id + 5} </Card.Text>
          <Card.Text className="text-center">Precio {product.id + '00'} Bs.</Card.Text>
          <div className="text-center" >
          <Link  to={`/productos/`}>
            
              <button  className="btn btn-success btn-sm text-center classes.center"> Volver</button>
            </Link> 
            </div>
        </Card.Body>
      </Card>
    </>
  );
}
