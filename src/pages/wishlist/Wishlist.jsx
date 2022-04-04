import React, { useState, useEffect } from "react";
import { WishlistCard } from "./WishlistCard";
import { useStateContext } from "../../hooks/useStateContext";
import { Loader } from "../../components";
import axios from "axios";
import { useAuth } from "../../hooks";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { state, stateDispatch } = useStateContext();
  const { wishlistData } = state;
  const { currentUser, myToken } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [myWishlist, setMyWishlist] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("api/user/wishlist", {
          headers: { authorization: myToken },
        });
        if (res.status === 200) {
          setMyWishlist(res.data.wishlist);
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    })();
  }, [wishlistData]);

  return (
    <main className={`wishlist ${isLoading ? "wishlist--loading" : ""}`}>
      <div className="wishlist__wrapper">
        {state.wishlistData.length !== 0 ? (
          <>
            <div className="wishlist__info">
              <p>My wishlist {state.wishlistData.length} items</p>
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <section className="wishlist__itemsContainer layout grid-auto-fill">
                {myWishlist.map((item) => {
                  return <WishlistCard product={item} key={item._id} />;
                })}
              </section>
            )}
          </>
        ) : (
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
