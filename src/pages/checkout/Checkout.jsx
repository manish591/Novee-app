import React, { useState } from "react";
import "./Checkout.css";
import { AddressCard } from "../user-profile/shared/addresses/AddressCard";
import { AddressModal } from "../user-profile/shared/addresses/AddressModal";
import { useStateContext, useUserAddress } from "../../hooks";

const Checkout = () => {
  const { state } = useStateContext();
  const {
    addressFormData,
    setAddressFormData,
    isEditingAddress,
    setIsEditingAddress,
    isAddressFormOpen,
    setIsAddressFormOpen,
    currentId,
    setCurrentId,
  } = useUserAddress();
  return (
    <main className={`cart`}>
      <div className="cart__wrapper grid">
        <section className="cart__products-list products-list">
          {state?.addressData?.length < 1 ? (
            <section className="checkout__address-form">
              <h1>Checkout</h1>
              <AddressModal
                setIsAddressFormOpen={setIsAddressFormOpen}
                isEditingAddress={isEditingAddress}
                setIsEditingAddress={setIsEditingAddress}
                addressFormData={addressFormData}
                setAddressFormData={setAddressFormData}
              />
            </section>
          ) : (
            <div className="products-list__cards grid">
              <section className="cart__addresses address flex">
                <div className="address__wrapper flex">
                  <div className="address__info">
                    <h1>Select Delivery Address</h1>
                  </div>
                  <div className="address__action">
                    <button
                      className="address__btn btn btn--outlined-primary"
                      onClick={() => {
                        setIsAddressFormOpen(true);
                      }}
                    >
                      Add Address
                    </button>
                  </div>
                </div>
              </section>
              <div className="product-list__card-container">
                {state.addressData.map((item) => {
                  return (
                    <section
                      key={item._id}
                      className="flex checkout__address-group"
                    >
                      <input type="radio" name="address" id={item._id} />
                      <label htmlFor={item._id}>
                        <AddressCard
                          {...item}
                          setCurrentId={setCurrentId}
                          currentId={currentId}
                          setIsEditingAddress={setIsEditingAddress}
                          isEditingAddress={isEditingAddress}
                          setIsAddressFormOpen={setIsAddressFormOpen}
                          addressFormData={addressFormData}
                          setAddressFormData={setAddressFormData}
                        />
                      </label>
                    </section>
                  );
                })}
              </div>
            </div>
          )}
        </section>
        <section className="cart__summary summary">
          <h1>Summary</h1>
          <div class="summary__products flex">
            {state.cartData.map((item) => {
              return (
                <div key={item._id} class="summary__item summary-item flex">
                  <div class="summary-item__card grid">
                    <div class="summary-item__picture"></div>
                    <div class="summary-item__info">
                      <p class="summary-item__name">{item?.title}</p>
                      <p class="summary-item__price">${item?.price}</p>
                    </div>
                  </div>
                  <div class="summary-item__quantity">
                    <p>{item.qty}x</p>
                  </div>
                </div>
              );
            })}
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
      {isAddressFormOpen && (
        <AddressModal
          isAddressFormOpen={isAddressFormOpen}
          setIsAddressFormOpen={setIsAddressFormOpen}
          isEditingAddress={isEditingAddress}
          setIsEditingAddress={setIsEditingAddress}
          addressFormData={addressFormData}
          setAddressFormData={setAddressFormData}
          currentId={currentId}
        />
      )}
    </main>
  );
};

export { Checkout };
