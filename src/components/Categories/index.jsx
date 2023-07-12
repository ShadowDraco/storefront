import { useSelector, useDispatch } from 'react-redux';
import {
  chooseCategory,
  fetchCategories,
  updateCategories,
} from '../../redux/reducers/categories';

import { ButtonGroup, Button, Box, Typography, Container } from '@mui/material';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function Categories({ testCategories }) {
  const chosenCategory = useSelector(state => state.chosenCategory);
  const categories = testCategories
    ? testCategories
    : useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof testCategories === undefined) {
      console.log('\n\nNO TEST CATEGORY ', testCategories);
      try {
        dispatch(fetchCategories()).then(data => {
          dispatch(updateCategories(data));
        });
      } catch (error) {
        console.error('Error in Categories UseEffect', error);
      }
    }
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
                {`${category.name}`.toUpperCase()}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
      <Container sx={{ textAlign: 'center' }}>
        <Typography
          variant='h2'
          mt={8}
          gutterBottom
          data-testid='CATEGORY'
        >
          {categories[chosenCategory].name.toUpperCase()}
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
