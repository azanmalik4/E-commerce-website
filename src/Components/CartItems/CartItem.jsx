import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext2 } from "../../Context/ShopContext2";
import remove from "../../assets/remove.webp";
const CartItem = () => {
  const { all_product, cartItems, getTotalCartAmount, removeFromCart } = useContext(ShopContext2);
  return (
    <div className="cartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove}
                  alt=""
                  onClick={() => removeFromCart(e.id)}
                  height="20px"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>CART TOTALS</h1>
          <div>
            <div className="cartitems-totalitem">
              <p>Subtotal</p>
              <p>${getTotalCartAmount}</p>
            </div>
            <hr />
            <div className="cartitems-totalitem">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-totalitem">
              <p>Total</p>
              <p>${getTotalCartAmount}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here: </p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <div><button>Checkout</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
