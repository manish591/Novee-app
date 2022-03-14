import React from "react";
import { Filters } from "./Filters";
import { ProductCardVertical } from "../../components";

const ProductListing = () => {
  return (
    <main className="listing">
      <div className="listing__wrapper grid">
        <Filters />
        <div className="listing__products layout grid-auto-fill">
          {[...Array(5)].map((_) => {
            return <ProductCardVertical />;
          })}
        </div>
      </div>
    </main>
  );
};

export { ProductListing };
