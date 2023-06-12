import React, {useContext} from 'react'
import './Cart.css'
import { ShopContext } from '../../context/Shop-context'
import { PRODUCTS } from '../../products'
import CartItem from './Cart-item'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) =>{
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>

       {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
export default Cart