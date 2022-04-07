const stateReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      return { ...state, productData: action.payload };

    case "GET_WISHLIST_DATA":
      return { ...state, wishlistData: action.payload };

    case "GET_CART_DATA":
      return { ...state, cartData: action.payload };

    case "HIGH_TO_LOW":
      return { ...state, filters: { ...state.filters, sort: "HIGH_TO_LOW" } };

    case "LOW_TO_HIGH":
      return { ...state, filters: { ...state.filters, sort: "LOW_TO_HIGH" } };

    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        filters: {
          ...state.filters,
          includeOutOfStock: !state.filters.includeOutOfStock,
        },
      };

    case "FAST_DELIVERY":
      return {
        ...state,
        filters: {
          ...state.filters,
          fastDelivery: !state.filters.fastDelivery,
        },
      };

    case "FILTER_BY_BRAND":
      return state.filters.brand.some((item) => item === action.payload.value)
        ? {
            ...state,
            filters: {
              ...state.filters,
              brand: state.filters.brand.filter(
                (item) => item !== action.payload.value
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              brand: [...state.filters.brand, action.payload.value],
            },
          };

    case "FILTER_BY_RATING":
      return state.filters.rating.some((item) => item === action.payload.value)
        ? {
            ...state,
            filters: {
              ...state.filters,
              rating: state.filters.rating.filter(
                (item) => item !== action.payload.value
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              rating: [action.payload.value, ...state.filters.rating],
            },
          };

    case "FILTER_BY_PRICE":
      return state.filters.price.some((item) => item === action.payload.value)
        ? {
            ...state,
            filters: {
              ...state.filters,
              price: state.filters.price.filter(
                (item) => item !== action.payload.value
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              price: [...state.filters.price, action.payload.value],
            },
          };

    case "FILTER_BY_IDEAL_FOR":
      return {
        ...state,
        filters: { ...state.filters, idealFor: action.payload.filter },
      };

    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: "",
          fastDelivery: "",
          includeOutOfStock: "",
          rating: [],
          price: [],
          category: [],
          brand: [],
          idealFor: "",
        },
      };

    case "CLEAR_USER_DATA":
      return {
        ...state,
        cartData: [],
        wishlistData: [],
        productData: [],
        filters: {
          ...state.filters,
          sort: "",
          fastDelivery: "",
          includeOutOfStock: "",
          rating: [],
          price: [],
          category: [],
          brand: [],
        },
      };

    default:
      return state;
  }
};

export { stateReducer };
