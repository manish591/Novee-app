import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Loader, ProductCardHorizontal } from "../../components";
import { useStateContext } from "../../hooks";
import { useAuth } from "../../hooks";
import { useAppActions } from "../../hooks";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state, stateDispatch } = useStateContext();
  const { cartData } = state;
  const { currentUser, myToken } = useAuth();
  const { findTotalPrice, findDiscountedPrice, removeAllItemsFromCart } =
    useAppActions();
  const [myCart, setMyCart] = useState([]);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/cart", {
          headers: { authorization: myToken },
        });
        if (res.status === 200) {
          setMyCart(res.data.cart);
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    })();
  }, [cartData]);

  return (
    <main className={`cart`}>
      {state.cartData.length !== 0 ? (
        <div className="cart__wrapper grid">
          <section className="cart__products-list products-list">
            <div className="products-list__cards grid">
              <section className="cart__addresses address flex">
                <div className="address__wrapper flex">
                  <div className="address__info">
                    <p>Deliver To: Person Name</p>
                    <p className="address__description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </div>
                  <div className="address__action">
                    <button className="address__btn btn btn--outlined-primary">
                      Add Address
                    </button>
                  </div>
                </div>
              </section>
              <section className="cart__action-btn cart-action flex">
                <div className="cart-action__info">
                  <h3 className="fw-100">
                    My Cart <strong>{myCart.length} Items</strong>
                  </h3>
                </div>
                <div className="cart-action-remove flex">
                  <span className="cart-action__icon material-icons-round">
                    delete
                  </span>
                  <button
                    className="cart-action__btns btn btn--text"
                    onClick={() => removeAllItemsFromCart({ setIsLoading })}
                  >
                    Remove
                  </button>
                  <button className="cart-action__btns btn btn--text">
                    Move To Wishlist
                  </button>
                </div>
              </section>
              {isLoading ? (
                <Loader />
              ) : (
                <div className="product-list__card-container">
                  {myCart.map((cartItem) => {
                    return (
                      <ProductCardHorizontal
                        key={cartItem._id}
                        product={cartItem}
                        currentId={currentId}
                        setCurrentId={setCurrentId}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </section>
          <section className="cart__summary summary">
            <section className="cart__coupons coupons grid">
              <div className="coupons__title">
                <h3>Coupons</h3>
              </div>
              <div className="coupons__action">
                <button className="coupons__btn flex">
                  <span className="material-icons-round">label</span>
                  <p>Apply For Coupons</p>
                </button>
              </div>
            </section>
            <div className="summary__title">
              <h3 className="fw-100">
                Price Detail <strong>({myCart.length} Items)</strong>
              </h3>
            </div>
            <div className="summary__price-details price-detail">
              <ul className="price-detail__list">
                <li className="price-detail__list-item flex">
                  <p>Total MRP</p>
                  <p className="price-detail__price">
                    ${findTotalPrice(state.cartData)}
                  </p>
                </li>
                <li className="price-detail__list-item flex">
                  <p>Discount MRP</p>
                  <p className="price-detail__price">
                    ${findDiscountedPrice(findTotalPrice(state.cartData), 10)}
                  </p>
                </li>
                <li className="price-detail__list-item flex">
                  <p>Coupon Discount</p>
                  <p className="price-detail__price">$45</p>
                </li>
                <li className="price-detail__list-item flex">
                  <p>Delivery Charges</p>
                  <p className="price-detail__price">$10</p>
                </li>
              </ul>
              <ul className="price-detail__list price-detail__grand-total">
                <li className="price-detail__list-total flex">
                  <p>Grand Total</p>
                  <p className="price-detail__price">
                    $
                    {Number(
                      findDiscountedPrice(findTotalPrice(state.cartData), 10)
                    ) + 35}
                  </p>
                </li>
              </ul>
            </div>
            <div className="summary__cta">
              <button className="cart__place-order btn btn--contained-primary">
                Place Order
              </button>
            </div>
          </section>
        </div>
      ) : (
        <div className="wishlist__empty wishlist-empty">
          <div className="wishlist-empty__wrapper flow-space-2">
            <h1 className="wishlist-empty__title">Your Cart Is Empty</h1>
            <p className="wishlist-empty__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              inventore perspiciatis doloribus beatae error voluptate! Libero
              minus harum natus molestiae?
            </p>
            <button className="btn btn--outlined-primary wishlist-empty__btn">
              <Link to="/wishlist">Add From Wishlist</Link>
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export { Cart };
