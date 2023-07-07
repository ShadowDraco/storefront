import cart, { addToCart, removeFromCart } from './cart';

describe('cart reducer', () => {
  it('handles initial state', () => {
    expect(addToCart({})).toEqual({
      payload: {},
      type: 'add',
    });
  });
});
