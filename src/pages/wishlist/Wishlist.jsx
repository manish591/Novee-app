import React, { useState, useEffect } from "react";
import { WishlistCard } from "./WishlistCard";
import { useStateContext } from "../../hooks/useStateContext";
import { Loader } from "../../components";
import axios from "axios";

const Wishlist = () => {
  const { state, stateDispatch } = useStateContext();

  return (
    <main className="wishlist">
      <div className="wishlist__wrapper">
        <div className="wishlist__info">
          <p>My wishlist {state.wishlistData.length} items</p>
        </div>
        <section className="wishlist__itemsContainer layout grid-auto-fill">
          <WishlistCard/>
        </section>
      </div>
    </main>
  );
};

export { Wishlist };
