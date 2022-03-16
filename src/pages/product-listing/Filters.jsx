import React from "react";

import { filterData, filterCategories } from '../../utilis/utilis';
import { Checkbox } from "./Checkbox";

const Filters = () => {
  return (
    <>
      <header className="listing__header listing-header grid">
        <div className="listing-header__right flex">
          <h3>Filters</h3>
          <button>Clear All</button>
        </div>
        <div className="listing-header__left"></div>
      </header>
      <aside className="listing__filters filter-list">
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
              />
              <label htmlFor="sort-two" className="filters__label">
                Low To High
              </label>
            </div>
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Availability</legend>
            <Checkbox 
              id="availability-one" 
              label="availability-one" 
              name="Include out of stock" 
            />
            <Checkbox 
              id="availability-two" 
              label="availability-two" 
              name="fast delivery only" 
            />
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Prices</legend>
            {
              filterData[filterCategories[2]].map(item => {
                return <Checkbox {...item} key={item.id} label={filterCategories[2]} />
              })
            }
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Brands</legend>
            {
              filterData[filterCategories[0]].map(item => {
                return <Checkbox {...item} key={item.id} label={filterCategories[0]} />
              })
            }
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Ratings</legend>
            {
              filterData[filterCategories[1]].map(item => {
                return <Checkbox {...item} key={item.id} label={filterCategories[1]} />
              })
            }
          </fieldset>
        </form>
      </aside>
    </>
  );
};

export { Filters };
