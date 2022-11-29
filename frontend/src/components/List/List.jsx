import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './List.scss';

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

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  // console.log("list data", data);

  return (
    <div className="list">
      {error
        ? "Error Occured"
        : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;