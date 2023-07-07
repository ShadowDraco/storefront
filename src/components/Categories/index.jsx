import { useSelector, useDispatch } from 'react-redux';
import { chooseCategory } from '../../redux/reducers/categories';

import { ButtonGroup, Button, Box, Typography, Container } from '@mui/material';

import PropTypes from 'prop-types';

export default function Categories() {
  const chosenCategory = useSelector(state => state.categories.chosenCategory);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <Box mt={2}>
        <Typography variant='body1'>Browse our Categories</Typography>
        <ButtonGroup
          variant='text'
          aria-label='text button group'
        >
          {Object.entries(categories).map((category, i) => {
            return category[0] === 'chosenCategory' ? (
              ''
            ) : (
              <Button
                id={chosenCategory.index === i ? 'active' : ''}
                key={i}
                onClick={() => {
                  dispatch(
                    chooseCategory({
                      index: i,
                      string: category[0],
                      description: category[1],
                    })
                  );
                }}
              >
                {category[0]}
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
          {chosenCategory.string}
        </Typography>
        <Typography
          variant='h6'
          color='darkgray'
          mb={8}
        >
          {chosenCategory.description}
        </Typography>
      </Container>
    </>
  );
}
