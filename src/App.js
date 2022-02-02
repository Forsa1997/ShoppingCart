import "./App.css";
import CartHeader from "./components/CartHeader";
import CartItem from "./components/CartItem";
import CartFooter from "./components/CartFooter";
import CartItemComponent from "./components/CartItemComponent";

const currentYear = new Date().getFullYear();

function App() {
  return (
    <div>
      <CartHeader />
      <CartItemComponent />
      <CartFooter copyright="&copy;" year={currentYear} />
    </div>
  );
}

export default App;
