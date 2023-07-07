import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { setCurrentProduct } from '../../redux/reducers/currentProduct';

export default function Products() {
  const chosenCategory = useSelector(state => state.categories.chosenCategory);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <Box
      mt={6}
      mb={6}
    >
      <Container sx={{ display: 'flex', gap: 5 }}>
        {Object.entries(products)[chosenCategory.index][1].map((product, i) => {
          return (
            <Card key={i}>
              <CardMedia
                component='img'
                sx={{ height: 120 }}
                image={product.url}
                title={product.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='div'
                >
                  {product.name}
                </Typography>
                <Typography
                  variant='caption'
                  color='text.secondary'
                >
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>ADD TO CART</Button>
                <Button
                  size='small'
                  onClick={() => {
                    dispatch(setCurrentProduct(product));
                  }}
                >
                  VIEW DETAILS
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </Box>
  );
}
