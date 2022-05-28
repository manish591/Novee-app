import React from "react";
import "./Coupons.css";
import { coupons } from "../../../../utilis/utilis";

const CouponsPage = () => {
  return (
    <div className="coupons-page">
      <h1 className="coupons-page__title">All Coupons</h1>
      <section className="coupons-page__container grid">
        {coupons.map((item) => {
          return (
            <div key={item.code} className="coupons__item single-coupon">
              <div className="single-coupon__content grid">
                <section className="single-coupon__offer flex">
                  <h1 className="single-coupon__title">{item.offer}</h1>
                </section>
                <section className="single-coupon__info">
                  <p>On minimum purchase of Rs. {item.minimumPurchase}</p>
                  <p>Code: {item.code}</p>
                </section>
              </div>
              <details className="single-coupon__dropdown">
                <summary>Expiry: {item.expiry}</summary>
                <p>{item.offer}</p>
              </details>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export { CouponsPage };
