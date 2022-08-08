import React from 'react';
import './Coupon.css';
import PropTypes from 'prop-types';
import { coupons } from 'utilis';
import { useStateContext } from 'hooks';

const Coupon = ({ setSelectCoupon }) => {
  const { couponCode, setCouponCode } = useStateContext();
  return (
    <div className="coupons-modal">
      <div className="coupons-modal__overlay" style={{ zIndex: '20' }} />
      <div className="coupons-modal__content">
        <div className="coupons-modal__top">
          <h2>Select Coupon</h2>
          <button type="button" onClick={() => setSelectCoupon((c) => !c)}>
            X
          </button>
        </div>
        <form className="coupons-modal__form">
          {coupons.map((item) => {
            return (
              <section key={item.code} className="coupons-modal__select">
                <input
                  type="radio"
                  id={item.offer}
                  checked={item.code === couponCode}
                  onChange={() => setCouponCode(item.code)}
                />
                <label htmlFor={item.offer}>{item.offer}</label>
              </section>
            );
          })}
        </form>
      </div>
    </div>
  );
};

Coupon.propTypes = {
  setSelectCoupon: PropTypes.func.isRequired,
};

export { Coupon };
