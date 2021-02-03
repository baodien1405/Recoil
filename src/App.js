import "./App.css";
import CartInfo from "./features/cart/components/CartInfo";
import ProductList from "./features/cart/components/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
      <CartInfo />
    </div>
  );
}

export default App;
