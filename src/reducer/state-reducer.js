const stateReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      return { ...state, productData: action.payload };

    case "GET_WISHLIST_DATA":
      return { ...state, productData: action.payload };

    case "GET_CART_DATA":
      return { ...state, productData: action.payload };
      
    default:
      return state;
  }
};

export { stateReducer };
