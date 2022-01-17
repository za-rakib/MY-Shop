const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, product: payload };
    default:
      return state;
  }
};
export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SELECT_PRODUCT":
      return { ...state, ...payload };
    default:
      return state;
  }
};
