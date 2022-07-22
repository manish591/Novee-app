import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  useStateContext,
  useAppActions,
  useAuthContext,
  useScrollToTop,
} from 'hooks';
import { Image } from 'components';

const SingleProduct = () => {
  const { state, stateDispatch, disableButton, setDisableButton } =
    useStateContext();
  const {
    isAlreadyInDatabase,
    addProductsToCart,
    addItemToTheWishlist,
    removeItemFromWishlist,
  } = useAppActions();
  const { isUserLogedIn, currentUser } = useAuthContext();
  const location = useLocation();
  const { productId } = useParams();
  const navigate = useNavigate();

  const singleProduct = state.productData.find(
    (item) => item._id === productId,
  );

  useScrollToTop();

  return (
    <div className="single-product">
      <div className="single-product__wrapper grid">
        <div className="single-product__img-container">
          <Image title={singleProduct?.title} img={singleProduct?.img} />
        </div>
        <div className="single-product__content sp-content">
          <section className="sp-content__header">
            <p>{singleProduct?.brand}</p>
            <h1 className="sp-content__title">{singleProduct?.title}</h1>
          </section>
          <section className="sp-content__desc">
            <p>{singleProduct?.description}</p>
            {!singleProduct?.inStock && (
              <p className="card__out-of-stock">Product Out Of Stock</p>
            )}
          </section>
          <section className="sp-content__pricing flex">
            <p className="sp-content__discount-price">
              ₹
              {(
                singleProduct.price -
                singleProduct.price * (singleProduct.discount / 100)
              ).toFixed(0)}
            </p>
            <p className="sp-content__discount-rate">
              {singleProduct?.discount}%
            </p>
            <p className="sp-content__actual-price">₹{singleProduct?.price}</p>
          </section>
          <section className="sp-content__actions flex">
            {isAlreadyInDatabase(state.wishlistData, singleProduct?._id) ? (
              <button
                type="button"
                className="btn btn--outlined-secondary"
                onClick={(e) =>
                  removeItemFromWishlist({
                    e,
                    _id: singleProduct?._id,
                    currentUser,
                    stateDispatch,
                  })
                }>
                Remove From Wishlist
              </button>
            ) : (
              <button
                type="button"
                className={`btn btn--outlined-secondary ${
                  !singleProduct?.inStock && 'btn--out-of-stock'
                }`}
                onClick={(e) =>
                  addItemToTheWishlist({
                    e,
                    _id: singleProduct?._id,
                    product: singleProduct,
                    currentUser,
                    stateDispatch,
                    setDisableButton,
                  })
                }
                disabled={disableButton}>
                Add To Wishlist
              </button>
            )}
            {isAlreadyInDatabase(state.cartData, singleProduct?._id) ? (
              <button
                type="button"
                className="btn btn--contained-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/cart');
                }}>
                Go To Cart
              </button>
            ) : (
              <button
                type="button"
                className={`btn btn--contained-secondary ${
                  !singleProduct?.inStock && 'btn--out-of-stock'
                }`}
                onClick={(e) =>
                  isUserLogedIn
                    ? addProductsToCart({
                        e,
                        _id: singleProduct?._id,
                        product: singleProduct,
                        currentUser,
                        stateDispatch,
                        setDisableButton,
                      })
                    : navigate('/login', { state: location.pathname })
                }
                disabled={disableButton}>
                Add To Cart
              </button>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export { SingleProduct };
