import React, { useState, useEffect } from 'react';
import CardItem from '../../../components/site/CardItem/CardItem';

const Basket = () => {
  const [basketItems,setBasketItems]=useState(localStorage.getItem("basketItems")?JSON.parse(localStorage.getItem("basketItems")):[])
  useEffect(() => {
    const storedBasketItems = localStorage.getItem('basketItems');
    if (storedBasketItems) {
      setBasketItems(JSON.parse(storedBasketItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  }, [basketItems]);

  const removeFromBasket = (id) => {
    const updatedBasket = basketItems.filter((item) => item.id !== id);
    setBasketItems(updatedBasket);
  };

  const increaseQuantity = (id) => {
    const updatedBasket = basketItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setBasketItems(updatedBasket);
  };

  const decreaseQuantity = (id) => {
    const updatedBasket = basketItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setBasketItems(updatedBasket);
  };

  return (
    <div>
      <h2>Shopping Basket</h2>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {basketItems.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td><img src={item.image} alt="" width='60px' height='60px' /></td>
              <td>{item.name}</td>
              <td>${parseFloat(item.price).toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromBasket(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;




