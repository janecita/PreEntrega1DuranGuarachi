import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

//import {doc,getDoc,getFirestore} from "firebase/firestore"

export default function ItemDetailContainer() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const { cartList, setCartList}= useCartContext()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((value) => {
        setProduct(value);
      });
  }, []);
  const onAdd = (count) => {

//------
    product.quantity = count;
    let newCartList= cartList
    newCartList.push(product)
    setCartList(newCartList)
	}
  return (
    <div align="center">
      <Card
        style={{ width: "800px", align:"center" }}
        className="mt-5 shadow p-3 mb-5 bg-white rounded"
      >
        <div align="center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "200px" }}
            alt="All Store"
            loading="lazy"
          />
        </div>
        <Card.Body>
          <Card.Title className="text-center">{product.title}</Card.Title>
          <Card.Text className="text-center h-5" style={{"overflowY": "auto", "overflowX": "hidden"}}>
             {product.description} 
          </Card.Text>
          <Card.Text className="text-center">
            {" "}
            Stock: {product.rating ? product.rating.count : 0}{" "}
          </Card.Text>
          <Card.Text className="text-center">
            Precio: {product.price} Bs.
          </Card.Text>

          <div className="text-center">
                  <ItemCount stock={product.rating ? product.rating.count : 0 } initial={1} onAdd={onAdd} />
          </div>
        
        
          <div className="text-center">
            <br></br>
            <Link to={`/productos/`}>
              <Button className="btn btn-dark btn-sm text-center classes.center">
                {" "}
                Volver
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
      </div>
  );
}
