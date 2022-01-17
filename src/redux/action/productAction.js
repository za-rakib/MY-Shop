export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const selectProducts = (product) => {
  return {
    type: "SELECT_PRODUCT",
    payload: product,
  };
};

export const deleteProducts = (product) => {
    return {
        type: "DELETE_PRODUCT",
        payload: product,
    }
}