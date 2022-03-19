const useAppActions = () => {
  const isAlreadyInWishlist = (arr, id) => arr.some((item) => item.id === id);

  return {
      isAlreadyInWishlist
  }
};

export { useAppActions };
