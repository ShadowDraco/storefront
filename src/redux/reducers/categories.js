export const initialCategories = {
  ELECTRONICS: 'Tvs, laptops and more!',
  FOOD: 'Everything tasty and savory',
  chosenCategory: {
    index: 0,
    string: 'ELECTRONICS',
    description: 'Tvs, laptops and more!',
  },
};

const categories = (state = initialCategories, action) => {
  switch (action.type) {
    case 'updateCategories':
      return categoryUpdate(state, action);
    case 'chooseCategory':
      return { ...state, chosenCategory: action.payload };
    default:
      return state;
  }
};

//? unused because not required
const categoryUpdate = (state, action) => {
  const stateCopy = { ...state };
  stateCopy[action.payload.productType] = [
    state[action.payload.productType],
    action.payload,
  ];
 
  return stateCopy;
};

export const updateCategories = newCategory => {
  return {
    type: 'updateCategories',
    payload: newCategory,
  };
};

export const chooseCategory = category => {
  return {
    type: 'chooseCategory',
    payload: category,
  };
};

export default categories;
