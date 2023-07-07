import { useDispatch } from 'react-redux';
import { updateCategories } from '../redux/reducers/categories';
import { updateProducts } from '../redux/reducers/products';

import { Box, Button } from '@mui/material';

import PropTypes from 'prop-types';

export default function AddButtons({ chosenCategory }) {
  const testCategory = {
    CONSTRUCTION: 'How did we get all of this',
  };

  const testElectronic = {
    Phone: {
      productType: 0,
      description: 'call all the people',
      url: `${import.meta.env.VITE_UNSPLASH_URL}phone`,
    },
  };
  const testFood = {
    Strawberry: {
      productType: 1,
      description: 'sweet or sour?',
      url: `${import.meta.env.VITE_UNSPLASH_URL}strawberry`,
    },
  };

  const dispatch = useDispatch();
  return (
    <Box mt={2}>
      <Button
        onClick={() => {
          const item = chosenCategory === 0 ? testElectronic : testFood;

          dispatch(updateProducts(item));
        }}
      >
        Add new Product
      </Button>
      <Button
        onClick={() => {
          dispatch(updateCategories(testCategory));
        }}
      >
        Add new Category
      </Button>
    </Box>
  );
}

AddButtons.propTypes = {
  chosenCategory: PropTypes.number,
};
