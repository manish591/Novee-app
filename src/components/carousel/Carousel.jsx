import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../hooks';

const Carousel = () => {
  const [slideWidth, setSlideWidth] = useState(undefined);
  const { state } = useStateContext();
  const product = state?.productData[4];
  const carouselContainerRef = useRef();
  const slideRef = useRef();

  const findNewProducts = () => {
    return state.productData.filter((item, index) => {
      if (index < 3) {
        return item;
      }
    });
  };

  const handleNavigateCarousel = (type) => {
    const maxScrollWidth = carouselContainerRef?.current?.scrollWidth;
    const gap = 10;
    if (type === 'forword') {
      let scrollBy = carouselContainerRef.current.scrollLeft + slideWidth + gap;
      carouselContainerRef.current.scrollLeft =
        scrollBy >= maxScrollWidth ? 0 : scrollBy;
    } else if (type === 'backword') {
      let scrollBy = carouselContainerRef.current.scrollLeft - slideWidth;
      carouselContainerRef.current.scrollLeft =
        scrollBy <= 0 ? maxScrollWidth : scrollBy;
    }
  };

  useEffect(() => {
    function handleResize() {
      setSlideWidth(slideRef?.current?.offsetWidth);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__slider">
          <span
            className="material-icons move-left"
            onClick={() => handleNavigateCarousel('backword')}
          >
            chevron_left
          </span>
          <section className="carousel" ref={carouselContainerRef}>
            <article
              className="carousel__item carousel-slide flex"
              ref={slideRef}
            >
              <div className="carousel-slide__info grid">
                <small className="carousel-slide__label">New Product</small>
                <h2 className="carousel-slide__name">{product?.title}</h2>
                <p className="carousel-slide__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, esse debitis! Quidem cumque eum illum?
                </p>
                <button className="carousel-slide__btn btn btn--contained-warning">
                  <Link to={`/products/${product?._id}`}>See Product</Link>
                </button>
              </div>
            </article>
            {findNewProducts().map((item) => {
              return (
                <article
                  key={item._id}
                  className="carousel__item carousel-slide flex"
                >
                  <div className="carousel-slide__info">
                    <small className="carousel-slide__label">New Product</small>
                    <h2 className="carousel-slide__name">{item?.title}</h2>
                    <p className="carousel-slide__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, esse debitis! Quidem cumque eum illum?
                    </p>
                    <button className="carousel-slide__btn btn btn--contained-warning">
                      <Link to={`/products/${item?._id}`}>See Product</Link>
                    </button>
                  </div>
                </article>
              );
            })}
          </section>
          <span
            className="material-icons move-right"
            onClick={() => handleNavigateCarousel('forword')}
          >
            chevron_right
          </span>
        </div>
      </div>
    </section>
  );
};

export { Carousel };
