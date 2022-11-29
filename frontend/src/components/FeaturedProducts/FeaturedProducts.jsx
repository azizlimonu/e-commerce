import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './FeaturedProduct.scss';
import axios from 'axios';

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL+`/products?populate=*&[filters][type][$eq]=${type}`, {
        headers:{
          Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
        }
        });
        console.log(res);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])


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
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts