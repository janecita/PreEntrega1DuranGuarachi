import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from 'react';


export default function ItemListContainer() {
  const [listaMorty, setlistaMorty] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((value) => {
        setlistaMorty(value);
      });
  }, []);

  return (
    <div>
      <h2 > PRODUCTOS  </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-4 mb-5 text-center">
					<ItemList items={listaMorty} />
				</div>
    </div>
  );
}
