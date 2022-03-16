import React from "react";
import notFoundImg from "../../assets/undraw_page_not_found_re_e9o6.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFoundImg} alt="" className="not-found__img" />
    </div>
  );
};

export { NotFound };
