import React from 'react';
import { Carousel, ProductCardVertical } from '../../components';
import { brandLogoData } from '../../utilis/utilis';
import { Link } from 'react-router-dom';
import { useScrollToTop, useStateContext } from '../../hooks';

const Home = () => {
  const { state } = useStateContext();

  const bestSellingProducts = () => {
    return state.productData.filter(
      (item) => item.inStock && Number(item.ratings) > 4,
    );
  };

  console.log(bestSellingProducts());

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
          <section className="products__name flex product--phone">
            <div className="product__wrapper flex">
              <h3 className="product__category">Mens Products</h3>
              <Link to="/products" className="product__link flex">
                <p>Shop</p>
                <span className="material-icons">navigate_next</span>
              </Link>
            </div>
          </section>
          <section className="products__name flex product--tablet">
            <div className="product__wrapper flex">
              <h3 className="product__category">Women Products</h3>
              <Link to="/products" className="product__link flex">
                <p>Shop</p>
                <span className="material-icons">navigate_next</span>
              </Link>
            </div>
          </section>
          <section className="products__name flex product--laptop">
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
              return <ProductCardVertical product={item} />;
            })}
          </div>
        </section>
        <div className="brand-idea flex">
          <div className="brand-idea__message">
            <h2 className="brand-idea__title">
              Providing you the most fashionable and affordable Clothing
            </h2>
            <p className="brand-idea__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae suscipit molestias perspiciatis inventore? Quidem
              repellat odio suscipit, culpa harum, placeat laudantium in, quo
              rerum nesciunt aperiam. Voluptatum, dolorum qui enim amet sit ipsa
              ab et accusantium autem sint nihil, facere mollitia repudiandae ex
              neque, blanditiis laboriosam ut tenetur eius inventore.
            </p>
          </div>
          <div className="brand-idea__picture">
            <img
              src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1649328191/image_34_onsc8f.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export { Home };
