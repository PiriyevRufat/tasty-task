import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../../context/context';
const CardItem = ({item}) => {
  const [data,setData]=useState([])
  const [basketItems, setBasketItems] = useState(localStorage.getItem('basketItems')? JSON.parse(localStorage.getItem('basketItems')):[]);

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  },[basketItems]);
      const handleAddToBasket = (id) => {
        let basketProduct = basketItems.find((e) => e.id == id);
        if (!basketProduct) {
          setBasketItems([...basketItems,{ ...item, count: 1,},]);
        } 
        else {
          basketProduct.count++;
          setBasketItems([...basketItems]);
        }
      };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" height="200px" alt="..." />
      <div className="card-body">
        <p className="card-text">{item.title}</p>
        <p className="card-text">{item.name}</p>
        <h5 className="card-title">${item.price}</h5>
        <button className="btn btn-primary" onClick={handleAddToBasket}>Add to basket</button>
      </div>
    </div>
  );
};

export default CardItem;
