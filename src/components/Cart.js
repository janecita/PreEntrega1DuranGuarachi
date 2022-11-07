import { Button, Table } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addSingleDoc } from "../service/getFirestore";
import Checkout from "./Checkout";
export default function Cart() {
  const { cartList, setCartList, totalCart } = useCartContext();

  const clearItem = () => {
    setCartList([]);
  };
  const handleSeguirComprando = () => {
    addSingleDoc(JSON.stringify(useCartContext.value), "compra");
  };
  return (
    <div align="center">
      <h1 className="mt-5 p-1">Carrito de compras</h1>
      <Table striped bordered hover style={{ width: "80%", align: "center" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Precio Unit</th>
            <th>SubTotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt="Imagen"
                  className="shadow-lg"
                  style={{ height: 100 }}
                />
              </td>
              <td className="align-middle">{product.quantity}</td>
              <td className="align-middle" style={{ width: "300px" }}>
                {product.description}
              </td>
              <td className="align-middle">
                {Intl.NumberFormat("es-AR", {
                  currency: "ARS",
                  style: "currency",
                }).format(product.price)}
              </td>
              <td className="align-middle">
                {Intl.NumberFormat("es-AR", {
                  currency: "ARS",
                  style: "currency",
                }).format(product.quantity * product.price)}
              </td>
              <td
                className="bi bi-trash-fill align-middle fs-4"
                onClick={() => clearItem(product.id)}
              ></td>
            </tr>
          ))}
          <tr>
            <td className="fw-bold">Cant.Unidades:</td>
            <td className="fw-bold">{cartList.quantity}</td>
            <td></td>
            <td className="fw-bold">TOTAL COMPRA</td>
            <td className="fw-bold">
              {Intl.NumberFormat("es-AR", {
                currency: "ARS",
                style: "currency",
              }).format(totalCart())}
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Checkout orderId={"2omDHLBYn3mb3eGfO3pQ"} ordenProcess={false} />
      <Link to={`/productos/`}>
        <Button variant="dark" onClick={handleSeguirComprando}>
          Seguir Comprando
        </Button>
      </Link>
    </div>
  );
}
