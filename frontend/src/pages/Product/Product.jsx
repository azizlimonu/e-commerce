import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/cartReducer";

const Product = () => {
  // const images = [
  //   "/image/iphone12.jpg", "/image/iphone12pro.jpg"
  // ]
  const dispatch = useDispatch();

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleCart = () => {
    dispatch(addToCart({
      id: data.id,
      title: data.attributes.title,
      desc: data.attributes.desc,
      price: data.attributes.price,
      img: data.attributes.img.data.attributes.url,
      quantity,
    }));
  };

  return (
    <div className='product'>
      {error ? "Error Occurred" : loading
        ? "Loading..."
        : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">${data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>

              <div className="quantity">
                <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
                  -
                </button>
                <h2>{quantity}</h2>
                <button onClick={(() => setQuantity((prev) => (prev + 1)))}>
                  +
                </button>
              </div>

              <button
                className='add'
                onClick={handleCart}
              >
                <AddShoppingCartIcon /> ADD TO CART
              </button>

              <div className="links">
                <div className="item" onClick={() => setLiked((prev) => (!prev))}>
                  {liked ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)} ADD TO WISH LIST
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  )
}

export default Product