import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
const [cartList, setCartList] = useState([]);
 
  
  useEffect(() => {
    //llamar al firebase
  }, [cartList]);

  //	Función para adicionar el item a cartList si no está en el carrito
  function addItem(items) {
    setCartList(cartList.push(items));
  }

  // 	Función para sumar la cantidades de items que tiene el carrito
  const itemsCart = () => {
    return  cartList.reduce((prev, item) => prev + item.quantity, 0);
  };


  // Funcion para poner a cero el carrito
  const clearCart = () => {
    setCartList([]);
  };

  // Funcion para eliminar un item del carrito
  const clearItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  //Funcion para totalizar el Carrito
  const totalCart = () => {
    return cartList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addItem,
        itemsCart,
        clearCart,
        totalCart,
        clearItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
