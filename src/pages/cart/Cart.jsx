import React from "react";
import { ProductCardHorizontal } from "../../components";

const Cart = () => {
  return (
    <main className="cart">
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
                  My Cart <strong>3 Items</strong>
                </h3>
              </div>
              <div className="cart-action-remove flex">
                <span className="cart-action__icon material-icons-round">
                  delete
                </span>
                <button className="cart-action__btns btn btn--text">
                  Remove
                </button>
                <button className="cart-action__btns btn btn--text">
                  Move To Wishlist
                </button>
              </div>
            </section>
            <div className="product-list__card-container">
              <ProductCardHorizontal />
            </div>
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
              Price Detail <strong>(3 Items)</strong>
            </h3>
          </div>
          <div className="summary__price-details price-detail">
            <ul className="price-detail__list">
              <li className="price-detail__list-item flex">
                <p>Total MRP</p>
                <p className="price-detail__price">$450</p>
              </li>
              <li className="price-detail__list-item flex">
                <p>Discount MRP</p>
                <p className="price-detail__price">$450</p>
              </li>
              <li className="price-detail__list-item flex">
                <p>Coupon Discount</p>
                <p className="price-detail__price">$45</p>
              </li>
              <li className="price-detail__list-item flex">
                <p>Delivery Charges</p>
                <p className="price-detail__price">$450</p>
              </li>
            </ul>
            <ul className="price-detail__list price-detail__grand-total">
              <li className="price-detail__list-total flex">
                <p>Grand Total</p>
                <p className="price-detail__price">$1450</p>
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
    </main>
  );
};

export { Cart };
