import React, { useEffect } from "react";
import { Filters } from "./Filters";
import { ProductCardVertical } from "../../components";
import { useStateContext } from '../../hooks/useStateContext';
import { Loader } from '../../components';
import axios from "axios";
import { useState } from "react";

const ProductListing = () => {
  const { state, stateDispatch } = useStateContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/products');
        if(res.status === 200) {
          stateDispatch({ type: 'GET_PRODUCT_DATA', payload: res.data.products })
        }
        setIsLoading(false);
      } catch(err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <main className="listing">
      <div className="listing__wrapper grid">
        <Filters />
        {!isLoading ? (
          <div className="listing__products layout grid-auto-fill">
            {
              state.productData.map(item => {
                return <ProductCardVertical  {...item} key={item._id} />
              })
            }
          </div>) : (
            <Loader />
          )}
      </div>
    </main>
  );
};

export { ProductListing };
