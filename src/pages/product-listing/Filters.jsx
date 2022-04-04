import React, { useState } from "react";

import { filterData, filterCategories } from "../../utilis/utilis";
import { Checkbox } from "./Checkbox";
import { useStateContext } from "../../hooks";

const Filters = () => {
  const { state, stateDispatch } = useStateContext();
  const { filters } = state;
  const { sort, rating, brand, fastDelivery, includeOutOfStock } = filters;
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <header className="listing__header listing-header grid">
        <div className="listing-header__right flex">
          <h3 onClick={() => setShowFilters(!showFilters)}>Filters</h3>
          <button
            onClick={() =>
              stateDispatch({ type: "CLEAR_ALL_FILTERS", payload: {} })
            }
            style={{ cursor: "pointer" }}
          >
            Clear All
          </button>
        </div>
        <div className="listing-header__left"></div>
      </header>
      <aside
        className={`listing__filters filter-list ${
          showFilters ? `filter-list__open` : ""
        }`}
      >
        <div className="filter-list__close flex">
          <button className="filter-list__close-btn">Close</button>
        </div>
        <div className="filter-list__controls flex">
          <button className="filter-list__cancel">Clear Filters</button>
          <button className="filter-list__ok">Show Results</button>
        </div>
        <form className="listing__form">
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Sort</legend>
            <div className="filters__group">
              <input
                type="radio"
                id="sort-one"
                name="sort"
                className="filters__checkbox"
                checked={sort === "HIGH_TO_LOW"}
                onChange={(e) => {
                  stateDispatch({ type: "HIGH_TO_LOW", payload: {} });
                }}
              />
              <label htmlFor="sort-one" className="filters__label">
                High To Low
              </label>
            </div>
            <div className="filters__group">
              <input
                type="radio"
                name="sort"
                id="sort-two"
                className="filters__checkbox"
                checked={sort === "LOW_TO_HIGH"}
                onChange={(e) => {
                  stateDispatch({ type: "LOW_TO_HIGH", payload: {} });
                }}
              />
              <label htmlFor="sort-two" className="filters__label">
                Low To High
              </label>
            </div>
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Category</legend>
            <div className="filters__group">
              <input
                type="radio"
                id="category-phone"
                name="category"
                className="filters__checkbox"
              />
              <label htmlFor="category-phone" className="filters__label">
                Phones
              </label>
            </div>
            <div className="filters__group">
              <input
                type="radio"
                id="category-tablet"
                name="category"
                className="filters__checkbox"
              />
              <label htmlFor="category-tablet" className="filters__label">
                Tablets
              </label>
            </div>
            <div className="filters__group">
              <input
                type="radio"
                id="category-laptop"
                name="category"
                className="filters__checkbox"
              />
              <label htmlFor="category-laptop" className="filters__label">
                Laptops
              </label>
            </div>
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Availability</legend>
            <Checkbox
              id="availability-one"
              label="availability-one"
              name="Include-out-of-stock"
              isChecked={includeOutOfStock}
              callback={(e) => {
                stateDispatch({ type: "INCLUDE_OUT_OF_STOCK", payload: {} });
              }}
            />
            <Checkbox
              id="availability-two"
              label="availability-two"
              name="fast-delivery-only"
              isChecked={fastDelivery}
              callback={(e) => {
                stateDispatch({ type: "FAST_DELIVERY", payload: {} });
              }}
            />
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Brands</legend>
            {filterData[filterCategories[0]].map((item) => {
              return (
                <Checkbox
                  {...item}
                  key={item.id}
                  label={filterCategories[0]}
                  isChecked={brand.some(
                    (brand) => brand.toLowerCase() === item.name.toLowerCase()
                  )}
                  callback={(e) => {
                    stateDispatch({
                      type: "FILTER_BY_BRAND",
                      payload: { value: item.name.toLowerCase() },
                    });
                  }}
                />
              );
            })}
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Ratings</legend>
            {filterData[filterCategories[1]].map((item) => {
              return (
                <Checkbox
                  {...item}
                  key={item.id}
                  label={filterCategories[1]}
                  isChecked={rating.some(
                    (rating) => rating.toLowerCase() === item.name.toLowerCase()
                  )}
                  callback={(e) => {
                    stateDispatch({
                      type: "FILTER_BY_RATING",
                      payload: { value: item.name.toLowerCase() },
                    });
                  }}
                />
              );
            })}
          </fieldset>
        </form>
      </aside>
    </>
  );
};

export { Filters };
