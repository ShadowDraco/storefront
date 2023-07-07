import products, { updateProducts, initialProducts } from './products';

describe('products reducer', () => {
  it('handles initial state', () => {
    expect(updateProducts({})).toEqual({
      payload: {},
      type: 'updateProducts',
    });
  });
});
