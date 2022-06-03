const findHighestLowestRating = (arr) => {
  let range = { highest: 0, lowest: 5 };
  arr.forEach((item) => {
    if (parseInt(item, 10) > range.highest) {
      range = { ...range, highest: parseInt(item, 10) };
    }
    if (parseInt(item, 10) < range.lowest) {
      range = { ...range, lowest: parseInt(item, 10) };
    }
  });
  return range;
};

const applyFilterBySort = (arr, type) => {
  if (type === 'HIGH_TO_LOW') {
    return [...arr].sort((a, b) => b.price - a.price);
  }

  if (type === 'LOW_TO_HIGH') {
    return [...arr].sort((a, b) => a.price - b.price);
  }
  return arr;
};

const applyFilterByFastDelivery = (arr, type) => {
  if (type) {
    return arr.filter((item) => item.fastDelivery);
  }
  return arr;
};

const applyFilterByInStock = (arr, type) => {
  if (type) {
    return arr;
  }
  return arr.filter((item) => item.inStock);
};

const applyFilterByBrands = (arr, type) => {
  if (type.length > 0) {
    return arr.filter((item) => type.includes(item.brand.toLowerCase()));
  }
  return arr;
};

const applyFilterByRatings = (arr, type) => {
  const { highest, lowest } = findHighestLowestRating(type);
  if (type.length === 1) {
    return arr.filter(
      (item) =>
        item.ratings >= parseInt(type[0], 10) &&
        item.ratings < parseInt(type[0], 10) + 1,
    );
  }
  if (type.length > 1) {
    return arr.filter(
      (item) => item.ratings >= lowest && item.ratings < highest + 1,
    );
  }
  return arr;
};

const applyFilterByIdealFor = (arr, type) => {
  if (type === 'Men') {
    return arr.filter((item) => item.idealFor === 'Men');
  }
  if (type === 'Women') {
    return arr.filter((item) => item.idealFor === 'Women');
  }
  return arr;
};

const applyFilterBySearch = (arr, searchQuery) => {
  if (searchQuery !== '') {
    return arr.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
  return arr;
};

export const updatedProductList = (
  originalProductData,
  sort,
  idealFor,
  ratingsList,
  brandList,
  searchQuery,
  deliveryFilter,
  stockFilter,
) => {
  const getFiltersByRatingProduct = applyFilterByRatings(
    originalProductData,
    ratingsList,
  );

  const getFiltersByBrandsProduct = applyFilterByBrands(
    getFiltersByRatingProduct,
    brandList,
  );

  const getFiltersByStockProduct = applyFilterByInStock(
    getFiltersByBrandsProduct,
    stockFilter,
  );

  const getFiltersByDeliveryProduct = applyFilterByFastDelivery(
    getFiltersByStockProduct,
    deliveryFilter,
  );

  const getFiltersBySortProduct = applyFilterBySort(
    getFiltersByDeliveryProduct,
    sort,
  );

  const getFiltersByIdealFor = applyFilterByIdealFor(
    getFiltersBySortProduct,
    idealFor,
  );

  const getFilterBySearchQuery = applyFilterBySearch(
    getFiltersByIdealFor,
    searchQuery,
  );

  return getFilterBySearchQuery;
};
