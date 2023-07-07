import categories, { updateCategories, initialCategories } from './categories';

describe('categories reducer', () => {
  it('handles initial state', () => {
    expect(updateCategories({})).toEqual({
      payload: {},
      type: 'updateCategories',
    });
  });
});
