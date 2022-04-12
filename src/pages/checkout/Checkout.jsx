import React from "react";
import "./Checkout.css";
import { AddressCard } from "../user-profile/shared/addresses/AddressCard";
import { AddressModal } from "../user-profile/shared/addresses/AddressModal";

const Checkout = () => {
  return (
    <main className={`cart`}>
      <div className="cart__wrapper grid">
        <section className="cart__products-list products-list">
          <div
            className="products-list__cards grid"
            style={{ display: "none" }}
          >
            <section className="cart__addresses address flex">
              <div className="address__wrapper flex">
                <div className="address__info">
                  <h1>Select Delivery Address</h1>
                </div>
                <div className="address__action">
                  <button className="address__btn btn btn--outlined-primary">
                    Add Address
                  </button>
                </div>
              </div>
            </section>
            <div className="product-list__card-container">
              <section className="flex checkout__address-group">
                <input type="radio" name="address" id="address" />
                <label htmlFor="address">
                  <AddressCard
                    name="Manish Devrani"
                    country="India"
                    postalCode="246136"
                    tel="6396653091"
                    address="Kotdwara, pauri garhwal uttarakhand"
                  />
                </label>
              </section>
            </div>
          </div>
          <section className="checkout__address-form">
            <h1>Checkout</h1>
            <div className="address-form">
              <div className="address-form__wrapper">
                <form className="address-form__container">
                  <section className="address-form__group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      aria-describedby="name-validation"
                      required
                    />
                    <p
                      id="name-validation"
                      aria-live="assertive"
                      className="validation-message"
                    ></p>
                  </section>

                  <section className="address-form__group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      name="address"
                      id="address"
                      maxLength="300"
                      autoComplete="address"
                      aria-describedby="address-validation"
                      rows="5"
                      required
                    ></textarea>
                    <p
                      id="address-validation"
                      aria-live="assertive"
                      className="validation-message"
                    ></p>
                  </section>

                  <section className="address-form__group">
                    <label htmlFor="postal-code">Postal Code</label>
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      aria-describedby="postal-code-validation"
                      required
                    />
                    <p
                      id="postal-code-validation"
                      aria-live="assertive"
                      className="validation-message"
                    ></p>
                  </section>

                  <section className="address-form__group">
                    <label htmlFor="country">Country</label>
                    <select
                      name="country"
                      id="country"
                      autoComplete="country"
                      aria-describedby="country-validation"
                      required
                    >
                      <option></option>
                    </select>
                    <p
                      id="country-validation"
                      aria-live="assertive"
                      className="validation-message"
                    ></p>
                  </section>

                  <section className="address-form__group">
                    <label htmlFor="tel">Mobile Number</label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      autoComplete="tel"
                      pattern="[\d \-\+]+"
                      maxLength="30"
                      aria-describedby="tel-validation"
                      required
                    />
                    <p
                      id="tel-validation"
                      aria-live="assertive"
                      className="validation-message"
                    ></p>
                  </section>

                  <section className="address-form__cta cta">
                    <button className="cta__submit">Save</button>
                    <button className="cta__cancel" type="button">
                      Cancel
                    </button>
                  </section>
                </form>
              </div>
            </div>
          </section>
        </section>
        <section className="cart__summary summary">
          <h1>Summary</h1>
          <div class="summary__products flex">
            <div class="summary__item summary-item flex">
              <div class="summary-item__card flex">
                <div class="summary-item__picture"></div>
                <div class="summary-item__info">
                  <p class="summary-item__name">XX59</p>
                  <p class="summary-item__price">$523</p>
                </div>
              </div>
              <div class="summary-item__quantity">
                <p>X1</p>
              </div>
            </div>
            <div class="summary__item summary-item flex">
              <div class="summary-item__card flex">
                <div class="summary-item__picture"></div>
                <div class="summary-item__info">
                  <p class="summary-item__name">XX59</p>
                  <p class="summary-item__price">$523</p>
                </div>
              </div>
              <div class="summary-item__quantity">
                <p>X1</p>
              </div>
            </div>
            <div class="summary__item summary-item flex">
              <div class="summary-item__card flex">
                <div class="summary-item__picture"></div>
                <div class="summary-item__info">
                  <p class="summary-item__name">XX59</p>
                  <p class="summary-item__price">$523</p>
                </div>
              </div>
              <div class="summary-item__quantity">
                <p>X1</p>
              </div>
            </div>
          </div>
          <div className="summary__price-details price-detail">
            <ul className="price-detail__list">
              <li className="price-detail__list-item flex">
                <p>Total MRP</p>
                <p className="price-detail__price">$240</p>
              </li>
              <li className="price-detail__list-item flex">
                <p>Discount MRP</p>
                <p className="price-detail__price">$50</p>
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
                <p className="price-detail__price">$ 50</p>
              </li>
            </ul>
          </div>
          <div className="summary__cta">
            <button className="cart__place-order btn btn--contained-primary">
              Continue And Pay
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export { Checkout };
