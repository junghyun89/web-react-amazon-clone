import React, { useEffect, useState } from 'react';
import './Orders.css';
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import Order from './Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h2>주문 내역</h2>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
