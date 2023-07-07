import currentProduct, { setCurrentProduct } from './currentProduct';

describe('current product reducer', () => {
  it('handles initial state', () => {
    expect(setCurrentProduct({})).toEqual({
      payload: {},
      type: 'set',
    });
  });
});
