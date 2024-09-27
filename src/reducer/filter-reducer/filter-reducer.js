const initialFilterState = {
  sort: '',
  fastDelivery: '',
  includeOutOfStock: '',
  rating: [],
  price: [],
  category: [],
  brand: [],
  idealFor: '',
  searchQuery: '',
};

// eslint-disable-next-line default-param-last
const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case 'HIGH_TO_LOW':
      return { ...state, sort: 'HIGH_TO_LOW' };

    case 'LOW_TO_HIGH':
      return { ...state, sort: 'LOW_TO_HIGH' };

    case 'INCLUDE_OUT_OF_STOCK':
      return {
        ...state,
        includeOutOfStock: !state.includeOutOfStock,
      };

    case 'FAST_DELIVERY':
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };

    case 'FILTER_BY_BRAND':
      return state.brand.some((item) => item === action.payload.value)
        ? {
            ...state,
            brand: state.brand.filter((item) => item !== action.payload.value),
          }
        : {
            ...state,
            brand: [...state.brand, action.payload.value],
          };

    case 'FILTER_BY_RATING':
      return state.rating.some((item) => item === action.payload.value)
        ? {
            ...state,
            rating: state.rating.filter(
              (item) => item !== action.payload.value,
            ),
          }
        : {
            ...state,
            rating: [action.payload.value, ...state.rating],
          };

    case 'FILTER_BY_PRICE':
      return state.price.some((item) => item === action.payload.value)
        ? {
            ...state,
            price: state.price.filter((item) => item !== action.payload.value),
          }
        : {
            ...state,
            price: [...state.price, action.payload.value],
          };

    case 'FILTER_BY_IDEAL_FOR':
      return {
        ...state,
        idealFor: action.payload.filter,
      };

    case 'FILTER_BY_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload.searchFor,
      };

    case 'CLEAR_ALL_FILTERS':
      return {
        ...state,
        sort: '',
        fastDelivery: '',
        includeOutOfStock: '',
        rating: [],
        price: [],
        category: [],
        brand: [],
        idealFor: '',
        searchQuery: '',
      };

    default:
      return state;
  }
};

export { filterReducer, initialFilterState };
