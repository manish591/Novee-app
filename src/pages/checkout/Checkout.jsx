import React from 'react';
import './Checkout.css';
import toast from 'react-hot-toast';
import {
  useStateContext,
  useUserAddress,
  usePaymentIntegration,
  useAppActions,
} from 'hooks';
import { AddressCard } from '../user-profile/shared/addresses/AddressCard';
import { AddressModal } from '../user-profile/shared/addresses/AddressModal';

const Checkout = () => {
  const { state } = useStateContext();
  const {
    addressFormData,
    isEditingAddress,
    isAddressFormOpen,
    currentId,
    selectedAddress,
    setCurrentId,
    setIsAddressFormOpen,
    setIsEditingAddress,
    setAddressFormData,
    setSelectedAddress,
  } = useUserAddress();

  const { displayRazorpay } = usePaymentIntegration();

  const { findTotalPrice, findTotalDiscountedPrice, getTotalCartPrice } =
    useAppActions();

  const handleUserPayment = () => {
    if (!selectedAddress?._id) {
      return toast.error('Please select a address to continue!');
    }
    return displayRazorpay();
  };

  return (
    <main className="cart">
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
                      type="button"
                      className="address__btn btn btn--outlined-primary"
                      onClick={() => {
                        setIsAddressFormOpen(true);
                      }}>
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
                      className="flex checkout__address-group">
                      <input
                        type="radio"
                        name="address"
                        id={item._id}
                        checked={selectedAddress?._id === item._id}
                        onChange={() => {
                          setSelectedAddress(item);
                        }}
                      />
                      <label htmlFor={item._id}>
                        <AddressCard
                          // eslint-disable-next-line react/jsx-props-no-spreading
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
          <div className="summary__products flex">
            {state.cartData.map((item) => {
              return (
                <div key={item._id} className="summary__item summary-item flex">
                  <div className="summary-item__card grid">
                    <div className="summary-item__picture" />
                    <div className="summary-item__info">
                      <p className="summary-item__name">{item?.title}</p>
                      <p className="summary-item__price">₹{item?.price}</p>
                    </div>
                  </div>
                  <div className="summary-item__quantity">
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
                <p className="price-detail__price">
                  ₹{findTotalPrice(state.cartData)}
                </p>
              </li>
              <li className="price-detail__list-item flex">
                <p>Discount MRP</p>
                <p className="price-detail__price">
                  ₹{findTotalDiscountedPrice(state.cartData)}
                </p>
              </li>
              <li className="price-detail__list-item flex">
                <p>Coupon Discount</p>
                <p className="price-detail__price">₹45</p>
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
            <button
              type="button"
              className="cart__place-order btn btn--contained-primary"
              onClick={handleUserPayment}>
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
