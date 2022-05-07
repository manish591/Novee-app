import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Orders.css';

import { useAuthContext, useStateContext } from '../../../../hooks';

const OrdersPage = () => {
  const { myToken } = useAuthContext();
  const [myOrders, setMyOrders] = useState([]);
  const { state } = useStateContext();
  const { ordersData } = state;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/user/orders', {
          headers: {
            authorization: myToken,
          },
        });
        console.log(res);
        if (res.status === 200) {
          setMyOrders(res.data.orders);
          console.log(res.data);
        }
      } catch (err) {
        console.error('Error getting orders data from the server', err);
      }
    })();
  }, [ordersData]);

  const getDeliveryDate = (str) => {
    const currentDate = new Date(str);
    const month = currentDate.getMonth();
    const day = currentDate.getDay();
    const year = currentDate.getFullYear();
    const date = currentDate.getDate();
    return `${day}, ${date}/${month}/${year}`;
  };

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
                  <summary>
                    Deliverd On: {getDeliveryDate(item.updatedAt)}
                  </summary>
                  <p>
                    Payment Id:
                    <strong>&nbsp;{item.order.paymentID}</strong>
                  </p>
                  <p>Total Price: ${item.order.totalPrice}</p>
                </details>
              </section>
              <section className="single-order__products grid">
                {item.order.items.map((product) => {
                  return (
                    <div className="orders__item single-order-products">
                      <div className="single-order-products__content grid">
                        <section className="single-order-products__offer flex">
                          <img
                            src={product.img.WEB_P}
                            alt={product.title}
                            style={{ aspectRatio: '1' }}
                          />
                        </section>
                        <section className="single-order-products__info">
                          <p>{product.title}</p>
                          <p>
                            Price: ${product.price}, Quantity: {product.qty}
                          </p>
                        </section>
                      </div>
                    </div>
                  );
                })}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { OrdersPage };
