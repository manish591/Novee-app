import React from "react";

const Image = ({ img, title }) => {
  return (
    <picture>
      <source srcSet={img?.WEB_P} type="image/webp" />
      <img src={img?.JPG} alt={title} className="card__img" />
    </picture>
  );
};

export { Image };
