import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCollection,addSingleDoc } from "../service/getFirestore";

export default function ItemListContainer() {
  const [listaMorty, setlistaMorty] = useState([]);
  const params = useParams();
  const categoria = params.categoria;
  
  useEffect(() => {
    const res = getCollection(categoria ? `${categoria}`:'items')
    res.then((res)=>{
      setlistaMorty(res.docs.map((value)=>value.data()))
      });
}, [])

//*****************Para trabajar con la API***************
  // useEffect(() => {
  //   const url = categoria
  //     ? `https://fakestoreapi.com/products/category/${categoria}`
  //     : "https://fakestoreapi.com/products";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((value) => {
  //       setlistaMorty(value);
  //     });
  // }, []);
//**********************************************************
  return (
    <div>
      <h2>  </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-4 mb-5 text-center">
        <ItemList items={listaMorty} />
      </div>
      {/* <button onClick={handleSubirInfo}>agregar</button> */}
    </div>
  );
}
