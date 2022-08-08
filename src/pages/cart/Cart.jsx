import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCardHorizontal } from 'components';
import { useStateContext, useAppActions, useScrollToTop } from 'hooks';
import { Coupon } from './Coupon';

const Cart = () => {
  const { state } = useStateContext();
  const { cartData } = state;
  const {
    findTotalPrice,
    findTotalDiscountedPrice,
    removeAllItemsFromCart,
    getTotalCartPrice,
    findCouponDiscount,
  } = useAppActions();
  const [currentId, setCurrentId] = useState('');
  const [selectCoupon, setSelectCoupon] = useState(false);

  useScrollToTop();

  return (
    <main className="cart">
      {state.cartData.length < 1 ? (
        <div className="wishlist__empty wishlist-empty">
          <div className="wishlist-empty__wrapper flow-space-2">
            <h1 className="wishlist-empty__title">Your Cart Is Empty</h1>
            <p className="wishlist-empty__desc">
              You can add products to your cart by clicking on the Add to Cart
              button on each product page. When you&apos;re finished browsing
              and ready to check out, click on the Shopping Cart link in the top
              right corner of your screen.
            </p>
            <button
              type="button"
              className="btn btn--outlined-primary wishlist-empty__btn">
              <Link to="/products">Continue Shopping</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="cart__wrapper grid">
          <section className="cart__products-list products-list">
            <div className="products-list__cards grid">
              <section className="cart__action-btn cart-action flex">
                <div className="cart-action__info">
                  <h3 className="fw-100">
                    My Cart <strong>{cartData.length} Items</strong>
                  </h3>
                </div>
                <div className="cart-action-remove flex">
                  <span className="cart-action__icon material-icons-round">
                    delete
                  </span>
                  <button
                    type="button"
                    className="cart-action__btns btn btn--text"
                    onClick={() => removeAllItemsFromCart()}>
                    Remove
                  </button>
                </div>
              </section>
              <div className="product-list__card-container">
                {cartData.map((cartItem) => {
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
            </div>
          </section>
          <section className="cart__summary summary">
            <section className="cart__coupons coupons grid">
              <div className="coupons__title">
                <h3>Coupons</h3>
              </div>
              <div className="coupons__action">
                <button
                  type="button"
                  className="coupons__btn flex"
                  onClick={() => setSelectCoupon((c) => !c)}>
                  <span className="material-icons-round">label</span>
                  <p>Apply For Coupons</p>
                </button>
              </div>
            </section>
            <div className="summary__title">
              <h3 className="fw-100">
                Price Detail <strong>({cartData.length} Items)</strong>
              </h3>
            </div>
            <div className="summary__price-details price-detail">
              <ul className="price-detail__list">
                <li className="price-detail__list-item flex">
                  <p>Total MRP</p>
                  <p className="price-detail__price">
                    ₹{findTotalPrice(state.cartData)}
                  </p>
                </li>
                <li className="price-detail__list-item flex">
                  <p>Discount On MRP</p>
                  <p className="price-detail__price">
                    -₹
                    {findTotalPrice(state.cartData) -
                      findTotalDiscountedPrice(state.cartData)}
                  </p>
                </li>
                <li className="price-detail__list-item flex">
                  <p>Coupon Discount</p>
                  <p className="price-detail__price">
                    -₹{findCouponDiscount()}
                  </p>
                </li>
                <li className="price-detail__list-item flex">
                  <p>Delivery Charges</p>
                  <p className="price-detail__price">FREE</p>
                </li>
              </ul>
              <ul className="price-detail__list price-detail__grand-total">
                <li className="price-detail__list-total flex">
                  <p>Grand Total</p>
                  <p className="price-detail__price">
                    ₹{getTotalCartPrice(state.cartData)}
                  </p>
                </li>
              </ul>
            </div>
            <div className="summary__cta">
              <Link
                to="/cart/checkout"
                className={`cart__place-order btn btn--contained-primary ${
                  cartData?.length === 0 ? 'cart__place-order--disabled' : ''
                }`}>
                Place Order
              </Link>
            </div>
          </section>
        </div>
      )}
      {selectCoupon && <Coupon setSelectCoupon={setSelectCoupon} />}
    </main>
  );
};

export { Cart };
