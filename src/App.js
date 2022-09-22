import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import MyNavBar from "./components/MyNavBar";
const itemNames = [
  { name: "Audifono Sony" },
  { name: "Antena Wi-Fi" },
  { name: "Tv LG" },
];
function App() {
  return (
    <div>
      <header>
        <MyNavBar />
      </header>
      <main>
        <ItemListContainer
          itemNames={itemNames}
          greeting={"Janecita"}
        ></ItemListContainer>
      </main>
    </div>
  );
}

export default App;
