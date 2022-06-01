import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../hooks';

const Carousel = () => {
  const [slideWidth, setSlideWidth] = useState(undefined);
  const { state } = useStateContext();
  const carouselContainerRef = useRef();
  const slideRef = useRef();

  const findNewProducts = () => {
    return state.productData.filter((_, index) => index < 3);
  };

  const handleNavigateCarousel = (type) => {
    const maxScrollWidth = carouselContainerRef?.current?.scrollWidth;
    const gap = 10;
    if (type === 'forword') {
      const scrollBy =
        carouselContainerRef.current.scrollLeft + slideWidth + gap;
      carouselContainerRef.current.scrollLeft =
        scrollBy >= maxScrollWidth ? 0 : scrollBy;
    } else if (type === 'backword') {
      const scrollBy = carouselContainerRef.current.scrollLeft - slideWidth;
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
          <button
            type="button"
            className="material-icons move-left"
            onClick={() => handleNavigateCarousel('backword')}>
            chevron_left
          </button>
          <section className="carousel" ref={carouselContainerRef}>
            {findNewProducts().map((item) => {
              return (
                <article
                  key={item._id}
                  ref={slideRef}
                  className="carousel__item carousel-slide flex"
                  style={{
                    backgroundImage: `url(${item.img.JPG})`,
                    backgroundRepeat: 'no-repeat',
                  }}>
                  <div className="carousel-slide__info">
                    <small className="carousel-slide__label">New Product</small>
                    <h2 className="carousel-slide__name">{item?.title}</h2>
                    <p className="carousel-slide__description">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      className="carousel-slide__btn btn btn--contained-primary">
                      <Link to={`/products/${item?._id}`}>See Product</Link>
                    </button>
                  </div>
                </article>
              );
            })}
          </section>
          <button
            type="button"
            className="material-icons move-right"
            onClick={() => handleNavigateCarousel('forword')}>
            chevron_right
          </button>
        </div>
      </div>
    </section>
  );
};

export { Carousel };
