import React from 'react';
import { Link } from 'react-router-dom';

const OrdersResult = () => {
  return (
    <div className="orders-result">
      <div className="orders-result__content orders-result__content--success flex">
        <h1 className="order-result__title">Your order is successful</h1>
        <Link to="/profile/orders">
          <button type="button" className="btn btn--outlined-secondary">
            View Orders
          </button>
        </Link>
      </div>
    </div>
  );
};

export { OrdersResult };
