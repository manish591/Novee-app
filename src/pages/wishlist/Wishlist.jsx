import React, { useState, useEffect, useRef } from "react";
import { WishlistCard } from "./WishlistCard";
import { useStateContext } from "../../hooks/useStateContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { state } = useStateContext();
  const { wishlistData } = state;

  return (
    <main className={`wishlist`}>
      <div className="wishlist__wrapper">
        <div className="wishlist__info">
          <p>My wishlist {state.wishlistData.length} items</p>
        </div>
        <section className="wishlist__itemsContainer layout grid-auto-fill">
          {wishlistData.map((item) => {
            return <WishlistCard product={item} key={item._id} />;
          })}
        </section>
        {state.wishlistData.length < 1 && (
          <div className="wishlist__empty wishlist-empty">
            <div className="wishlist-empty__wrapper flow-space-2">
              <h1 className="wishlist-empty__title">Your Wishlist Is Empty</h1>
              <p className="wishlist-empty__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                inventore perspiciatis doloribus beatae error voluptate! Libero
                minus harum natus molestiae?
              </p>
              <button className="btn btn--outlined-primary wishlist-empty__btn">
                <Link to="/products">Continue Shopping</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export { Wishlist };
