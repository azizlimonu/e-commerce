import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../app/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { apiRequest } from '../../apiRequest';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  console.log("product:",products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  // =====================================================//
  const stripePromise = loadStripe(
    "pk_test_51M7dnAC1otF9MVrv9uv68jaddz6ft5GLxqstmzZrVRnf2gWgDfdzX1BBBvBcRmILepTV5486TikaGD7vrQ8qnfD90002FLyO9x"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await apiRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      
    } catch (err) {
      console.log(err);
    }
    console.log("Payment Triggered")
  }
  // =====================================================//
  
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />

          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>

          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />

        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>

      <button onClick={handlePayment}>
        PROCEED TO CHECKOUT
      </button>

      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>

    </div>
  );
}

export default Cart