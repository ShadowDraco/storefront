import { useSelector, useDispatch } from 'react-redux';
import {
  asyncUpdateProduct,
  fetchProducts,
  getProducts,
  updateProduct,
} from '../../redux/reducers/products';
import { useEffect } from 'react';
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
  CircularProgress,
  Link,
} from '@mui/material';
import { setCurrentProduct } from '../../redux/reducers/currentProduct';
import { addToCart } from '../../redux/reducers/cart';

export default function Products({ testCategories, testProducts }) {
  useEffect(() => {
    if (!testProducts) {
      dispatch(fetchProducts()).then(data => dispatch(getProducts(data)));
    }
  }, []);

  const categories = testCategories
    ? testCategories
    : useSelector(state => state.categories);
  const chosenCategory = useSelector(state => state.chosenCategory);
  const products = testProducts
    ? testProducts
    : useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <Box
      mt={6}
      mb={6}
    >
      <Container
        data-testid='PRODUCTS'
        sx={{ display: 'flex', gap: 5, justifyContent: 'center' }}
      >
        {products?.length > 0 ? (
          products.map((product, i) => {
            return product.category === categories[chosenCategory].name &&
              product.inStock > 0 ? (
              <Card key={i}>
                <CardMedia
                  component='img'
                  sx={{ height: 120 }}
                  image={`${import.meta.env.VITE_UNSPLASH_URL}${product.name}`}
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
                  <Button
                    size='small'
                    onClick={() => {
                      dispatch(addToCart(product));
                      let item = { ...product };
                      item.inStock = item.inStock - 1;
                      dispatch(asyncUpdateProduct(item)).then(data => {
                        dispatch(updateProduct(data));
                      });
                    }}
                  >
                    ADD TO CART
                  </Button>
                  <Link
                    href={`/product/${product._id}`}
                    underline='none'
                    color='black'
                  >
                    <Button
                      size='small'
                      onClick={() => {
                        dispatch(setCurrentProduct(product));
                      }}
                    >
                      VIEW DETAILS
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ) : (
              ''
            );
          })
        ) : (
          <CircularProgress />
        )}
      </Container>
    </Box>
  );
}
