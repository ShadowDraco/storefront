export const initialProducts = [
  {
    ELECTRONICS: {
      TV: {
        description: 'See all the things',
        url: 'https://source.unsplash.com/random?tv',
      },

      Macbook: {
        description: 'Do all the things',
        url: 'https://source.unsplash.com/random?macbook',
      },
    },
  },
  {
    FOOD: {
      Potato: {
        description: 'versatile!',
        url: 'https://source.unsplash.com/random?potato',
      },

      Carrot: {
        description: 'want good eyesight?',
        url: 'https://source.unsplash.com/random?carrot',
      },
    },
  },
];

export const products = (state = initialProducts, action) => {
  switch (action.type) {
    case 'updateProducts':
      return [...state, action.payload];
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
