import { dataReducer } from 'reducer/data-reducer/data-reducer';
import { filterReducer } from 'reducer/filter-reducer/filter-reducer';

const stateReducer = (state, action) => {
  state = {
    filters: {
      ...filterReducer(state.filters, action),
    },
    data: {
      ...dataReducer(state.data, action),
    },
  };

  switch (action.type) {
    case 'CLEAR_USER_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          cartData: [],
          wishlistData: [],
          productData: [],
          addressData: [],
          ordersData: [],
        },
        filters: {
          ...state.filters,
          sort: '',
          fastDelivery: '',
          includeOutOfStock: '',
          rating: [],
          price: [],
          category: [],
          brand: [],
          searchQuery: '',
        },
      };
    default:
      return state;
  }
};

export { stateReducer };
