import { useSelector, useDispatch } from 'react-redux';
import {
  chooseCategory,
  fetchCategories,
  updateCategories,
} from '../../redux/reducers/categories';

import { ButtonGroup, Button, Box, Typography, Container } from '@mui/material';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function Categories() {
  const chosenCategory = useSelector(state => state.chosenCategory);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Box mt={2}>
        <Typography variant='body1'>Browse our Categories</Typography>
        <ButtonGroup
          variant='text'
          aria-label='text button group'
        >
          {categories.map((category, i) => {
            return (
              <Button
                id={chosenCategory === i ? 'active' : ''}
                key={i}
                onClick={() => {
                  dispatch(chooseCategory(i));
                }}
              >
                {category.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
      <Container sx={{ textAlign: 'center' }}>
        <Typography
          variant='h3'
          mt={8}
          data-testid='CATEGORY'
        >
          {categories[chosenCategory].name}
        </Typography>
        <Typography
          variant='h6'
          color='darkgray'
          mb={8}
        >
          {categories[chosenCategory].description}
        </Typography>
      </Container>
    </>
  );
}
