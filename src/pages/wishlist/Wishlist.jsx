import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from 'hooks';
import { WishlistCard } from './WishlistCard';
import { useStateContext } from '../../hooks/useStateContext';

const Wishlist = () => {
  const { state } = useStateContext();
  const { wishlistData } = state;

  useScrollToTop();

  return (
    <main className="wishlist">
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
                You can add products to your wishlist by clicking on the Add to
                Wishlist button on each product card. When you&apos;re finished
                you can your products in the wishlist page.
              </p>
              <button
                type="button"
                className="btn btn--outlined-primary wishlist-empty__btn">
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
