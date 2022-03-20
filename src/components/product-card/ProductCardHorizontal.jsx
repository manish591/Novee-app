import React, { useState } from "react";
import { useAppActions } from "../../hooks";
import { useAuth } from "../../hooks";
import { useStateContext } from "../../hooks";

const ProductCardHorizontal = ({
  _id,
  image,
  quantity,
  itemInStock,
  title,
  description,
  price,
  discount,
  qty = 1,
}) => {
  const { removeProductsFromCart, updateCartQuantity } = useAppActions();
  const { currentUser } = useAuth();
  const { stateDispatch } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="products-list__card-item">
      <section className="card card--horizontal products-list__card">
        <div className="card__image-container--cart">
          <img
            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="card__image"
          />
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__author">{description}</p>
          <p className="card__price">Lorem, ipsum dolor.</p>
          <div className="card__update-quantity flex">
            <button
              className="card__update-quantity--remove"
              onClick={() => updateCartQuantity(_id, "decrement", setIsLoading)}
              disabled={isLoading || qty === 1}
            >
              <span className="material-icons-round cart-icon-quantity">
                remove
              </span>
            </button>
            <p className="quantity-value">{qty}</p>
            <button
              className="card__update-quantity--add"
              onClick={() => updateCartQuantity(_id, "increment", setIsLoading)}
              disabled={isLoading}
            >
              <span className="material-icons-round cart-icon-quantity">
                add
              </span>
            </button>
          </div>
        </div>
        <button
          className="card__remove-btn"
          onClick={() =>
            removeProductsFromCart({
              _id,
              currentUser,
              stateDispatch,
              setIsLoading,
            })
          }
          disabled={isLoading}
        >
          <span className="material-icons-round">clear</span>
        </button>
      </section>
    </section>
  );
};

export { ProductCardHorizontal };
