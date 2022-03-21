import React, { useState, useEffect } from "react";
import { WishlistCard } from "./WishlistCard";
import { useStateContext } from "../../hooks/useStateContext";
import { Loader } from "../../components";
import axios from "axios";
import { useAuth } from "../../hooks";

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
    <main className="wishlist">
      <div className="wishlist__wrapper">
        <div className="wishlist__info">
          <p>My wishlist {state.wishlistData.length} items</p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="wishlist__itemsContainer layout grid-auto-fill">
            {
              myWishlist.map(item => {
                return <WishlistCard {...item} key={item._id} />
              })
            }
          </section>
        )}
      </div>
    </main>
  );
};

export { Wishlist };
