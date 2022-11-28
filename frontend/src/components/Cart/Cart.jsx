import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shirt",
      desc:"llsakhd ksajhd kasjg ksajdh hsakj dgsakhj dgsa hsavjh sahkj dsa",
      oldPrice: "19",
      price: "12",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Short",
      desc:"llsakhd ksajhd kasjg ksajdh hsakj dgsakhj dgsa hsavjh sahkj dsa",
      oldPrice: "39",
      price: "9",
    }
  ]

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 50)}</p>
            <div className="price">
              {item.quantity ? item.quantity : 1} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
          // onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$20</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
    </div>
  );
}

export default Cart