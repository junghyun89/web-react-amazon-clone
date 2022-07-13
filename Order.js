import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';

function Order({ order }) {
  return (
    <div className="order">
      <h2>주문</h2>
      <p>{order.data.created}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">주문 총액 : {value} 원</h3>
        )}
        decimalScale={2}
        value={order.data.amount}
        displayType={'text'}
        thousandSeparator={true}
      />
    </div>
  );
}

export default Order;
