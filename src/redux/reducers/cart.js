export const initialCart = [];

const cart = (state = initialCart, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      // add one back to quantity if removed from cart
      const newState = [...state].filter(
        item => item.name !== action.payload.name
      );

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
