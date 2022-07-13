import React, { useState } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { db } from './firebase';
import moment from 'moment';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const submitForm = () => {
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(date);
    db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(basket.id)
      .set({
        basket: basket,
        amount: getBasketTotal(basket),
        created: date,
      });
    dispatch({
      type: 'EMPTY_BASKET',
    });
    navigate('/orders');
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <Link to="/checkout">
          <div className="payment_header">
            <h2>장바구니로 돌아가기</h2>
            <h3>{basket?.length}개의 상품이 존재합니다</h3>
          </div>
        </Link>
        <div className="payment_section">
          <div className="payment_title">
            <h3>배송지 정보</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email} 님의 주소</p>
            <p>인천광역시 연수구</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>상품 정보</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>결제</h3>
          </div>
          <div className="payment_details">
            <form>
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>주문금액 : {value} 원</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                />
                <button type="button" onClick={submitForm}>
                  구매하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
