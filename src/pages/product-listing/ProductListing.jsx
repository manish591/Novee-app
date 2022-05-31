import React from 'react';
import { ProductCardVertical } from 'components';
import { useStateContext, useScrollToTop } from 'hooks';
import { updatedProductList } from 'utilis';
import { Filters } from './Filters';
import { ProductNotFound } from './ProductsNotFound';

const ProductListing = () => {
  const { state } = useStateContext();
  const { productData, filters } = state;
  const {
    sort,
    rating,
    brand,
    fastDelivery,
    includeOutOfStock,
    idealFor,
    searchQuery,
  } = filters;

  const getUpdatedProductList = updatedProductList(
    productData,
    sort,
    idealFor,
    rating,
    brand,
    searchQuery,
    fastDelivery,
    includeOutOfStock,
  );

  useScrollToTop();

  return (
    <main className="listing">
      <div className="listing-top">
        <p className="listing__total-items">
          Result - <span>{getUpdatedProductList.length} Items</span>
        </p>
      </div>
      <div className="listing__wrapper grid">
        <Filters />
        {getUpdatedProductList.length > 0 ? (
          <div className="listing__products grid">
            {getUpdatedProductList.map((item) => {
              return <ProductCardVertical product={item} key={item._id} />;
            })}
          </div>
        ) : (
          <ProductNotFound />
        )}
      </div>
    </main>
  );
};

export { ProductListing };
