import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ img, title }) => {
  return (
    <picture>
      <source srcSet={img?.WEB_P} type="image/webp" />
      <img src={img?.JPG} alt={title} className="card__img" />
    </picture>
  );
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { Image };
