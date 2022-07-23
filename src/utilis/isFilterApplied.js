export const isFilterApplied = ({
  sort,
  fastDelivery,
  includeOutOfStock,
  rating,
  price,
  category,
  brand,
  idealFor,
  searchQuery,
}) => {
  if (
    sort ||
    fastDelivery ||
    includeOutOfStock ||
    idealFor ||
    searchQuery ||
    rating.length > 0 ||
    price.length > 0 ||
    category.length > 0 ||
    brand.length > 0
  ) {
    return true;
  }
  return false;
};
