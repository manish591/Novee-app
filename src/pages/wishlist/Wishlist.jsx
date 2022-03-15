import React from "react";
import { WishlistCard } from "./WishlistCard";

const Wishlist = () => {
  return (
    <main className="wishlist">
      <div className="wishlist__wrapper">
        <div className="wishlist__info">
          <p>My wishlist 8 items</p>
        </div>
        <section className="wishlist__itemsContainer layout grid-auto-fill">
          <WishlistCard />
        </section>
      </div>
    </main>
  );
};

export { Wishlist };
