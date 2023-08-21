import { useCart } from "../../context/cart/cart-context";
import "./Header.scss";

export function Header() {
  const { state, dispatch } = useCart();
  const summary = state.cartItems.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  return <header className="header">Products in cart: {summary}</header>;
}
