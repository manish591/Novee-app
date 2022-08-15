const initialDataState = {
  wishlistData: [],
  cartData: [],
  productData: [],
  addressData: [],
  ordersData: [],
};

// eslint-disable-next-line default-param-last
const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_DATA':
      return { ...state, productData: action.payload };

    case 'GET_WISHLIST_DATA':
      return { ...state, wishlistData: action.payload };

    case 'GET_CART_DATA':
      return { ...state, cartData: action.payload };

    case 'GET_ADDRESS_DATA':
      return { ...state, addressData: action.payload };

    case 'GET_ORDERS_DATA':
      return { ...state, ordersData: action.payload };

    default:
      return state;
  }
};

export { dataReducer, initialDataState };
