import React from "react";

import { Filters } from "./Filters";
import { ProductCardVertical } from "../../components";
import { useStateContext } from "../../hooks/useStateContext";
import { Loader } from "../../components";
import { updatedProductList } from "../../utilis";
import { useScrollToTop } from "../../hooks";

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
    includeOutOfStock
  );

  useScrollToTop();

  return (
    <main className="listing">
      <div className="listing__wrapper grid">
        <Filters />
        <div className="listing__products grid">
          {getUpdatedProductList.map((item) => {
            return <ProductCardVertical product={item} key={item._id} />;
          })}
        </div>
      </div>
    </main>
  );
};

export { ProductListing };
