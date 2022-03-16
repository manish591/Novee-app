import React from "react";

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
            <div className="filters__group">
              <input
                type="checkbox"
                id="availability-one"
                name="availability"
                className="filters__checkbox"
              />
              <label htmlFor="availability-one" className="filters__label">
                Include out of stock
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="availability"
                id="availability-two"
                className="filters__checkbox"
              />
              <label htmlFor="availability-two" className="filters__label">
                Fast delivery only
              </label>
            </div>
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Prices</legend>
            <div className="filters__group">
              <input
                type="checkbox"
                id="prices-one"
                name="prices"
                className="filters__checkbox"
              />
              <label htmlFor="prices-one" className="filters__label">
                Rs. 200 to Rs. 1000
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="prices"
                id="prices-two"
                className="filters__checkbox"
              />
              <label htmlFor="prices-two" className="filters__label">
                Rs. 1000 to Rs. 2000
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="prices"
                id="prices-three"
                className="filters__checkbox"
              />
              <label htmlFor="prices-three" className="filters__label">
                Rs. 2000 to Rs. 3000
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="prices"
                id="prices-four"
                className="filters__checkbox"
              />
              <label htmlFor="prices-four" className="filters__label">
                Rs. 3000 to Rs. 5000
              </label>
            </div>
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Brands</legend>
            <div className="filters__group">
              <input
                type="checkbox"
                id="brand-one"
                name="brand"
                className="filters__checkbox"
              />
              <label htmlFor="brand-one" className="filters__label">
                Asus
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-two"
                className="filters__checkbox"
              />
              <label htmlFor="brand-two" className="filters__label">
                Nova
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-three"
                className="filters__checkbox"
              />
              <label htmlFor="brand-three" className="filters__label">
                Apple
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-four"
                className="filters__checkbox"
              />
              <label htmlFor="brand-four" className="filters__label">
                Vivo
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-five"
                className="filters__checkbox"
              />
              <label htmlFor="brand-five" className="filters__label">
                Dell
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-six"
                className="filters__checkbox"
              />
              <label htmlFor="brand-six" className="filters__label">
                Oppo
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                id="brand-seven"
                name="brand"
                className="filters__checkbox"
              />
              <label htmlFor="brand-seven" className="filters__label">
                Acer
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-eight"
                className="filters__checkbox"
              />
              <label htmlFor="brand-eight" className="filters__label">
                Sony
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-nine"
                className="filters__checkbox"
              />
              <label htmlFor="brand-nine" className="filters__label">
                HP
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-ten"
                className="filters__checkbox"
              />
              <label htmlFor="brand-ten" className="filters__label">
                Redmi
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-eleven"
                className="filters__checkbox"
              />
              <label htmlFor="brand-eleven" className="filters__label">
                One Plus
              </label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="brand"
                id="brand-twelve"
                className="filters__checkbox"
              />
              <label htmlFor="brand-twelve" className="filters__label">
                Samsung
              </label>
            </div>
          </fieldset>
          <fieldset className="listing__filter-item filters">
            <legend className="filters__title">Ratings</legend>
            <div className="filters__group">
              <input
                type="checkbox"
                id="rating-one"
                name="rating"
                className="filters__checkbox"
              />
              <label htmlFor="rating-one" className="filters__label" >5 Star</label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="rating"
                id="rating-two"
                className="filters__checkbox"
              />
              <label htmlFor="rating-two" className="filters__label" >4 Star</label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="rating"
                id="rating-three"
                className="filters__checkbox"
              />
              <label htmlFor="rating-three" className="filters__label" >3 Star</label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="rating"
                id="rating-four"
                className="filters__checkbox"
              />
              <label htmlFor="rating-four" className="filters__label" >2 Star</label>
            </div>
            <div className="filters__group">
              <input
                type="checkbox"
                name="rating"
                id="rating-four"
                className="filters__checkbox"
              />
              <label htmlFor="rating-four" className="filters__label" >1 Star</label>
            </div>
          </fieldset>
        </form>
      </aside>
    </>
  );
};

export { Filters };
