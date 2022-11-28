import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = () => {
  const images = [
    "/image/iphone12.jpg", "/image/iphone12pro.jpg"
  ]

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <div className='product'>
      <>
        <div className="left">
          <div className="images">
            <img src={images[0]} alt='' onClick={() => setSelectedImg(0)} />
            <img src={images[1]} alt='' onClick={() => setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt='' />
          </div>
        </div>
        <div className="right">
          <h1>Title</h1>
          <span className='price'>$ 25</span>
          <p>Description</p>

          <div className="quantity">
            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
              -
            </button>
            <h2>{quantity}</h2>
            <button onClick={(() => setQuantity((prev) => (prev + 1)))}>
              +
            </button>
          </div>

          <button className='add'>
            <AddShoppingCartIcon /> ADD TO CART
          </button>

          <div className="links">
            <div className="item" onClick={() => setLiked((prev) => (!prev))}>
              {liked ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)} ADD TO WISH LIST
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Product