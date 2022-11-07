import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import MyNavBar from "./components/MyNavBar";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import HomeContainer from "./containers/HomeContainer";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <div className="appHeader p-5">
      <CartContextProvider>
        <Router>
          <MyNavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomeContainer greeting={"Bienvenidos a Ecommerce Company"} />
              }
            />
            <Route
              exact
              path="/productos"
              element={<ItemListContainer></ItemListContainer>}
            />
            <Route
              exact
              path="/productos/:id"
              element={<ItemDetailContainer></ItemDetailContainer>}
            />
            <Route
              exact
              path="/productos/categoria/:categoria"
              element={<ItemListContainer></ItemListContainer>}
            />

            <Route exact path="/cart" element={<Cart></Cart>} />
            <Route exact path="/checkout" element={<Checkout></Checkout>} />
            <Route path="*" element={<div> NOT FOUND</div>} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
