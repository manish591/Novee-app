import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Orders.css";

import { useAuthContext, useStateContext } from "../../../../hooks";

const OrdersPage = () => {
  const { myToken } = useAuthContext();
  const [myOrders, setMyOrders] = useState([]);
  const { state } = useStateContext();
  const { ordersData } = state;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/orders", {
          headers: {
            authorization: myToken,
          },
        });
        console.log(res);
        if (res.status === 200) {
          setMyOrders(res.data.orders);
        }
      } catch (err) {
        console.error("Error getting orders data from the server", err);
      }
    })();
  }, [ordersData]);

  return (
    <div className="orders">
      <h1 className="orders__title">My Orders</h1>
      <div className="orders-container grid">
        {myOrders.map((item) => {
          return (
            <div className="single-order">
              <section className="single-order__details">
                <h1 className="single-order__status">Order Confirmed</h1>
                <details className="single-order__desc">
                  <summary>Deliverd On: Thu, 12 March 2022</summary>
                </details>
              </section>
              <section className="single-order__products grid">
                <div className="orders__item single-order-products">
                  <div className="single-order-products__content grid">
                    <section className="single-order-products__offer flex">
                      <h1 className="single-order-products__title">20% off</h1>
                    </section>
                    <section className="single-order-products__info">
                      <p>On minimum purchase of Rs. 100</p>
                      <p>Code: #rggg</p>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { OrdersPage };
