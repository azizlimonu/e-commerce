import React from 'react';
import Card from '../Card/Card';
import './FeaturedProduct.scss';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );


  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Shirt",
  //     oldPrice: "19",
  //     price: "12",
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Shirt",
  //     oldPrice: "19",
  //     price: "12",
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Shirt",
  //     oldPrice: "19",
  //     price: "12",
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Shirt",
  //     oldPrice: "19",
  //     price: "12",
  //   },
  // ]

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className='bottom'>
        {error
          ? "Error Occured"
          : loading
            ? "loading..."
            : data?.map((item) => (
              <Card item={item} key={item.id} />
            ))}

      </div>
    </div>
  )
}

export default FeaturedProducts;