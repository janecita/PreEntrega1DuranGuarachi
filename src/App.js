import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import MyNavBar from "./components/MyNavBar";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <div className="appHeader p-5">
      <Router>
        <MyNavBar />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <HomeContainer
                greeting={
                  "COMPAÑIA DE VENTA DE ARTICULOS"
                }
              />
            }
          />
          <Route
            exact
            path="/productos"
            element={
              <ItemListContainer></ItemListContainer>
            }
          />
          <Route exact path="/productos/:id" element={<ItemDetailContainer></ItemDetailContainer>} />

          {/*	<Route exact path="/" component={ <ItemListContainer  itemNames={itemNames}      greeting={"Juan"} ></ItemListContainer>} />
							<Route exact path="/category/:categoryId" component={ItemListContainer} />
							<Route exact path="/item/:itemId" component={ItemDetailContainer} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/us" component={UsContainer} />
							<Route exact path="/contact" component={ContactContainer} />
							<Route exact path="/gallery" component={GalleryContainer} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
