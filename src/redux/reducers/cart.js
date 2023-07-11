export const initialCart = { cart: [], showPage: false };

const cart = (state = initialCart, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'remove':
      // add one back to quantity if removed from cart
      let newCart = { ...state }.cart.filter(
        item => item.name !== action.payload.name
      );

      return { ...state, cart: newCart };
    case 'toggle':
      return { ...state, showPage: action.payload };
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

export const showPage = bool => {
  return {
    type: 'toggle',
    payload: bool,
  };
};

export default cart;
