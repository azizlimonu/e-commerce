import React from 'react';
import Card from '../Card/Card';
import './List.scss';

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shirt",
      oldPrice: "19",
      price: "12",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shirt",
      oldPrice: "19",
      price: "12",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shirt",
      oldPrice: "19",
      price: "12",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shirt",
      oldPrice: "19",
      price: "12",
    },
  ]

  return (
    <div className='list'>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List;