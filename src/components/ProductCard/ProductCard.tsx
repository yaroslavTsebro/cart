import React from "react";
import { CartReducerEnum, useCart } from "../../context/cart/cart-context";
import { Product } from "../../types/product";
import "./ProductCard.scss";

export function ProductCard(props: { product: Product }) {
  const { product } = props;
  const { state, dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: CartReducerEnum.ADD_TO_CART,
      payload: { id: product.id, amount: 1 },
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: CartReducerEnum.REMOVE_FROM_CART,
      payload: product.id,
    });
  };

  const productInCart = state.cartItems.find((item) => item.id === product.id);

  return (
    <div className="product_card product-card">
      <img src={product.image} className="product-card__image" alt="product" />
      <div className="product-card__title">{product.title}</div>
      <div className="product-card__actions">
        <div className=" product-card__action product-card__price">
          Price: {product.price}
        </div>
        {!productInCart ? (
          <button
            onClick={handleAddToCart}
            className="product-card__action product-card__button"
          >
            Add To Cart
          </button>
        ) : (
          <button
            onClick={handleRemoveFromCart}
            className="product-card__action product-card__button product-card__button-delete"
          >
            Delete from cart
          </button>
        )}
      </div>
    </div>
  );
}
