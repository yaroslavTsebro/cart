import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ProductList } from "../../components/ProductList/ProductList";
import { CartProvider } from "../../context/cart/cart-context";
import "./Shop.scss";

export function Shop() {
  return (
    <CartProvider>
      <div className="page">
        <Header />
        <ProductList />
        <Footer />
      </div>
    </CartProvider>
  );
}
