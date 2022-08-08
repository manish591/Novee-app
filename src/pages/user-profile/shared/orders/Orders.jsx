import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { useAuthContext, useStateContext, useAppActions } from 'hooks';
import toast from 'react-hot-toast';

const OrdersPage = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { myToken } = useAuthContext();
  const { state } = useStateContext();
  const { findDiscountedPrice } = useAppActions();
  const { ordersData } = state;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/user/orders', {
          headers: {
            authorization: myToken,
          },
        });
        if (res.status === 200) {
          setMyOrders(res.data.orders);
        }
      } catch (err) {
        toast.error('Error getting orders data from the server');
      }
    })();
  }, [ordersData]);

  const getDeliveryDate = (str) => {
    const currentDate = new Date(str);
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const date = currentDate.getDate();
    return `${date < 10 ? `0${date}` : date}-${
      month + 1 < 10 ? `0${month + 1}` : month + 1
    }-${year}`;
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
                  <p>Total Price: ₹{item.order.totalPrice}</p>
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
                            Price: ₹
                            {findDiscountedPrice(
                              product.price,
                              product.discount,
                            ).toFixed(0)}
                            , Quantity: {product.qty}
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
