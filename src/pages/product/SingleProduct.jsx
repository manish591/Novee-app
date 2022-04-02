import React from "react";

const SingleProduct = () => {
  return (
    <div className="single-product">
      <div className="single-product__wrapper grid">
        <div className="single-product__img-container">
          <img
            className="single-product__image"
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="laptop"
          />
        </div>
        <div className="single-product__content sp-content">
          <section className="sp-content__header">
            <p>Laptops</p>
            <h1 className="sp-content__title">Asus Vivobook 14 Laptop</h1>
          </section>
          <section className="sp-content__desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              animi voluptatum fugiat nulla earum doloremque, natus aperiam
              perferendis. Quo tenetur aperiam vero qui expedita nisi ipsam
              necessitatibus sequi sint ipsa!
            </p>
          </section>
          <section className="sp-content__pricing flex">
            <p className="sp-content__discount-price">$250</p>
            <p className="sp-content__discount-rate">30%</p>
            <p className="sp-content__actual-price">$300</p>
          </section>
          <section className="sp-content__actions flex">
            <button className="btn btn--outlined-secondary">
              Add To Wishlist
            </button>
            <button className="btn btn--contained-primary">Add To Cart</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export { SingleProduct };
