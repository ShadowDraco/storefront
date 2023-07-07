export const initialCart = {};

const cart = (state = initialCart, action) => {
  switch (action.type) {
    case 'add':
      return state;
    case 'remove':
      return state;
    default:
      return state;
  }
};

export const addToCart = item => {
  return {
    type: 'add',
    payload: item,
  };
};

export const removeFromCart = item => {
  return {
    type: 'remove',
    payload: item,
  };
};

export default cart;
