import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"


export default function ItemDetailContainer() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const productId = params.id;
  const url = `https://fakestoreapi.com/products/${productId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((value) => {
        setProduct({products: value});
      });
  },[]);

  return (
    <>
      <Card
        style={{ width: "16rem" }}
        className="mt-5 shadow p-3 mb-5 bg-white rounded"
      >
        <Card.Img
          variant="top"
          src={product.image}
          alt="All Store"
          loading="lazy"
        />
        <Card.Body>
          <Card.Title className="text-center">{product.title}</Card.Title>
          <Card.Text className="text-center"> Stock {product.title} </Card.Text>
          <Card.Text className="text-center">Precio {product.price} Bs.</Card.Text>
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
