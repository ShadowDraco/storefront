export const initialCart = [];

const cart = (state = initialCart, action) => {
  switch (action.type) {
    case 'add':
      action.payload.inStock = action.payload.inStock - 1;
      return [...state, action.payload];
    case 'remove':
      // add one back to quantity if removed from cart
      const newState = [...state].filter(item => {
        if (item.name !== action.payload.name) {
          return true;
        } else {
          item.inStock = item.inStock + 1;
          return false;
        }
      });

      return newState;
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
