export const initialProduct = {};

const currentProduct = (state = initialProduct, action) => {
  switch (action.type) {
    case 'set':
      return action.payload;
    default:
      return state;
  }
};

export const setCurrentProduct = product => {
  return {
    type: 'set',
    payload: product,
  };
};

export default currentProduct;
