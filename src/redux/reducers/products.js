export const initialProducts = {
  ELECTRONICS: [
    {
      name: 'TV',
      description: 'See all the things',
      url: `${import.meta.env.VITE_UNSPLASH_URL}tv`,
      price: 600,
      inventory: Math.floor(Math.random() * 20) + 10,
    },

    {
      name: 'Macbook',
      description: 'Do all the things',
      url: `${import.meta.env.VITE_UNSPLASH_URL}macbook`,
      price: 1400,
      inventory: Math.floor(Math.random() * 20) + 5,
    },
  ],
  FOOD: [
    {
      name: 'Potato',
      description: 'versatile!',
      url: `${import.meta.env.VITE_UNSPLASH_URL}potato`,
      price: 6,
      inventory: Math.floor(Math.random() * 100) + 10,
    },

    {
      name: 'Carrot',
      description: 'want good eyesight?',
      url: `${import.meta.env.VITE_UNSPLASH_URL}carrot`,
      price: 4,
      inventory: Math.floor(Math.random() * 100) + 20,
    },
  ],
};

export const products = (state = initialProducts, action) => {
  switch (action.type) {
    case 'updateProducts':
      return [...state, action.payload];
    case 'selectProduct':
      console.log('Selecting product', action);
      return state;
    default:
      return state;
  }
};

export const updateProducts = newProduct => {
  return {
    type: 'updateProducts',
    payload: newProduct,
  };
};

export default products;
