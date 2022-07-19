import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, ProductCardVertical } from 'components';
import { brandLogoData } from 'utilis';
import { useScrollToTop, useStateContext } from 'hooks';

const Home = () => {
  const { state } = useStateContext();

  const bestSellingProducts = () => {
    return state.productData.filter(
      (item) => item.inStock && Number(item.ratings) > 4,
    );
  };

  useScrollToTop();
  return (
    <main className="main">
      <Carousel />
      <div className="main__wrapper">
        <div className="brand-list flex">
          {brandLogoData.map((item) => {
            return (
              <section key={item.name} className="brand-list__name">
                <img src={item.img} alt="" className="brand-show-img" />
              </section>
            );
          })}
        </div>
        <div className="products flex">
          <section className="products__name flex product--men">
            <div className="product__wrapper flex">
              <h3 className="product__category">Mens Products</h3>
              <Link to="/products" className="product__link flex">
                <p>Shop</p>
                <span className="material-icons">navigate_next</span>
              </Link>
            </div>
          </section>
          <section className="products__name flex product--women">
            <div className="product__wrapper flex">
              <h3 className="product__category">Women Products</h3>
              <Link to="/products" className="product__link flex">
                <p>Shop</p>
                <span className="material-icons">navigate_next</span>
              </Link>
            </div>
          </section>
          <section className="products__name flex product--kids">
            <div className="product__wrapper flex">
              <h3 className="product__category">Kids Products</h3>
              <Link to="/products" className="product__link flex">
                <p>Shop</p>
                <span className="material-icons">navigate_next</span>
              </Link>
            </div>
          </section>
        </div>
        <section className="best-seller">
          <h1 className="best-seller__title">Best Selling Products</h1>
          <div className="best-sellter__products">
            {bestSellingProducts().map((item) => {
              return <ProductCardVertical key={item._id} product={item} />;
            })}
          </div>
        </section>
        <div className="brand-idea flex">
          <div className="brand-idea__message">
            <h2 className="brand-idea__title">
              Providing you the most fashionable and affordable Clothing
            </h2>
            <p className="brand-idea__desc">
              Novee is one of the best online shopping sites in India. This
              e-commerce site has ample amount of products from different brands
              such as Levi&apos;s, Gant and Wrogn to name a few. You can easily
              browse through their products, filter by category or brand and
              make your purchase through credit/debit card or bank transfer
              payment options.
            </p>
          </div>
          <div className="brand-idea__picture">
            <img
              src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1649328191/image_34_onsc8f.webp"
              alt="brand-idea"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export { Home };
