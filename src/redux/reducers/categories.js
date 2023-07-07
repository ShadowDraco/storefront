export const initialCategories = [
  { ELECTRONICS: 'Tvs, laptops and more!' },
  { FOOD: 'Everything tasty and savory' },
];

const categories = (state = initialCategories, action) => {
  switch (action.type) {
    case 'updateCategories':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const updateCategories = newCategory => {
  return {
    type: 'updateCategories',
    payload: newCategory,
  };
};

export default categories;
