import { useSelector } from 'react-redux';

import { ButtonGroup, Button, Box, Typography, Container } from '@mui/material';

import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Categories({ setChosenCategory }) {
  const categories = useSelector(state => state.categories);
  const [categoryString, setCategoryString] = useState('ELECTRONICS');
  const [categoryDescription, setCategoryDescription] = useState(
    'Tvs, laptops and more!'
  );

  return (
    <>
      <Box mt={2}>
        <Typography variant='body1'>Browse our Categories</Typography>
        <ButtonGroup
          variant='text'
          aria-label='text button group'
        >
          {categories.map((product, i) => {
            let entries = Object.entries(product);
            return (
              <Button
                key={i}
                onClick={() => {
                  setChosenCategory(i);
                  setCategoryString(Object.keys(categories[i]));
                  setCategoryDescription(Object.values(categories[i]));
                }}
              >
                {entries[0][0]}
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
          {categoryString}
        </Typography>
        <Typography
          variant='h6'
          color='darkgray'
          mb={8}
        >
          {categoryDescription}
        </Typography>
      </Container>
    </>
  );
}

Categories.propTypes = {
  setChosenCategory: PropTypes.func,
};
