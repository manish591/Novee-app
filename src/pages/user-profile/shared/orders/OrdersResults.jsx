import React from "react";
import { Link } from "react-router-dom";

const OrdersResult = () => {
  return (
    <div className="orders-result">
      <div className="orders-result__content orders-result__content--success flex">
        <h1 className="order-result__title">Your Order Is Successfull</h1>
        <Link to="/profile/orders">
          <button className="btn btn--outlined-secondary">View Orders</button>
        </Link>
      </div>
    </div>
  );
};

export { OrdersResult };