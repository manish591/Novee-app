import React from "react";

import { Carousel } from "../../components";
import { brandLogoData } from "../../utilis/utilis";
import { Link } from "react-router-dom";

const Home = () => {
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
              <h3 className="product__category">Phones</h3>
              <Link to="/products" className="product__link flex">
                <p>Shop</p>
                <span className="material-icons">navigate_next</span>
              </Link>
            </div>
          </section>
          <section className="products__name flex product--tablet">
            <div className="product__wrapper flex">
              <h3 className="product__category">Tablets</h3>
              <Link to="/products" className="product__link flex">
                <p>Shop</p>
                <span className="material-icons">navigate_next</span>
              </Link>
            </div>
          </section>
          <section className="products__name flex product--laptop">
            <div className="product__wrapper flex">
              <h3 className="product__category">Laptops</h3>
              <Link to="/products" className="product__link flex">
                <p>Shop</p>
                <span className="material-icons">navigate_next</span>
              </Link>
            </div>
          </section>
        </div>
        <div className="product-feature">
          <div className="product-one grid">
            <div className="product-feature__picture">
              <img
                src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="responsive-img"
              />
            </div>
            <div className="product-feature--info">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                dolor velit accusantium quos obcaecati porro deserunt laboriosam
                tempora quasi quae! Accusantium pariatur possimus enim suscipit
                velit quia repellendus rerum impedit veniam repellat debitis
                iusto eveniet natus facere eaque, nisi maxime assumenda ex
                magnam delectus? Culpa laborum expedita eum iusto nobis?
              </p>
            </div>
          </div>
          <div className="product-two grid">
            <div className="product-feature__picture">
              <img
                src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="responsive-img"
              />
            </div>
            <div className="product-feature--info">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                dolor velit accusantium quos obcaecati porro deserunt laboriosam
                tempora quasi quae! Accusantium pariatur possimus enim suscipit
                velit quia repellendus rerum impedit veniam repellat debitis
                iusto eveniet natus facere eaque, nisi maxime assumenda ex
                magnam delectus? Culpa laborum expedita eum iusto nobis?
              </p>
            </div>
          </div>
          <div className="product-three grid">
            <div className="product-feature__picture">
              <img
                src="https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhYmxldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="responsive-img"
              />
            </div>
            <div className="product-feature--info">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                dolor velit accusantium quos obcaecati porro deserunt laboriosam
                tempora quasi quae! Accusantium pariatur possimus enim suscipit
                velit quia repellendus rerum impedit veniam repellat debitis
                iusto eveniet natus facere eaque, nisi maxime assumenda ex
                magnam delectus? Culpa laborum expedita eum iusto nobis?
              </p>
            </div>
          </div>
        </div>
        <div className="brand-idea flex">
          <div className="brand-idea__message">
            <h2 className="brand-idea__title">
              Providing You The Best Tech Gadgets Ever.
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
              src="https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export { Home };
